import { relations } from 'drizzle-orm';
import { text, integer, varchar, timestamp, pgTable, pgEnum, uniqueIndex, index } from 'drizzle-orm/pg-core';

const timestamps = {
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
};

export const roleEnum = pgEnum('role', ['student', 'teacher', 'admin']);

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).unique(),
  emailVerified: timestamp('email_verified'),
  image: text('image'),
  imageCldPubId: text('image_cld_pub_id'),
  role: roleEnum('role').default('student').notNull(),
  ...timestamps,
});

export const account = pgTable(
  'account',
  {
    id: text('id').primaryKey(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    type: varchar('type', { length: 50 }).notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('provider_account_id', { length: 255 }).notNull(),
    refreshToken: text('refresh_token'),
    accessToken: text('access_token'),
    expiresAt: integer('expires_at'),
    tokenType: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    idToken: text('id_token'),
    sessionState: varchar('session_state', { length: 255 }),
  },
  (account) => ({
    providerProviderAccountIdUnique: uniqueIndex('account_provider_provider_account_id_idx').on(
      account.provider,
      account.providerAccountId,
    ),
    userIdIdx: index('account_user_id_idx').on(account.userId),
  }),
);

export const session = pgTable(
  'session',
  {
    id: text('id').primaryKey(),
    sessionToken: text('session_token').notNull().unique(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    expires: timestamp('expires').notNull(),
  },
  (session) => ({
    userIdIdx: index('session_user_id_idx').on(session.userId),
  }),
);

export const verification = pgTable(
  'verification',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: text('token').notNull().unique(),
    expires: timestamp('expires').notNull(),
  },
  (verification) => ({
    identifierIdx: index('verification_identifier_idx').on(verification.identifier),
  }),
);

// Relations (follow pattern from app.ts)
export const userRelations = relations(user, ({ many }) => ({
  accounts: many(account),
  sessions: many(session),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;

export type Account = typeof account.$inferSelect;
export type NewAccount = typeof account.$inferInsert;

export type Session = typeof session.$inferSelect;
export type NewSession = typeof session.$inferInsert;

export type Verification = typeof verification.$inferSelect;
export type NewVerification = typeof verification.$inferInsert;

import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Root GET route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the classroom manager API!" });
});

// // CREATE: Add a new user
// app.post("/users", async (req: Request, res: Response) => {
//   try {
//     const { name, email } = req.body;
//
//     if (!name || !email) {
//       res.status(400).json({ error: "Name and email are required" });
//       return;
//     }
//
//     const [newUser] = await index
//       .insert(demoUsers)
//       .values({ name, email } as NewUser)
//       .returning();
//
//     res.status(201).json({ success: true, data: newUser });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: "Failed to create user" });
//   }
// });
//
// // READ: Get all users
// app.get("/users", async (req: Request, res: Response) => {
//   try {
//     const users = await index.select().from(demoUsers);
//     res.json({ success: true, data: users });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: "Failed to fetch users" });
//   }
// });
//
// // READ: Get a specific user by ID
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const users = await index.select().from(demoUsers).where(eq(demoUsers.id, parseInt(id)));
//
//     if (users.length === 0) {
//       res.status(404).json({ error: "User not found" });
//       return;
//     }
//
//     res.json({ success: true, data: users[0] });
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({ error: "Failed to fetch user" });
//   }
// });
//
// // UPDATE: Update a user
// app.put("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { name, email } = req.body;
//
//     if (!name && !email) {
//       res.status(400).json({ error: "At least one field (name or email) is required" });
//       return;
//     }
//
//     const updateData: any = {};
//     if (name) updateData.name = name;
//     if (email) updateData.email = email;
//
//     const [updatedUser] = await index
//       .update(demoUsers)
//       .set(updateData)
//       .where(eq(demoUsers.id, parseInt(id)))
//       .returning();
//
//     if (!updatedUser) {
//       res.status(404).json({ error: "User not found" });
//       return;
//     }
//
//     res.json({ success: true, data: updatedUser });
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ error: "Failed to update user" });
//   }
// });
//
// // DELETE: Remove a user
// app.delete("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//
//     await index.delete(demoUsers).where(eq(demoUsers.id, parseInt(id)));
//
//     res.json({ success: true, message: "User deleted successfully" });
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     res.status(500).json({ error: "Failed to delete user" });
//   }
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

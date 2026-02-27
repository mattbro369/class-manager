import { Subject } from '@/types';

export const DEPARTMENTS = ['CS', 'Math', 'English'];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dep) => ({
  value: dep,
  label: dep,
}));

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'Computer Science',
    description:
      'Fundamental principles of computing, programming basics, and problem-solving using algorithms.',
    created_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    code: 'MATH201',
    name: 'Linear Algebra',
    department: 'Mathematics',
    description:
      'Vector spaces, matrices, linear transformations, and applications to systems of equations.',
    created_at: '2024-02-20T14:30:00Z',
  },
  {
    id: 3,
    code: 'HIST310',
    name: 'Modern European History',
    department: 'History',
    description:
      'A survey of major political, social, and cultural developments in Europe from 1789 to the present.',
    created_at: '2024-03-10T09:15:00Z',
  },
];



export type Status = 'Active' | 'Inactive' | 'Pending' | 'Banned';
export type Role = 'Admin' | 'Editor' | 'Viewer' | 'Manager';
export type Priority = 'Low' | 'Normal' | 'High' | 'Critical';
export type TaskStatus = 'Not Started' | 'In Progress' | 'Completed' | 'Deferred';
export type Category = 'Electronics' | 'Clothing' | 'Food' | 'Sports' | 'Books';



export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  role: Role;
  department: string;
  status: Status;
  salary: number;
  hireDate: string;
  birthDate: string;
  city: string;
  country: string;
  avatarUrl: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: number; 
  priority: Priority;
  status: TaskStatus;
  dueDate: string;
  createdAt: string;
  progress: number;
}

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  stock: number;
  sold: number;
  rating: number; 
  inStock: boolean;
  imageUrl: string;
  createdAt: string;
}

export interface SalesStat {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
  orders: number;
}

export interface Department {
  id: number;
  name: string;
  headCount: number;
  budget: number;
  managerId: number;
}

// ─── Employees ────────────────────────────────────────────────────────────────

export const employees: Employee[] = [
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    fullName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: '+1 (555) 100-0001',
    role: 'Admin',
    department: 'Engineering',
    status: 'Active',
    salary: 95000,
    hireDate: '2019-03-12',
    birthDate: '1990-07-21',
    city: 'New York',
    country: 'USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Smith',
    fullName: 'Bob Smith',
    email: 'bob.smith@example.com',
    phone: '+1 (555) 100-0002',
    role: 'Manager',
    department: 'Sales',
    status: 'Active',
    salary: 82000,
    hireDate: '2020-06-01',
    birthDate: '1985-11-03',
    city: 'Los Angeles',
    country: 'USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    firstName: 'Carol',
    lastName: 'Williams',
    fullName: 'Carol Williams',
    email: 'carol.williams@example.com',
    phone: '+1 (555) 100-0003',
    role: 'Editor',
    department: 'Marketing',
    status: 'Pending',
    salary: 67000,
    hireDate: '2021-09-15',
    birthDate: '1993-04-17',
    city: 'Chicago',
    country: 'USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    firstName: 'David',
    lastName: 'Brown',
    fullName: 'David Brown',
    email: 'david.brown@example.com',
    phone: '+1 (555) 100-0004',
    role: 'Viewer',
    department: 'Support',
    status: 'Inactive',
    salary: 55000,
    hireDate: '2018-01-22',
    birthDate: '1988-09-09',
    city: 'Houston',
    country: 'USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 5,
    firstName: 'Eva',
    lastName: 'Martinez',
    fullName: 'Eva Martinez',
    email: 'eva.martinez@example.com',
    phone: '+1 (555) 100-0005',
    role: 'Editor',
    department: 'Engineering',
    status: 'Active',
    salary: 88000,
    hireDate: '2022-02-28',
    birthDate: '1995-12-30',
    city: 'Phoenix',
    country: 'USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 6,
    firstName: 'Frank',
    lastName: 'Garcia',
    fullName: 'Frank Garcia',
    email: 'frank.garcia@example.com',
    phone: '+1 (555) 100-0006',
    role: 'Manager',
    department: 'Finance',
    status: 'Active',
    salary: 91000,
    hireDate: '2017-07-04',
    birthDate: '1982-03-14',
    city: 'Philadelphia',
    country: 'USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 7,
    firstName: 'Grace',
    lastName: 'Lee',
    fullName: 'Grace Lee',
    email: 'grace.lee@example.com',
    phone: '+1 (555) 100-0007',
    role: 'Viewer',
    department: 'HR',
    status: 'Banned',
    salary: 60000,
    hireDate: '2023-05-11',
    birthDate: '1997-08-25',
    city: 'San Antonio',
    country: 'USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 8,
    firstName: 'Henry',
    lastName: 'Wilson',
    fullName: 'Henry Wilson',
    email: 'henry.wilson@example.com',
    phone: '+1 (555) 100-0008',
    role: 'Admin',
    department: 'Engineering',
    status: 'Active',
    salary: 105000,
    hireDate: '2016-11-30',
    birthDate: '1980-01-05',
    city: 'San Diego',
    country: 'USA',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
  },
];

// ─── Tasks ────────────────────────────────────────────────────────────────────

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Design new dashboard layout',
    description: 'Create wireframes and prototypes for the updated admin dashboard.',
    assignedTo: 3,
    priority: 'High',
    status: 'In Progress',
    dueDate: '2025-06-15',
    createdAt: '2025-05-01',
    progress: 45,
  },
  {
    id: 2,
    title: 'Fix login page bug',
    description: 'Users are unable to log in using SSO on Safari.',
    assignedTo: 5,
    priority: 'Critical',
    status: 'In Progress',
    dueDate: '2025-05-25',
    createdAt: '2025-05-10',
    progress: 70,
  },
  {
    id: 3,
    title: 'Write Q2 financial report',
    description: 'Compile revenue, expenses, and profit data for Q2.',
    assignedTo: 6,
    priority: 'Normal',
    status: 'Not Started',
    dueDate: '2025-07-01',
    createdAt: '2025-05-12',
    progress: 0,
  },
  {
    id: 4,
    title: 'Onboard new team members',
    description: 'Prepare onboarding materials and schedule orientation sessions.',
    assignedTo: 7,
    priority: 'Normal',
    status: 'Completed',
    dueDate: '2025-05-20',
    createdAt: '2025-05-01',
    progress: 100,
  },
  {
    id: 5,
    title: 'Migrate database to PostgreSQL',
    description: 'Move all legacy MySQL tables to PostgreSQL and update queries.',
    assignedTo: 1,
    priority: 'High',
    status: 'In Progress',
    dueDate: '2025-06-30',
    createdAt: '2025-04-20',
    progress: 55,
  },
  {
    id: 6,
    title: 'Update marketing website copy',
    description: 'Refresh all landing page text to reflect new brand guidelines.',
    assignedTo: 3,
    priority: 'Low',
    status: 'Deferred',
    dueDate: '2025-08-01',
    createdAt: '2025-05-05',
    progress: 10,
  },
  {
    id: 7,
    title: 'Set up CI/CD pipeline',
    description: 'Configure GitHub Actions for automated builds and deployments.',
    assignedTo: 8,
    priority: 'High',
    status: 'Completed',
    dueDate: '2025-05-18',
    createdAt: '2025-04-28',
    progress: 100,
  },
  {
    id: 8,
    title: 'Customer support backlog review',
    description: 'Go through the last 30 days of support tickets and resolve outstanding issues.',
    assignedTo: 4,
    priority: 'Normal',
    status: 'Not Started',
    dueDate: '2025-05-31',
    createdAt: '2025-05-14',
    progress: 0,
  },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 129.99,
    stock: 240,
    sold: 1800,
    rating: 4.5,
    inStock: true,
    imageUrl: 'https://placehold.co/60x60?text=WH',
    createdAt: '2024-01-10',
  },
  {
    id: 2,
    name: 'Running Shoes',
    category: 'Sports',
    price: 89.95,
    stock: 0,
    sold: 3200,
    rating: 4.7,
    inStock: false,
    imageUrl: 'https://placehold.co/60x60?text=RS',
    createdAt: '2024-02-14',
  },
  {
    id: 3,
    name: 'JavaScript: The Good Parts',
    category: 'Books',
    price: 24.99,
    stock: 560,
    sold: 900,
    rating: 4.8,
    inStock: true,
    imageUrl: 'https://placehold.co/60x60?text=JS',
    createdAt: '2024-03-01',
  },
  {
    id: 4,
    name: 'Slim Fit T-Shirt',
    category: 'Clothing',
    price: 19.99,
    stock: 130,
    sold: 2100,
    rating: 4.1,
    inStock: true,
    imageUrl: 'https://placehold.co/60x60?text=TS',
    createdAt: '2024-04-05',
  },
  {
    id: 5,
    name: 'Organic Granola Bar',
    category: 'Food',
    price: 3.49,
    stock: 1200,
    sold: 8700,
    rating: 4.3,
    inStock: true,
    imageUrl: 'https://placehold.co/60x60?text=GB',
    createdAt: '2024-04-20',
  },
  {
    id: 6,
    name: '4K Smart TV 55"',
    category: 'Electronics',
    price: 699.0,
    stock: 45,
    sold: 310,
    rating: 4.6,
    inStock: true,
    imageUrl: 'https://placehold.co/60x60?text=TV',
    createdAt: '2024-05-15',
  },
  {
    id: 7,
    name: 'Yoga Mat',
    category: 'Sports',
    price: 39.99,
    stock: 0,
    sold: 1540,
    rating: 4.4,
    inStock: false,
    imageUrl: 'https://placehold.co/60x60?text=YM',
    createdAt: '2024-06-01',
  },
  {
    id: 8,
    name: 'Winter Jacket',
    category: 'Clothing',
    price: 149.0,
    stock: 75,
    sold: 620,
    rating: 4.2,
    inStock: true,
    imageUrl: 'https://placehold.co/60x60?text=WJ',
    createdAt: '2024-07-18',
  },
];

// ─── Sales Stats ──────────────────────────────────────────────────────────────

export const salesStats: SalesStat[] = [
  { month: 'Jan', revenue: 42000, expenses: 28000, profit: 14000, orders: 320 },
  { month: 'Feb', revenue: 38000, expenses: 25000, profit: 13000, orders: 290 },
  { month: 'Mar', revenue: 55000, expenses: 30000, profit: 25000, orders: 410 },
  { month: 'Apr', revenue: 61000, expenses: 33000, profit: 28000, orders: 460 },
  { month: 'May', revenue: 74000, expenses: 40000, profit: 34000, orders: 530 },
  { month: 'Jun', revenue: 68000, expenses: 37000, profit: 31000, orders: 490 },
  { month: 'Jul', revenue: 80000, expenses: 42000, profit: 38000, orders: 580 },
  { month: 'Aug', revenue: 77000, expenses: 41000, profit: 36000, orders: 555 },
  { month: 'Sep', revenue: 63000, expenses: 35000, profit: 28000, orders: 470 },
  { month: 'Oct', revenue: 71000, expenses: 38000, profit: 33000, orders: 510 },
  { month: 'Nov', revenue: 88000, expenses: 45000, profit: 43000, orders: 640 },
  { month: 'Dec', revenue: 95000, expenses: 50000, profit: 45000, orders: 720 },
];

// ─── Departments ──────────────────────────────────────────────────────────────

export const departments: Department[] = [
  { id: 1, name: 'Engineering',  headCount: 24, budget: 1200000, managerId: 8 },
  { id: 2, name: 'Sales',        headCount: 18, budget:  800000, managerId: 2 },
  { id: 3, name: 'Marketing',    headCount: 12, budget:  600000, managerId: 3 },
  { id: 4, name: 'Finance',      headCount: 8,  budget:  400000, managerId: 6 },
  { id: 5, name: 'HR',           headCount: 6,  budget:  300000, managerId: 7 },
  { id: 6, name: 'Support',      headCount: 15, budget:  500000, managerId: 4 },
];

// ─── Lookup maps (handy for DevExtreme lookup columns) ────────────────────────

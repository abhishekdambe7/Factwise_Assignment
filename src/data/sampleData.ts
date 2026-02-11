export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  salary: number;
  joinDate: string;
  status: 'Active' | 'Inactive';
  location: string;
}

export const sampleData: Employee[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    department: 'Engineering',
    role: 'Senior Developer',
    salary: 125000,
    joinDate: '2020-03-15',
    status: 'Active',
    location: 'San Francisco, CA'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    department: 'Product',
    role: 'Product Manager',
    salary: 135000,
    joinDate: '2019-07-22',
    status: 'Active',
    location: 'New York, NY'
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    department: 'Engineering',
    role: 'Full Stack Developer',
    salary: 110000,
    joinDate: '2021-01-10',
    status: 'Active',
    location: 'Seattle, WA'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    department: 'Design',
    role: 'UI/UX Designer',
    salary: 95000,
    joinDate: '2020-11-05',
    status: 'Active',
    location: 'Austin, TX'
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'd.wilson@example.com',
    department: 'Sales',
    role: 'Sales Manager',
    salary: 105000,
    joinDate: '2018-05-18',
    status: 'Active',
    location: 'Chicago, IL'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    email: 'lisa.a@example.com',
    department: 'Marketing',
    role: 'Marketing Director',
    salary: 120000,
    joinDate: '2019-02-28',
    status: 'Active',
    location: 'Boston, MA'
  },
  {
    id: 7,
    name: 'Robert Taylor',
    email: 'r.taylor@example.com',
    department: 'Engineering',
    role: 'DevOps Engineer',
    salary: 115000,
    joinDate: '2021-06-12',
    status: 'Active',
    location: 'Denver, CO'
  },
  {
    id: 8,
    name: 'Jennifer Martinez',
    email: 'j.martinez@example.com',
    department: 'HR',
    role: 'HR Manager',
    salary: 98000,
    joinDate: '2020-09-20',
    status: 'Active',
    location: 'Portland, OR'
  },
  {
    id: 9,
    name: 'James Brown',
    email: 'james.brown@example.com',
    department: 'Engineering',
    role: 'Backend Developer',
    salary: 118000,
    joinDate: '2021-03-08',
    status: 'Active',
    location: 'San Francisco, CA'
  },
  {
    id: 10,
    name: 'Amanda White',
    email: 'amanda.w@example.com',
    department: 'Product',
    role: 'Product Designer',
    salary: 102000,
    joinDate: '2020-04-14',
    status: 'Active',
    location: 'New York, NY'
  },
  {
    id: 11,
    name: 'Christopher Lee',
    email: 'c.lee@example.com',
    department: 'Engineering',
    role: 'Frontend Developer',
    salary: 108000,
    joinDate: '2021-08-30',
    status: 'Active',
    location: 'Seattle, WA'
  },
  {
    id: 12,
    name: 'Jessica Garcia',
    email: 'j.garcia@example.com',
    department: 'Sales',
    role: 'Account Executive',
    salary: 92000,
    joinDate: '2021-11-15',
    status: 'Active',
    location: 'Chicago, IL'
  },
  {
    id: 13,
    name: 'Daniel Rodriguez',
    email: 'd.rodriguez@example.com',
    department: 'Engineering',
    role: 'Tech Lead',
    salary: 145000,
    joinDate: '2018-12-03',
    status: 'Active',
    location: 'San Francisco, CA'
  },
  {
    id: 14,
    name: 'Michelle Thompson',
    email: 'michelle.t@example.com',
    department: 'Marketing',
    role: 'Content Strategist',
    salary: 88000,
    joinDate: '2021-02-19',
    status: 'Active',
    location: 'Austin, TX'
  },
  {
    id: 15,
    name: 'Kevin Moore',
    email: 'kevin.m@example.com',
    department: 'Engineering',
    role: 'QA Engineer',
    salary: 95000,
    joinDate: '2020-07-25',
    status: 'Active',
    location: 'Denver, CO'
  },
  {
    id: 16,
    name: 'Nicole Jackson',
    email: 'nicole.j@example.com',
    department: 'Finance',
    role: 'Financial Analyst',
    salary: 87000,
    joinDate: '2021-05-11',
    status: 'Active',
    location: 'Boston, MA'
  },
  {
    id: 17,
    name: 'Ryan Harris',
    email: 'ryan.h@example.com',
    department: 'Engineering',
    role: 'Mobile Developer',
    salary: 112000,
    joinDate: '2020-10-08',
    status: 'Active',
    location: 'Seattle, WA'
  },
  {
    id: 18,
    name: 'Stephanie Clark',
    email: 'stephanie.c@example.com',
    department: 'Product',
    role: 'Product Owner',
    salary: 128000,
    joinDate: '2019-09-16',
    status: 'Active',
    location: 'New York, NY'
  },
  {
    id: 19,
    name: 'Thomas Lewis',
    email: 'thomas.l@example.com',
    department: 'Engineering',
    role: 'Data Engineer',
    salary: 122000,
    joinDate: '2021-01-22',
    status: 'Active',
    location: 'San Francisco, CA'
  },
  {
    id: 20,
    name: 'Rachel Walker',
    email: 'rachel.w@example.com',
    department: 'Design',
    role: 'Visual Designer',
    salary: 91000,
    joinDate: '2020-12-01',
    status: 'Active',
    location: 'Portland, OR'
  }
];


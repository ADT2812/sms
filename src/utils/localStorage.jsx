const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-07-09",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve mobile navigation issues.",
        taskDate: "2026-07-05",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate authentication API.",
        taskDate: "2026-07-04",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Develop employee dashboard.",
        taskDate: "2026-07-10",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Complete profile page layout.",
        taskDate: "2026-07-02",
        category: "Frontend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode toggle.",
        taskDate: "2026-07-12",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Module",
        taskDescription: "Complete payment gateway integration.",
        taskDate: "2026-07-03",
        category: "Backend"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design employee database.",
        taskDate: "2026-07-11",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test login functionality.",
        taskDate: "2026-07-01",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Notifications",
        taskDescription: "Build notification component.",
        taskDate: "2026-07-14",
        category: "Frontend"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Review authentication security.",
        taskDate: "2026-07-15",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy latest build.",
        taskDate: "2026-07-06",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Optimization",
        taskDescription: "Optimize application speed.",
        taskDate: "2026-07-07",
        category: "Optimization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Accessibility",
        taskDescription: "Improve accessibility score.",
        taskDate: "2026-07-13",
        category: "UI/UX"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Write project documentation.",
        taskDate: "2026-07-08",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate's code.",
        taskDate: "2026-07-04",
        category: "Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Unit Testing",
        taskDescription: "Write unit tests for APIs.",
        taskDate: "2026-07-16",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Service",
        taskDescription: "Configure email notifications.",
        taskDate: "2026-07-05",
        category: "Backend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Analytics",
        taskDescription: "Add dashboard analytics charts.",
        taskDate: "2026-07-18",
        category: "Feature"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

   return { employees, admin }
}
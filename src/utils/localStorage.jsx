const employees = [
  {
    id: 1,
    firstName: "Ahmed",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Sales performance report.",
        date: "2025-04-18",
        category: "Sales"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Follow-up",
        description: "Call clients to gather feedback.",
        date: "2025-04-10",
        category: "Support"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit Budget Proposal",
        description: "Failed to submit the budget plan.",
        date: "2025-04-05",
        category: "Finance"
      }
    ]
  },
  {
    id: 2,
    firstName: "Bilal",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Landing Page",
        description: "Create new UI for the product landing page.",
        date: "2025-04-19",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "UI Testing",
        description: "Test UI components for mobile responsiveness.",
        date: "2025-04-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Bug #432",
        description: "Resolve layout issue on signup page.",
        date: "2025-04-14",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy v2.0",
        description: "Deployment failed due to server issue.",
        date: "2025-04-11",
        category: "Deployment"
      }
    ]
  },
  {
    id: 3,
    firstName: "Kashif",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Plan Team Meeting",
        description: "Schedule team meeting for next sprint planning.",
        date: "2025-04-20",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Roadmap",
        description: "Draft project roadmap for Q2.",
        date: "2025-04-15",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Missed Deadline",
        description: "Failed to deliver document before deadline.",
        date: "2025-04-12",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    firstName: "Hassan",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Data Backup",
        description: "Backup database and user data.",
        date: "2025-04-19",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Server Maintenance",
        description: "Perform scheduled maintenance on server.",
        date: "2025-04-17",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Install Antivirus",
        description: "Ensure antivirus is up to date on all machines.",
        date: "2025-04-14",
        category: "Security"
      }
    ]
  },
  {
    id: 5,
    firstName: "Usman",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Blog Post",
        description: "Publish article on company blog.",
        date: "2025-04-19",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Social Media Update",
        description: "Update company LinkedIn and Twitter.",
        date: "2025-04-17",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Newsletter Design",
        description: "Design was rejected by team.",
        date: "2025-04-15",
        category: "Design"
      }
    ]
  }
];


const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}]


export const setLocalStorage = () => {
    localStorage.setItem("Employees", JSON.stringify(employees))
    localStorage.setItem("Admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("Employees"))
    const admin = JSON.parse(localStorage.getItem("Admin"))
    
    return {employees, admin}
}
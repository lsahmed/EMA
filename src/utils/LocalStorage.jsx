const employees = [
  {
    "id": 1,
    "email": "e1e@me.com",
    "password": "123",
    "firstName": "Aarav",
    "tasks": [
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete Quarterly Financial Report",
        "description": "Compile and finalize the financial data for the quarterly report.",
        "date": "2025-03-15",
        "category": "Report"
      },
      {
        "accepted": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Budget for Upcoming Fiscal Year",
        "description": "Develop a budget for the upcoming fiscal year based on historical data and forecasted expenses.",
        "date": "2025-03-18",
        "category": "Finance"
      },
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Analyze Revenue Streams for Q1",
        "description": "Review and analyze the different revenue streams for Q1 to provide insights into performance.",
        "date": "2025-03-22",
        "category": "Finance"
      }
    ],
    "taskCounts": {
      "totalTasks": 3,
      "accepted": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 2,
    "email": "ilsa@gmail.com",
    "password": "123",
    "firstName": "Ilsa",
    "tasks": [
      {
        "accepted": false ,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare Q2 Budget Plan",
        "description": "Create a detailed budget plan for the second quarter based on projected expenses.",
        "date": "2025-03-10",
        "category": "Finance"
      },
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Conduct Market Research for New Product",
        "description": "Conduct in-depth market research for the upcoming product launch.",
        "date": "2025-03-20",
        "category": "Research"
      },
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop Marketing Campaign for New Product",
        "description": "Design and execute a marketing campaign to promote the new product launch.",
        "date": "2025-03-25",
        "category": "Marketing"
      }
    ],
    "taskCounts": {
      "totalTasks": 2,
      "accepted": 2,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Arjun",
    "tasks": [
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Organize Monthly Team Meeting",
        "description": "Schedule and arrange the logistics for the team meeting, including sending invites.",
        "date": "2025-03-17",
        "category": "Meeting"
      },
      {
        "accepted": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Team Calendar for Q2",
        "description": "Update the team calendar with all upcoming deadlines and important meetings for the second quarter.",
        "date": "2025-03-19",
        "category": "Meeting"
      },
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Plan Team Building Activity",
        "description": "Organize a team-building activity to improve team collaboration and communication.",
        "date": "2025-03-26",
        "category": "Meeting"
      }
    ],
    "taskCounts": {
      "totalTasks": 3,
      "accepted": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Ananya",
    "tasks": [
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Project Documentation",
        "description": "Ensure that the project documentation is up-to-date with the latest changes and additions.",
        "date": "2025-03-12",
        "category": "Documentation"
      },
      {
        "accepted": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create User Manuals for New Features",
        "description": "Create detailed user manuals for the new features added to the product in the latest release.",
        "date": "2025-03-20",
        "category": "Documentation"
      },
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Audit Project Documentation",
        "description": "Review all project documentation to ensure completeness and accuracy.",
        "date": "2025-03-22",
        "category": "Documentation"
      }
    ],
    "taskCounts": {
      "totalTasks": 3,
      "accepted": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Rahul",
    "tasks": [
      {
        "accepted": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Critical Application Bugs",
        "description": "Identify and resolve the critical bugs that are affecting the user experience in the application.",
        "date": "2025-03-05",
        "category": "Development"
      },
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement New Feature for User Profiles",
        "description": "Develop and implement a new feature allowing users to customize their profiles with additional data fields.",
        "date": "2025-03-18",
        "category": "Development"
      },
      {
        "accepted": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Refactor Legacy Code for Performance",
        "description": "Refactor the legacy code to improve application performance and scalability.",
        "date": "2025-03-25",
        "category": "Development"
      }
    ],
    "taskCounts": {
      "totalTasks": 3,
      "accepted": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [{
    "id": 1,
    "firstName": "Admin",
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}
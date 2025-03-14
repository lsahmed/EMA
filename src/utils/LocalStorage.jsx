const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete Quarterly Financial Report",
                "description": "Compile and finalize the financial data for the quarterly report.",
                "date": "2025-03-15",
                "category": "Report"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare Q2 Budget Plan",
                "description": "Create a detailed budget plan for the second quarter based on projected expenses.",
                "date": "2025-03-10",
                "category": "Finance"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Organize Monthly Team Meeting",
                "description": "Schedule and arrange the logistics for the team meeting, including sending invites.",
                "date": "2025-03-17",
                "category": "Meeting"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Project Documentation",
                "description": "Ensure that the project documentation is up-to-date with the latest changes and additions.",
                "date": "2025-03-12",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Critical Application Bugs",
                "description": "Identify and resolve the critical bugs that are affecting the user experience in the application.",
                "date": "2025-03-05",
                "category": "Development"
            }
        ]
    }
];

const admin = [{
    "id": 1,
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
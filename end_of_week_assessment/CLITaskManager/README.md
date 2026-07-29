# CLI Task Manager

A simple Command Line Interface (CLI) Task Manager built with Node.js. It allows users to manage tasks directly from the terminal. All tasks are stored in a JSON file, ensuring data is preserved between program executions.

## Features

- Add new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks by status
- Search tasks by title
- Sort tasks by priority
- Persistent storage using a JSON file
- Input validation
- Handles missing or corrupted data files gracefully

## Technologies Used

- Node.js
- JavaScript (ES6)
- File System (`fs`) Module
- prompt-sync
- `path` module

## Project Structure
```
CLI-Task-Manager/
│
├── index.js
├── menu.js
├── tasks.json
├── package.json
├── README.md
│
├── services/
│   ├── addTask.js
│   ├── deleteTask.js
│   ├── filterTassk.js
│   ├── markTask.js
│   ├── searchTasks.js
│   ├── sortTasks.js
│   ├── updateTask.js
│   └── viewTask.js
│
└── utils/
    ├── loadTasks.js
    ├── saveTasks.js
    └── validateInput.js
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd CLITaskManager
```

3. Install dependencies

```bash
npm install
```

## Run the Project

```bash
node index.js
```

## Task Format

Each task is stored in the following format:

```json
{
  "id": 1,
  "title": "JavaScript assignment",
  "description": "Finish JS assignment",
  "status": "pending",
  "priority": "high",
  "createdAt": "ISO date"
}
```

## Menu Options

```
1. Add Task
2. Delete Task
3. Filter Task
4. Mark Task
5. Search Tasks
6. Sort Tasks
7. Update Task
8. View Task
9. Exit
```

## Input Validation

- Task title cannot be empty.
- Priority must be one of:
  - High
  - Medium
  - Low

## Error Handling

- Creates `tasks.json` if it does not exist.
- Displays appropriate error messages for invalid user input.

## Future Improvements

- Add due dates
- Input Validation in Update tasks
- SearchTasks includes all the tasks with searched word
- Add task categories
- Support multiple sorting options
- Add colored terminal output
- Export tasks to CSV

## Author

**Kauser Naz**

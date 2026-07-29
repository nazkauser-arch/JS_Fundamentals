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

## Project Structure

```
CLI-Task-Manager/
│
├── index.js
├── menu.js
├── tasks.json
│
├── handlers/
│   ├── addTask.js
│   ├── viewTasks.js
│   ├── updateTask.js
│   ├── deleteTask.js
│   ├── markCompleted.js
│   ├── filterTasks.js
│   ├── searchTask.js
│   └── sortTasks.js
│
├── utils/
│   ├── fileHandler.js
│   └── validators.js
│
├── package.json
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd CLI-Task-Manager
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
  "title": "Complete JavaScript assignment",
  "priority": "High",
  "completed": false
}
```

## Menu Options

```
1. Add Task
2. View Tasks
3. Update Task
4. Delete Task
5. Mark Task as Completed
6. Filter Tasks
7. Search Task
8. Sort Tasks
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
- Handles invalid or corrupted JSON data.
- Displays appropriate error messages for invalid user input.

## Future Improvements

- Add due dates
- Add task categories
- Support multiple sorting options
- Add colored terminal output
- Export tasks to CSV

## Author

**Kauser Naz**

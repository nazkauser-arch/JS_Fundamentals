# MongoDB Practice Tasks

This repository contains MongoDB tasks completed during my MERN stack internship. The tasks focus on database design, CRUD operations, advanced queries, aggregation pipelines, indexing, and connecting MongoDB with Node.js.

## Tech Stack

- MongoDB
- MongoDB Shell (mongosh)
- Node.js
- MongoDB Node.js Driver

## Database Design

The database consists of two collections:

### Users Collection

Stores user information such as name, email, and role.

Example document:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user"
}
```

### Tasks Collection

Stores task details including title, description, status, priority, owner, and timestamps.

Example document:

```json
{
  "title": "Learn MongoDB",
  "description": "Practice MongoDB queries",
  "status": "pending",
  "priority": "high",
  "ownerId": "ObjectId",
  "dueDate": "ISODate",
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

## Completed Tasks

### CRUD Operations

- Insert users and multiple task records
- Retrieve all users and tasks
- Find tasks using ObjectId
- Get tasks based on a specific user
- Update task status
- Update task priority and due date
- Delete tasks by ID

### Query Operations

Implemented MongoDB queries for:

- Filtering tasks by status
- Finding high-priority pending tasks
- Searching tasks using case-insensitive regular expressions
- Finding tasks before a specific due date
- Sorting tasks by creation date and due date
- Implementing pagination using limit and skip
- Counting tasks by status and user

### Aggregation

Implemented aggregation pipelines for:

- Counting tasks by status
- Counting tasks assigned to each user
- Grouping tasks based on priority
- Finding users with more than three tasks

## Indexing

Created indexes to improve query performance:

- Unique index on user email to prevent duplicate email addresses
- Index on `ownerId` for faster user-task lookups
- Compound index on `ownerId` and `status` for optimized filtering
- Index on `createdAt` for sorting tasks by creation date

Query performance was analyzed using:

```javascript
explain("executionStats")
```

## Project Structure

```
mongodb-tasks/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   └── mongodb-queries.js
│
├── .env
├── package.json
└── README.md
```

## Environment Setup

Create a `.env` file and add MongoDB connection details:

```
MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=task_management
```

## Running the Project

Install dependencies:

```bash
npm install
```

Run MongoDB queries:

```bash
node src/mongodb-queries.js
```

## Learning Outcomes

Through these tasks, I learned:

- MongoDB database and collection design
- CRUD operations and query operators
- Aggregation pipelines
- Index creation and optimization
- Query performance analysis
- Connecting MongoDB with Node.js applications
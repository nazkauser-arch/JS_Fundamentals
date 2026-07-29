## 1. Get all tasks
**HTTP method**
- get

**URL**
- /tasks

**Expected status code**
- 200 OK

## 2. Get one task
**HTTP method**
- get

**URL**
/tasks/:id

**Expected status code**
- 200 OK

if the task does not exist:
- 404 Not Found

## 3. Create a task
**HTTP method**
- POST

**URL**
- /tasks

**Expected status code**
- 201 created

## 4. Update a task
**HTTP method**
- PUT

**URL**
- /tasks/:id

**Expected status code**
- 200 OK

## 5. Mark task as completed
**HTTP method**
- PATCH

**URL**
- /tasks/:id/status

**Expected status code**
- 200 OK

## 6. Delete a task
**HTTP method**
- DELETE

**URL**
- /tasks/:id

**Expected status code**
- 204 No Content

## 7. Search task by title
**HTTP method**
- GET

**URL**
- /tasks/search?title=keyword

**Expected status code**
- 200 OK

## 8. Filter task by status
**HTTP method**
- GET

**URL**
- /tasks?status=pending

**Expected status code**
- 200 OK
### 1. Why are users and tasks stored in separate collections?
- Users and tasks were stored in separate collections because they represent different type of data. This keeps the database organized, and it is easier to manage, query or update the data.

### 2. When would embedding tasks inside users be acceptable?
- Embedding tasks inside users would be acceptable when there is a one-to-one relationship betweek user and task, or even in one-to-many relationship, if many side is relatively small, wembedding tasks inside users is acceptable.

### 3. What problems could occur if one user had 100,000 embedded tasks?
- Mongodb has a document size of 16 MB, embedding a 100,000 tasks inside one user can exceed the limit.
- With tasks in separate collection, each task can be updated, created or sorted independently, while in users, the database has to load the entire user document to update a single task.

### 4. How is a task connected to its owner?
- A task is connected to its owner by a field named "ownerId", which contains the userId.

### 5. Which fields should be required?
### users
- name 
- email --> identify user for login info
- role --> for user permissions
- createdAt 

### tasks
- title --> a task should have a title 
- description should be optional
- status --> to distinguish between tasks
- priority --> to identify the high priority tasks
- ownerId --> to identify which user this task belongs to
- dueDate should be optional
- createdAt
- updatedAt


# Difference Between Route, Query, and Body Parameters

- Route parameters, query parameters, and body parameters are different ways to send data from the client to the server in an API request. Route parameters are values included directly in the URL path and are mainly used to identify a specific resource, for example `/tasks/5` where `5` represents the task ID.
- Query parameters are added after a `?` in the URL and are used for filtering, searching or sorting data, for example `/tasks?status=completed`. 
- Body parameters are data sent inside the request body and are commonly used with POST, PUT and PATCH requests to create or update resources, for example sending task details like title, status and priority in JSON format.
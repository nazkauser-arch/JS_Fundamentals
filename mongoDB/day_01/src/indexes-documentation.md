### 1. Why each index was created?

- The index was created to search for the data faster

### 2. Which query will benefit from it

- Find(), FindOne() and sort() will benefit from it. With indexes, the query doesn't sacn all documents, instead it looks for the index and jumps directly to the matching document.

### 3. Why adding an index to every field is not a good idea

- Adding an index for every field is not a good idea because every time a document is insetted or updated, mongodb has to update its relevent index, that's why we only add index to the fields we will be using most for searching.

### 4. Why the order of fields in a compound index matters

- The order of fields in compound index matters because mongodb use indexes from left to right.
- For example, when we created a compound index for ownerId and status, the index for ownerId will be sorted first.
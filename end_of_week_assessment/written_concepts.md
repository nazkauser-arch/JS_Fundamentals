## 1. Primitive and Reference types

### Primitive type
- Primitive types are datatypes that are referenced directly, the variable name points to the value itself. Copying a primitive type copies the value.
- a = 7
b = a
b = 5
now a = 7 and b = 5
- For example: Integer, String, Boolean etc

### Reference type
- Reference types are datatypes that allocates the memory for the value. Copying a reference type copies the memory of the variable name.

- user1 = {
    id: "1",
    name: "Ahmad",
}
user2 = user1
user2 = {
    id: "2", 
    name: "Sara"
}
now 
user1 = {
    id: "2", 
    name: "Sara"
} and 
user2 = {
    id: "2", 
    name: "Sara"
}
- For example: Object, Class

## == vs ===

### == 
- == is loose equality, == compares only the values and perfrom type coercion if datatypes are different
- 5 == "5" => true
- === is strict equalit, === compares the value and the datatype
- 5 === "5" => false
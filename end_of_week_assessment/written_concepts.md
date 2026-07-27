## 1. Primitive and Reference types

### Primitive type
- Primitive types are datatypes that are referenced directly, the variable name points to the value itself. Copying a primitive type copies the value.
- a = 7
b = a
b = 5
now a = 7 and b = 5
### For example
 Integer, String, Boolean etc

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
### For example: 
Object, Class

## 2. == vs ===

### == 
- == is loose equality, == compares only the values and perform type coercion if datatypes are different
- 5 == "5" => true

### ===
- === is strict equality, === compares the value and the datatype
- 5 === "5" => false

## 3. Closure

- Closure allows you to access variable that is in outside (lexical) scope, in the outer function.

## 4. Pure Function
- A pure function has the same output everytime for a given input.
### For example 
function sum(a, b){
    return a + b
} this function returns gives the same output everytime

## 5. Difference b/w map() and filter()

### map()
- map() returns a new array after implementing the given function on each of the element of the existing array.
- filter() checks every element with condition and returns a new array with elements that pass that condition.

## 6. Event-loop responsibilty

- Event-loop responsibility manages the asynchronous code by monitoring the call stack and callback queue.

## 7. Asynchronous vs Synchronous code

### Synchronous
- Synchronous execution means executing code in a sequence, a line of code starts executing only after the previous code has executed completely
- In asynchronous execution, thw code doesn't wait for the tasks that is taking time, if an API call is waiting for the data, the code after that call keeps executing.

## 8. O(n)
- O(n) means the function is executing linearly

## 9. Use of Set
- Set is used when a fucntion requires sorted and unique values

## 10. Difference b/w a stack and a queue

### Stack
- Stack follows LIFO (last in first out), the elements in this data structure can be added and removed from the top only.

### Queue
- Queue follows FIFO (first in first out), the elements in this data structure can be added from rear, and removed from the front.



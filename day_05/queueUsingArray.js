class Queue {
    constructor (){
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift()
        } else {
            return null
        }
    }

    front() {
        if(this.items.length > 0) {
        return this.items[0]
        } else {
            return null
        }
    }

    rear() {
        if (this.items.length > 0) {
            return this.items[this.items.length - 1]
        } else {
            return null
        }
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
}

//Object
const queue = new Queue()

//test empty queue
console.log("Is empty:", queue.isEmpty()) 
console.log("Front:", queue.front()) 
console.log("Dequeue:", queue.dequeue()) 
console.log("Size:", queue.size()) 

//add elements
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log("Queue:", queue.items) 
console.log("Front:", queue.front()) 
console.log("Size:", queue.size()) 


//remove elements
console.log("Removed:", queue.dequeue()) 
// : Removed: 10

console.log("Removed:", queue.dequeue()) 
console.log("Queue after dequeue:", queue.items) 
console.log("Front after dequeue:", queue.front()) 
console.log("Size after dequeue:", queue.size()) 


//add more after removing
queue.enqueue(50)
queue.enqueue(60)
console.log("Queue after adding again:", queue.items) 
console.log("Front:", queue.front()) 


//empty the queue completely
while (!queue.isEmpty()) {
    console.log("Removing:", queue.dequeue())
}

console.log("Final queue:", queue.items) 
console.log("Final size:", queue.size()) 
console.log("Empty check:", queue.isEmpty()) 


//test dequeue on empty queue
console.log("Dequeue empty:", queue.dequeue()) 



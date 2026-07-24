class Stack {
    constructor () {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        if (this.items.length === 0){
            return null
        } else {
            let poppedItem = this.items.pop()
            return poppedItem
        }
    }

    top() {
        if (!(this.items.length === 0)){
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
const stack = new Stack()

//test empty stack
console.log("Empty:", stack.isEmpty()) //true
console.log("Top empty:", stack.top()) //null
console.log("Pop empty:", stack.pop()) //null
console.log("Size:", stack.size()) //0

//add elements
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)

console.log("After pushes:", stack.items) //[100, 200, 300, 400]
console.log("Top:", stack.top()) //400
console.log("Size:", stack.size()) //4

//remove some elements
console.log("Popped:", stack.pop()) //400
console.log("Popped:", stack.pop()) // 300

console.log("After pops:", stack.items) //[100, 200]
console.log("Top after pops:", stack.top()) //200
console.log("Size after pops:", stack.size()) //2

//add more elements after popping
stack.push(500)
stack.push(600)

console.log("After adding again:", stack.items) //100, 200, 500, 600
console.log("Top:", stack.top()) //600

//empty the stack completely
while (!stack.isEmpty()) {
    console.log("Removing:", stack.pop()) // 600, \n500, \n200, \n100
}

console.log("Final stack:", stack.items) //[]
console.log("Final size:", stack.size()) //0
console.log("Final empty check:", stack.isEmpty()) //true

//try operations after emptying
console.log("Pop after empty:", stack.pop()) //null
console.log("Top after empty:", stack.top()) //null
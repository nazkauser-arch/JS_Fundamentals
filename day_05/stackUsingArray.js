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

module.exports = Stack
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

module.exports = Queue
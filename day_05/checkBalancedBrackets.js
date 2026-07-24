function isBalancedBrackets(string) {
    const Stack = require("./stackUsingArray")
    const stack = new Stack()

    const matchingBrackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for (let i of string) {
        if (i === "(" || i === "{" || i === "[") {
            stack.push(i)
        } else if (i === ")" || i === "}" || i === "]") {
            if (stack.isEmpty()) {
                return "Not balanced"
            } else {
                if (matchingBrackets[i] === stack.top()) {
                    stack.pop()
                } else {
                    return "Not balanced"
                }
            }
        }
    }
    if (stack.isEmpty() === true) {
        return "Balanced"
    } 
}


//test cases
console.log(isBalancedBrackets("({[]})"))

console.log(isBalancedBrackets("{[()()]}"))

console.log(isBalancedBrackets("{{[[(())]]}}"))

console.log(isBalancedBrackets("({[}])"))

console.log(isBalancedBrackets("(((([[{{{}}]]))))"))

console.log(isBalancedBrackets("({[()]})[{()}](([]))"))

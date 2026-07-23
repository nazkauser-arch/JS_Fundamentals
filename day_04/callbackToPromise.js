//using callback() func
function getUser(callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: "Ali"
        })
    }, 2000)
}

getUser((user) => {
    console.log(user)
})

//using Promise()
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let user = []
        let result = user.push({
            id: "1",
            name: "Ali"
        })
        resolve(`The array after 2 sec delay is ${JSON.stringify(user)}`)
    }, 2000)
})

promise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
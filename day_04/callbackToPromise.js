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

// //using Promise()
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let user = []
        let result = user.push({
            id: "1",
            name: "Ali"
        })
        resolve(`The array after 2 sec delay is ${JSON.stringify(user)}`)
    }, 2000)
})

mypromise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds")
    }, 2000)
})

promise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })


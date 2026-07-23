function timeoutWrapper(promise, time) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Request timed out")
        }, time)
    })

    return Promise.race([promise, timeoutPromise])
}

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")

timeoutWrapper(fetchUsers, 3000)
    .then((response) => response.json())
    .then((users) => {
        console.log(users)
    })
    .catch((error) => {
        console.log(error)
    })
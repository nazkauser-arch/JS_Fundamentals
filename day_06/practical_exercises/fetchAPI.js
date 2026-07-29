console.log("Start")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    })
    .then((users) => {
        console.log(users)
    })

console.log("End")    

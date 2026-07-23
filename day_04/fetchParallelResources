async function getData() {
    try {
        const [responseUser, responsePost] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ])

        const [dataUser, dataPost] = await Promise.all([
            responseUser.json(),
            responsePost.json()
        ])

        console.log(dataUser)
        console.log(dataPost)

    } catch (error) {
        console.log(error)
    }
}

getData()
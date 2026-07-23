async function getData() {
    try {
    const responseUser = await fetch("https://jsonplaceholder.typicode.com/users")
    const dataUser = await responseUser.json()

    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dataPost = await responsePost.json()
    
    console.log(dataUser)
    console.log(dataPost)
    } catch (error){
        console.log(error)
    }

}
 getData()
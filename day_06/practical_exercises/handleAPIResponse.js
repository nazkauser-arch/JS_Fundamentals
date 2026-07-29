async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid")

        if (!response.ok) {
            console.log(`Request failed with status: ${response.status}`)
            return;
        }

        const users = await response.json()

        console.log("Request successful!")
        console.log(users)
    } catch (error) {
        console.log("Network error:", error.message)
    }
}

fetchUsers()
async function fetchWithRetry(url, maxRetries = 3) {
    let attempts = 0

    while (attempts < maxRetries) {
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error("Request failed")
            }

            const data = await response.json()
            return data
        } catch (error) {
            attempts++

            if (attempts === maxRetries) {
                throw error
            }

            console.log(`Retrying. Attempt ${attempts}`)
        }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
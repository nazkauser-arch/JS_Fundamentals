//Create a function that can only execute a given callback once
function once(callback) {
    let hasRun = false

    return function () {
        if (!hasRun) {
            hasRun = true
            callback()
        }
    }
}

const onlyOnce = once(() => {
console.log("Executed")
})

onlyOnce()
onlyOnce()
onlyOnce()

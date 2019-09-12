const getValue = (data, path = "") => {

    let result = null

    let keys = path.split(".") 

    const key = keys[0]

    if(key === "*") {

        result = []

        if(keys[1]) {

            for(const i of data) {
                result.push(getValue(i, keys[1]))
            }
        }
        else {
            result = data
        }

        return result
    }
    else {
        result = data[key]
    }

    keys.splice(0, 1)

    if(keys.length > 0) {
        result = getValue(result, keys.join("."))
    }

    return result
}

module.exports = getValue

// const data = {
//     friends: [
//         { name: "aap" },
//         { name: "mies" }
//     ]
// }

// console.log(
//     getValue(data, "friends.*.name")
// )
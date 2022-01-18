let array = Array.from({length: 100}, (v, i) => i++)

function binary_search(array, target) {

    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1

    while (!found && start <= end) {

        middle = Math.floor((start + end) / 2)

        if (array[middle] === target) {
            found = true
            position = array[middle]
            return position
        }

        if (target < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(binary_search(array, 24))

// RECURSIVE METHOD

function binary_search_recursive(array, target, start, end) {
    let middle = Math.floor((start + end) / 2)
    if (array[middle] === target) {
        return array[middle]
    }

    if (target < array[middle]) {
        return binary_search_recursive(array, target, start, middle - 1)
    } else {
        return binary_search_recursive(array, target, middle + 1, end)
    }

}

console.log(binary_search_recursive(array, 23, 0, array.length))

let stationNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])

let stations = new Map([
    ['kone', new Set(['id', 'nv', 'ut'])],
    ['ktwo', new Set(['wa', 'id', 'mt'])],
    ['kthree', new Set(['or', 'nv', 'ca'])],
    ['kfour', new Set(['nv', 'ut'])],
    ['kfive', new Set(['ca', 'az'])],
    ['ksix', new Set(['id', 'nv', 'ut', 'ca', 'az'])],
])

Set.prototype.intersection = function (set) {
    let intersection = new Set()
    for (let candidate of this) {
        if (set.has(candidate)) {
            intersection.add(candidate)
        }
    }
    return intersection
}

Set.prototype.difference = function (set) {
    let difference = new Set()
    for (let candidate of this) {
        if (!set.has(candidate)) {
            difference.add(candidate)
        }
    }
    return difference
}


function find(stationNeeded, stations) {
    let finalStation = new Set()
    while (stationNeeded.size) {
        let bestStation = null
        let statesCovered = new Set()

        for (let [state, stationOfStates] of stations) {
            let maxCovered = stationNeeded.intersection(stationOfStates) // Найти станцию с максимальным охватом штатов
            if (maxCovered.size > statesCovered.size) {
                bestStation = state
                statesCovered = maxCovered
            }
        }
        stationNeeded = stationNeeded.difference(statesCovered)
        finalStation.add(bestStation)
    }
    return finalStation
}

console.log(find(stationNeeded, stations))

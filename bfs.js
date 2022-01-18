let graph = {}
graph.A = ['B', 'D']
graph.B = ['C']
graph.C = ['E']
graph.E = ['H']
graph.D = ['F', 'E']
graph.F = ['G']
graph.G = ['H']

function bfs(graph, start, end) {
    let queue = []
    queue.push(start)
    let parents = {}
    let selected = []

    let isEnd = Object.values(graph).flat().includes(end) // if end exist

    if (!isEnd) return false

    while (queue.length) {
        let current = queue.shift()

        if (!graph[current]) {
            graph[current] = []
        }

        for (const point of graph[current]) {
            if (!selected.includes(point)) {
                queue.push(point)
                selected.push(point)
                parents[point] = current
            }
        }
    }

    let path = [end]
    let parent = parents[end]
    while (parent) {
        path.push(parent)
        parent = parents[parent]
    }
    return path.reverse()
}

console.log(bfs(graph, 'A', 'H'))


// RETURN BOOLEAN VALUE

// function bsf_bool(graph, start, end) {
//     let queue = []
//     queue.push(start)
//     let selected = []
//
//     while (queue.length) {
//         let current = queue.shift()
//
//         if (!graph[current]) return false
//
//         if (!selected.includes(current)) {
//             if (graph[current].includes(end)) {
//                 return true
//             } else {
//                 queue = [...queue, ...graph[current]]
//                 selected.push(current)
//             }
//         }
//
//     }
// }
//
// console.log(bsf_bool(graph, 'A', 'H'));

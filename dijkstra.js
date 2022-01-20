// 1. Найти узел с наименьшей стоимостью
// 2. Проверить, существует ли более дешовый путь к соседям этого узла, если существует, обнавить их
// 3. Повторять, пока это не будет сдаланно для всех узлов

// Нужна хеш таблица для хранения стоимости всех узлов let costs = {}
// Функция findLowerCostNode вернет узел с наименьшей стоимостью

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {
    let costs = {}
    let neighbors = {}
    let processed = []
    let parents = {}

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            costs[node] = graph[start][node] || Infinity
        }
    })

    let node = findLowerCostNode(costs, processed) // Узел с наименьшей стоимостью

    while (node) {
        let cost = costs[node] // Получить стоимость узла
        neighbors = graph[node] // Получить соседей узла

        Object.keys(neighbors).forEach(neighbor => { // Проверка соседей текущего узла
            let newCost = cost + neighbors[neighbor] // Стоимость текущего узла + сосед
            if (costs[neighbor] > newCost) { // Если стоимость текущего узла + сосед (newCost) меньше чем старая стоимость обнавляем стоимость соседа
                costs[neighbor] = newCost
                parents[neighbor] = node
            }
        })
        processed.push(node)
        node = findLowerCostNode(costs, processed)
    }

    let path = [end] // Добавить конечный узел
    parent = parents[end] // Получить радителя узла
    while (parent) {
        path.push(parent) // Добавить родителя в path
        parent = parents[parent] // Получить радителя предидущего радителя
    }
    return path.reverse()
}

function findLowerCostNode(costs, processed) {
    let lowestCost = Infinity
    let lowestCostNode = null
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestCostNode = node
        }
    })
    return lowestCostNode
}

console.log(shortPath(graph, 'a', 'g'))

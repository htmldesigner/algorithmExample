let array = Array.from({length: 10}, (e, i) => i + 1).reverse()

function selected_sort(array) {
    for (let i = 0; i < array.length; i++) {
        let idxMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[idxMin]) {
                idxMin = j
            }
        }
        let tmp = array[i] // Временно сохраняем значение на текущей итерации
        array[i] = array[idxMin] // Меняем текущее значение на наеденное мининмальное значение во внутриннем циклк
        array[idxMin] = tmp // Минимальное значение заменяем значением из текущей итерации внешнего цикла
    }
    return array
}

console.log(selected_sort(array))

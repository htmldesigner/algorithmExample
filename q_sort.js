let array = Array.from({length: 20}, (e, i) => i + 1).reverse()

function qSort(array){

    if (array.length <= 1 ){
        return array
    }

    let less = []
    let more = []
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]

    for (let i = 0; i < array.length; i++) {
        if(array[i] === pivot){
            continue
        }
        if (array[i] < pivot){
            less.push(array[i])
        }else {
            more.push(array[i])
        }
    }

    return [...qSort(less), pivot, ...qSort(more)]
}

console.log(qSort(array));


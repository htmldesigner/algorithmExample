let array = Array.from({length: 10}, (e, i) => i + 1);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

console.log(shuffle(array));


// let arr = [1,2,3]
//
// function shuffle(arr){
//     arr.sort(() => Math.random() - 0.5)
// }
//
// shuffle(arr)
// console.log(arr)


// const chunkSize = 10;
// let arr= [1,2,3,4];
// chunkSize=2;
// for (let i = 0; i < arr.length; i += chunkSize) {
//     const chunk = arr.slice(i, i + chunkSize);
//     console.log(chunk);
//     // do whatever
// }

// const perChunk = 2 // items per chunk    

// const inputArray = ['a','b','c','d','e']

// const result = inputArray.reduce((resultArray, item, index) => { 
//   const chunkIndex = Math.floor(index/perChunk)

//   if(!resultArray[chunkIndex]) {
//     resultArray[chunkIndex] = [] // start a new chunk
//   }

//   resultArray[chunkIndex].push(item)

//   return resultArray
// }, [])

// console.log(result); // result: [['a','b'], ['c','d'], ['e']]


function arrchunking(arr, size){
    var newarr =[];
    for(let val of arr){
        let lastEl = newarr

    }
}
var arr = [12,23,34,45,56,67,78,89,90,100];

console.log("length "+arr.length)

console.log(arr.filter((x)=>{
    return x < 50;
}))

var arr2 = ["fof", "gog", "fogf","1234", "56788", ""];
var arr3 = arr2.filter((x)=>{
    return x.length < 4 ;
})

console.log(arr3);
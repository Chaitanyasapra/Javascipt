var arr = [12,23,34,45,56,67,78,89,90,100];
console.log(arr);

console.log(arr.map((x)=>{
    return parseFloat((Math.pow(x,2)/5.5).toFixed(3));
}))

console.log(arr.map((x)=>{
    return Math.floor(Math.pow(x,2)/5.5);
}))

console.log(arr.map((x)=>{
    return Math.round(Math.pow(x,2)/5.5);
}))

console.log(arr.map((x)=>{
    return Math.ceil(Math.pow(x,2)/5.5);
}))
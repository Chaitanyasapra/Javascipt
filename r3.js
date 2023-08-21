arr= [5,5,4,4,2,2,1,1];
arr = arr.sort((x,y)=>{
    console.log(x+" "+y);
    return x-y;
})

console.log(arr);


(()=>{
  console.log("jo")  
})();
arr2 =arr.filter((x,i, arr)=>{
  return arr.indexOf(x) === i;
})
console.log(arr2);
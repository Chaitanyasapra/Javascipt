arr = [{n:12},{n:13},{n:14}];
fun = (x)=>{
    x["san"] = x["n"]*10;
    return x;
}
arr2 =arr.map(fun);

for(i =0; i < arr2.length; i++){
    console.log(arr2[i]);
}

// arr2.foreach((a)=>{
//     console.log(a.n);
// });

console.log(arr2[0]);

l =[1,2,3,4]

l2 =l.map(x => x*2).filter( x => x>=6);

console.log(l2);

// arr3 = arr.reduce()
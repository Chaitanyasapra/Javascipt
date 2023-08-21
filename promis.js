let p = new Promise((resolve, reject)=>{
    let a =2;
    a++
    if(a==2){
        resolve("yay!");
    }
    if(a == 3){
        resolve("yay2!");
    }
    else{
        reject("noo");
    }
})

p.then((msg)=>{
    console.log(msg);
}).catch((m)=>{
    console.log(m);
})



var f1 = true;
var f2 = true;



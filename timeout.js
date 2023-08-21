function f(){
    for(i=0;i<5;i++){
        console.log("hello "+i);
    } 
}

f();
setTimeout(f,3000);

for(i=0;i<5;i++){
    console.log("ice "+i);
}

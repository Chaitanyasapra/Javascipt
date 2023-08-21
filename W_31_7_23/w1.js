let f=0;
function cb(v){
    console.log(v);
    f=f+v;
}
let k = [1,2,,3].filter(cb);
console.log(f);
const people=[ { id:1 ,name:'john' , age:30 } ,{ id:2 ,name:'jane' , age:25 } ,{ id:3 ,name:'bob' , age:40 } ]
function fun1(n){return n['name'];}
function fun2(n)
{
    n['salary']=50000;
    return n;
}
function fun3(n)
{
    if(n['age'] >30 ){
        return 1 ;
    }
}
function fun4(n){
    return {"name" :n['name']  , age:n['age']}

}
var out1 =people.map(fun1);
var out2 =people.map(fun2);
var out3 =people.filter(fun3).map(fun4);
console.log(out1)
console.log(out2)
console.log(out3)
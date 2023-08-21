function A(){
    var name = 'hello';
    console.log(1);
    return ()=>{
        console.log(2);
        return ()=>{
            console.log("3"+1);
        }
    }
}

function v(v1){
    var name = 'hello';
    console.log(v1);
    return (v2)=>{
        console.log(v2);
        return (v3)=>{
            console.log(v3);
            console.log(v3+v2+v1);
        }
    }
}


// A()()()
v(5)(5)(5);
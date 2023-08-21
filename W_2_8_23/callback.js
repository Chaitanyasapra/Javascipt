function add(n1, n2){
    return (n1+n2);
}

function sub(n1, n2){
    if(n1>n2){
        return (n1-n2);
    }
    else{
        return n2-n1;
    }
}

function main(c1, c2, n1, n2){
    return [c1(n1,n2), c2(n1,2)];
}

console.log(main(add,sub, 10,20));
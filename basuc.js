function area(n){
    s=(3*n)/2;
    return Math.sqrt( s*((s-n)**3) ) ;
}
function price(ob){
    var sum=0
    ob.forEach(element => {
        sum+=element['quantity']*element['price'];
    });
    return sum
}
function chunks(arr,n){
    var arr1=[]
    var a=0;
    for (var i=0;i<arr.length;i++) {
        var l=[]
        for( var j = i;j<n+i;j++){
            if(arr[j] != undefined){
                l.push(arr[j])
            }
        }        
        i=i+n-1;
        arr1.push(l)
    }
    if(arr.length%n!=0){

    }


    return arr1;
}
function binary(arr,n){
    i=0;
    ans=-1;
    arr.forEach(element => {

       if(element==n){
            ans=i;
            
       }

       i++; 
    });

    return ans;
}

function add(arr){
    var carry=0;
    var arr1=[]
    for(var i=arr.length-1;i>=0;i--){
        var a=0;
        if(i==arr.length-1){
            a=arr[i] +1;
        }
        else{
            a=arr[i] + carry;
        }
        var b=a%10;
        var c=Math.round(a/10);
        carry=c;
 
        arr1.unshift(b);
    }
    if(carry>0){
        arr1.unshift(carry);
    }
    return arr1;
}
function sum(arr){
    sum=0;
    
    arr.forEach(e =>{
        sum+=e;
    })
    
    return sum;
}
function ispalin(s){
    arr=s.split("");
    arr1=arr.reverse();
    s1=arr1.join();
    if(s==s1){
        return true;
    }
    else{
        return false;
    }
    
}
function two_sum(arr,n){
    map = new Map();

}
function first_char(s){
    return s.substr(1)

}
function long(s){
    arr=s.split(" ")
    arr.sort( function(a,b) { return b.length - a.length})
    return arr[0];
}
// function two_sum()
// console.log(area(5));
// console.log( price(  [ {"product":"Milk", "quantity":1,'price':1.50 },{"product":"Burger", "quantity":3,'price':2.50 } ]  )  )
// console.log( chunks( [2, 3, 4, 5, 6, 7], 5  ) );;
// console.log(binary([2,3,4,5,6,7], 4))
// console.log(add([1,0,1]))
// console.log( sum( [1,2,3] ));
// console.log(ispalin("racecar"))
// console.log(two_sum( [ 4,8,6,9,1], 14 ))
// console.log(first_char("jatin"))
console.log(long("my name is jatin"))

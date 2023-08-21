// find area of triangle
function triangle_area(p){
    let s = (p+p+p)/2;
    let area = Math.sqrt(s*(s-p)*(s-p)*(s-p));
    return area;
}

let k = triangle_area(5);
console.log(k);

//

// linear serach

let a = [0,1,2,3,4];

function linear_s(a, o){
    let n = a.length;
    let fla =0;
    for( let i=0 ; i< n; i++){
        if(a[i] == o){
            console.log("the position is "+i);
            fla++;
            break;
        }
    }
    if(fla == 0){
        console.log("not in array");
    }
}

linear_s(a, 3);

// 


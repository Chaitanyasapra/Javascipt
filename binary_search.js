// binary serach
function binary_s(arr, start , end, x){
    let mid = (start+end)/2;
    mid = Math.floor(mid);
    if(start == end && arr[mid] !== x){
        return -1;
    }
    else if(arr[mid] === x){
        return mid;
    }
    else if(arr[mid] > x){
        return binary_s(arr, start, mid-1,x);
    }
    else if(arr[mid] < x){
        return binary_s(arr,mid+1,end,x);
    }
}

let arr = [-1,-1,0,1,2,3,4,5,6,7,8,9];
let end = arr.length;
let start = 0;
let x = -1;
let loc = binary_s(arr, start, end, x);
console.log("loc of "+x+" is "+loc+" that is "+arr[loc]);




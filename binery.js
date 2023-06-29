const array=[1,2,3,4,5,6,7,8,9,10];

let left=0;
let right=array.length-1
let number=7

while(left<=right){
    let middle=left+right


    if(array[middle]==number){
        console.log("Element found in the position : "+middle)
        break;

    }
    else if(array[middle]>number){
        right=middle-1
    }
    else{
        left=middle+1
    }

}
if(left>right){
    console.log("value not found ");
}
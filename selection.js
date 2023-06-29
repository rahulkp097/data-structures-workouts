const arr=[80,10,20,40,30,60,90,50];

let min;

for(let i=0;i<arr.length-1;i++){
    min=i;
for(let j=i+1;j<arr.length;j++){
    if(arr[j]<arr[min]) min=j;
}
    if(i!=min){
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp
        }
}

console.log(arr)
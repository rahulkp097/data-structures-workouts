const a=[50,10,40,30,20]
function sort(arr,first,sec){
    let temp=arr[first]
        arr[first]=arr[sec]
        arr[sec]=temp
}
function bubble(arr){
    for(let i=0;i<arr.length;i++){
      
      for(let j=i+1;j<arr.length;j++){
          if(arr[j]<arr[i]){
              sort(arr,i,j)
          }
      }
    }
    return arr
}

console.log(bubble(a))


function selection(arr){
let min;
for(let i=0;i<arr.length-1;i++){
    min=i
for(let j=i+1;j<arr.length;j++){
    if(arr[j]<arr[min]){
        min=j
    }
}
if(i!=min){
    sort(arr,min,i)
}

}
return arr
}

console.log(selection(a))


function insertion(arr){
for(let i=1;i<arr.length;i++)
{
let temp=arr[i];
let j=i-1
while(j[arr]>temp && j>-1){
    arr[j+1]=a[j];
    j--
}
arr[j+1]=temp
}
return arr
}

console.log(insertion(a))
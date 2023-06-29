//Quick Sort
function swap(array,first,sec){
    let temp=array[first];
    array[first]=array[sec];
    array[sec]=temp
}

function pivot(array,pivotIndex=0,end=array.length-1){
    let swapIndex=pivotIndex;
    for(let i=pivotIndex+1;i<=end;i++){
        if(array[i]<array[pivotIndex])
        {
            swapIndex++;
            swap(array,swapIndex,i);
        }
    }``
    swap(array,swapIndex,pivotIndex)
    return swapIndex
}



function quickSort(array,left=0,right=array.length-1 ) {
    
    
    if(left<right){
        let pivotIndex=pivot(array,left,right);
        quickSort(array,left,pivotIndex-1);
        quickSort(array,pivotIndex+1,right)
        
    }
    return array
   
}

const array=[4,6,1,7,3,2,5]
console.log(quickSort(array))
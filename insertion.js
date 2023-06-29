//Insertion Sort
function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        for(var j=i-1;arr[j]>temp && j>-1;j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=temp
    }
    return arr
    }
    
    
    
    const array=[2,10,30,5,8,90];
    console.log(insertionSort(array))
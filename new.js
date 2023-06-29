// function swap(arr,first,sec){
//     let temp=arr[first]
//     arr[first]=arr[sec]
//     arr[sec]=temp;
// }

// function pivot(arr,pivotIndex=0,end=arr.length-1){

//     let swapIndex=pivotIndex;

//     for(let i=pivotIndex+1;i<=end;i++){
//         if(arr[i]<arr[pivotIndex]){
//             swapIndex++
//             swap(arr,swapIndex,i)
//         }
        
         
//     }
//     swap(arr,swapIndex,pivotIndex)
//     return swapIndex
    
    
// }
// function quickSort(arr,left=0,right=arr.length-1){
   
//     if(left < right){
//         let pivotIndex=pivot(arr,left,right)
//         quickSort(arr,left,pivotIndex-1)
//         quickSort(arr,pivotIndex+1,right)
//     }
//     return arr
// }

// const arr=[6,3,2,10,7]


// console.log(quickSort(arr))

// function merge(arr1,arr2){
//     let sumarray=[]
//     let i=0;
//     let j=0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<arr2[j]){
//         sumarray.push(arr1[i])
//         i++;
//         }
//         else {
//         sumarray.push(arr2[j]);
//         j++
//         }
//     }
//     while(i<arr1.length){
//         sumarray.push(arr1[i]);
//         i++
//     }
//     while(j<arr2.length){
//         sumarray.push(arr2[j])
//         j++;
//     }
    
//     return sumarray;
// }


// function mergeSort(arr){
// if(arr.length==1)return arr;

// let mid=Math.floor(arr.length/2)
// let left=arr.slice(0,mid)
// let right=arr.slice(mid)

// return merge(mergeSort(left),mergeSort(right))

// }

// console.log(mergeSort(arr))



// function bubble(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 swap(arr,i,j)
//             }
//         }
//     }
//     return arr
// }

// console.log(bubble(arr))


// function selection(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min=i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min])min=j
//     }
//     if(i!=min){
//         swap(arr,i,min)
//     }
//     }
//     return arr
// }

// console.log(selection(arr))

// function insert(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp=arr[i];
//         let j=i-1
//         while(temp<arr[j] && j>-1){
//             arr[j+1]=arr[j];
//             j--
//         }
//         arr[j+1]=temp
//     }
//     return arr
// }

// console.log(insert(arr))







// class stack{
//     constructor(){
//         this.values=[]
//     }
    
// push(value){
//     this.values.push(value)
// }
// pop(){
//     if(this.values.length==0)return "underflow situation"
    
//     return this.values.pop()
    
// }
// print(){
//     let current=this.values;
//     for(let i=0;i<current.length;i++){
//         console.log(current[i])
//     }
// }

// isempty(){
//     if(this.values.length>0)return false
    
//     return true
// }

// }


// let obj=new stack();
// obj.push(10)
// obj.push(20)
// obj.push(30)
// obj.push(40)
// obj.push(50)
// obj.pop()
// obj.print()


// function rev(str){
//     let newstr=""
//     let newstack=new stack()
    
//     for(let i=0;i<str.length;i++){
//         newstack.push(str[i])
//     }
   
    
//     while(!newstack.isempty()){
//         newstr+=newstack.pop()
//     }
    
//     return newstr
// }

// let str="Rahul"

// console.log(rev(str))




const arr=[10,50,40,1,20,30]


for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            let temp= arr[i];
            arr[i]=arr[j];
            arr[j]=temp;

        }
    }
}

console.log(arr)




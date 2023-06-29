// //MergeSort

// function merge(array1,array2){
//     let compained=[];
//     let i=0;
//     let j=0;
//     while(i<array1.length && j<array2.length){
//         if(array1[i]<array2[j]){
//             compained.push(array1[i]);
//             i++
//         }
//         else {
//             compained.push(array2[j]);
//             j++
//         }
//     }
//     while(i<array1.length){
//         compained.push(array1[i]);
//         i++
//     }
//     while(j<array2.length){
//         compained.push(array2[j]);
//         j++
//     }
//     return compained
// }


// function mergeSort(array){
//     if(array.length==1) return array
//     let mid=Math.floor(array.length/2);
//     let left=array.slice(0,mid);
//     let right=array.slice(mid);
    
// return merge(mergeSort(left),mergeSort(right))
// }

// const array=[6,40,2,80,1,60,7,100,50,60]

// console.log(mergeSort(array))



//print data from the hashtable

// class hashTable{
//     constructor(size=7){
//         this.datamap=new Array(size);
//     }
// _hash(key){
//     let hash=0;
//     for(let i=0;i<key.length;i++){
//         hash=(hash+key.charCodeAt(i)*23)%this.datamap.length
        
//     }
//     return hash
// }

// set(key,value){
//     let index=this._hash(key);
//     if(!this.datamap[index]){
//         this.datamap[index]=[]
//     }
//     this.datamap[index].push([key,value])
//     return this
// }


// get(key){
//     let index=this._hash(key);
//     if(this.datamap[index]){
//         for(let i=0;i<this.datamap[index].length;i++){
//             if(this.datamap[index][i][0]==key){
//                 return this.datamap[index][i][1];
//             }
//         }
//     }
//     return undefined
// }

// keys(){
//     let allkeys=[]
    
//     for(let i=0;i<this.datamap.length;i++){
//         if(this.datamap[i]){
//             for(let j=0;j<this.datamap[i].length;j++){
//                 allkeys.push(this.datamap[i][j][0]);
//             }
//         }
//     }
//     return allkeys
// }

// }


// let obj=new hashTable()
// obj.set("paint",1500);
// obj.set("brush",150);
// obj.set("bucket",50)
// console.log(obj.keys())

//Bubble Sort

// function bubble(arr){
//     for(let i=arr.length-1;i>0;i--){
        
//         for(let j=0;j<i;j++){
//             console.log(arr,arr[j],arr[j+1])
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp
//             }
//         }
//         console.log("loop")
//     }
//     return arr
// }
// const arr=[80,1,3,40,60,5]

// bubble(arr)


//selection sort

// function selection (arr){
//     for(let i=0;i<arr.length;i++){
//         let min=i
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min=j
//         }
      
//     }
  
//       temp=arr[i];
//     arr[i]=arr[min];
//     arr[min]=temp
//     }
//     return arr
// }


// const arr=[80,1,3,40,60,5]
// console.log(selection(arr))



//mergeSOrt
// function merge(arr1,arr2){
//     const sumarray=[]
//     let i=0;
//     let j=0;
    
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<arr2[j]){
//             sumarray.push(arr1[i]);
//             i++;
//         }
//         else {
//             sumarray.push(arr2[j])
//             j++
//         }
//     }
//     while(i<arr1.length){
//         sumarray.push(arr1[i]);
//         i++;
//     }
//     while(j<arr2.length){
//         sumarray.push(arr2[j]);
//         j++
//     }
//     return sumarray
// }

// function mergeSort(arr){
//     if(arr.length==1)return arr
    
//     let mid=Math.floor(arr.length/2);
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
    
//     return merge(mergeSort(left),mergeSort(right))
// }

// const arr=[50,2,40,3,9,1,80];
// console.log(mergeSort(arr))


//quickSort

// function swap(arr,first,sec){
//     let temp=arr[first];
//     arr[first]=arr[sec];
//     arr[sec]=temp
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
//     if(left<right){
//     let pivotIndex=pivot(arr,left,right)
//     quickSort(arr,left,pivotIndex-1);
//     quickSort(arr,pivotIndex+1,right)
    
//     return arr
        
        
//     }}
    
    
// const arr=[50,10,20,40,9,2,5]
// console.log(quickSort(arr))




//stack
// class node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class stack{
//     constructor(){
//         this.top=null
//         this.length=0
//     }
    
// push(value){
//     const newnode=new node(value);
//     if(this.length==0){
//         this.top=newnode
//     }
//     else{
//     newnode.next=this.top
//     this.top=newnode;
//     }
//     this.length++
// }

// pop(){
//     let temp=this.top
//     this.top=this.top.next;
//     temp.next=null
//     this.length--
// }

// print(){
//     let current=this.top
//     while(current){
//         console.log(current.value);
//         current=current.next
//     }
// }



// }

// let obj=new stack
// obj.push(50)
// obj.push(60)
// obj.push(70)
// obj.pop()
// obj.print()


// class hashtable{
//     constructor(size=7){
//         this.datamap=new Array(size);
//     }
// _hash(key){
//     let hash=0;
//     for(let i=0;i<key.length;i++){
//         hash=(hash+key.charCodeAt(i)*23)%this.datamap.length
//     }
//     return hash
// }

// set(key,value){
//     let index=this._hash(key);
//     if(!this.datamap[index]){
//         this.datamap[index]=[]
//     }
//     this.datamap[index].push([key,value]);
//     return this
// }

// get(key){
//     let index=this._hash(key);
//     if(this.datamap[index]){
//         for(let i=0;i<this.datamap[index].length;i++){
//             if(this.datamap[index][i][0]==key){
//                 return this.datamap[index][i][1];
//             }
//         }
//     }
//     return undefined 
// }


// keys(){
//    let allkeys=[];
//    for(let i=0;i<this.datamap.length;i++){
//        if(this.datamap[i]){
//            for(let j=0;j<this.datamap[i].length;j++){
//                allkeys.push(this.datamap[i][j][0])
//            }
//        }
//    }
//    return allkeys
// }


// }

// let obj=new hashtable();
// obj.set("paint",150)
// obj.set("bolt",100)
// obj.set("brush",5)
// console.log(obj.keys())

// console.log(obj.get("paint"))



// const arr=[2,7,5,3,1]

// quickSort(arr)

// function swap(arr,first,sec){
//     let temp=arr[first];
//     arr[first]=arr[sec];
//     arr[sec]=temp
// }

// function pivot(arr,pivotindex=0,end=arr.length-1){
//     let swapindex=pivotindex

//     for(i=pivotindex;i<=end;i++){
//         if(arr[i]<arr[pivotindex]){
//             swapindex++;
//             swap(arr,swapindex,i)
//         }
//     }
//     swap(arr,swapindex,pivotindex)

//     return swapindex
// }

// function quickSort(arr,left=0,right=arr.length){
//     if(arr.length==1)return arr

//     if(left<right){
//     let pivotIndex=pivot(arr,left,right)

//     quickSort(arr,left,pivotIndex-1)
//     quickSort(arr,pivotIndex+1,right)
//     }
//     return arr

// }


// const str="Hello wOrld"

// const reversed=str.split("").reverse().join("");
// console.log(reversed)

// const vowels=/[aeiou]/gi;
// const withoutVowels=str.replace(vowels,"")
// console.log(withoutVowels)


// function revstring(str){
  
//     let arr=[];
//     const vowels=/[aeiou]/gi

//     for(let i=0;i<str.length;i++){
//         const char=str[i];
//         if(char!="o"&& char!="W"){
//             console.log(char)
//             arr.push(char)
//             console.log(arr)
            
//         }
//     }
//     return arr.reverse().join("")

// }

// const str="Hello World"
// console.log(revstring(str))

// arr=[2,10,50,80,1]

// function insertion(arr){
// for(let i=1;i<arr.length;i++){
//     temp=arr[i];
//     for(j=i-1;j>temp;j--){
//         arr[j+1]=temp;
//     }
    

// }
// return arr
// }


// console.log(insertion(arr))


// function sort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min=i;
//     for(j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min=j;
//         }
//     }
    
//     if(i!=min){
//         swap(arr,min,i)
//     }
//     }
//     return arr
// }



// console.log(sort(arr))


// function selection(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp=arr[i];
//         let j=i-1;
//         while(j>-1 && temp<arr[j]){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=temp
//     }
//     return arr
// }

// console.log(selection(arr))


// function bubble(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[i]){
//                 swap(arr,arr[j],arr[i]);
//             }
//         }
//     }
//     return arr
// }

// console.log(bubble(arr))

// arr=[10,50,60,5,9,11]
// function swap(arr,first,sec){
//     let temp=arr[first];
//     arr[first]=arr[sec];
//     arr[sec]=temp
// }

// function pivot(arr,start=0,end=arr.length-1){
//     let swapIndex=start;

//     for(i=start+1;i<=end;i++){
//         if(arr[i]<arr[start]){
//             swapIndex++
//             swap(arr,swapIndex,i)
//         }
//     }
//     swap(arr,swapIndex,start)
//     return start
// }

// function quickSort(arr,left=0,right=arr.length-1){
//     if(left<right){
//     pivotIndex=pivot(arr,left,right)
//     quickSort(arr,left,pivotIndex-1);
//     quickSort(arr,pivotIndex+1,right)
//     }
//     return arr
// }


// console.log(quickSort(arr))


// let a=[50,1,10,2,60,5,15];

// function merge(arr){
    
//     if(arr.length==1)
//     {return arr}
    
//     let mid=Math.floor(arr.length/2);
//     let left=arr.slice(0,mid);
//     let right=arr.slice(mid);
    
// return mergesort(merge(left),merge(right))
// }


// function mergesort(arr1,arr2){
//     const sumarray=[];
// let i=0;
// let j=0;

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         sumarray.push(arr1[i]);
//         i++;
//     }
//     else {
//         sumarray.push(arr2[j]);
//         j++;
//     }
// }
// while(i<arr1.length){
//     sumarray.push(arr1[i]);
//     i++;
// }
// while(j<arr2.length){
//     sumarray.push(arr2[j]);
//     j++;
// }

// return sumarray
// }

// console.log(merge(a))


// function swap(arr,first,sec){
//     let temp=arr[first];
//     arr[first]=arr[sec];
//     arr[sec]=temp;
// }



// function pivot(arr,pivotIndex=0,end=arr.length-1){
//     let swapIndex=pivotIndex;
//     for(let i=pivotIndex+1;i<=end;i++){
//         if(arr[i]<arr[pivotIndex]){
//             swapIndex++
            
//             swap(arr,swapIndex,i);
            
//         }
        
//     }
//     swap(arr,swapIndex,pivotIndex)
//     return swapIndex
// }

// function quickSort(arr,left=0,right=arr.length-1){
//     if(left<right){
//     let pivotIndex=pivot(arr,left,right)
//         quickSort(arr,left,pivotIndex-1);
//         quickSort(arr,pivotIndex+1,right)
// }

// return arr

// }


// function remove(arr){

//     const newarray=[]
//     quickSort(arr)
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         newarray.push(arr[i])
//     }
// }
// return newarray
// }


// const a=[8,5,4,10,3,7]
// console.log(remove(a))


// let s="Where are you now"
// let news=[]
// for(let i=s.length-1;i>=0;i--){
//     if(s[i]!="a" && s[i]!="e" && s[i]!="i" && s[i]!="o" && s[i]!="u"  )
//     news.push(s[i])
     
// }
// console.log(news.join(""))   




// function merge(arr1,arr2){
//     const sumarray=[];
//     let i=0;
//     let j=0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<arr2[j]){
//             sumarray.push(arr1[i]);
//             i++;
//         }
//         else{
//             sumarray.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i<arr1.length){
//         sumarray.push(arr1[i]);
//         i++
//     }
//     while(j<arr2.length){
//         sumarray.push(arr2[j])
//         j++
//     }
//     return sumarray;
// }

// function mergesort(arr){
//     if(arr.length==1)return arr
//     let mid=Math.floor(arr.length/2);
//     console.log(mid)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
    
    
//     return merge(mergesort(left),mergesort(right))

// }


// arr=[50,10,20,40,1,3]
// console.log(mergesort(arr))


// class stack{
//     constructor(){
//         this.items=[]
//     }

// push(value){
//     this.items.push(value)
// }
// pop(){
//     if(this.items.length<0)return undefined

//    return this.items.pop()
// }

// isempty(){
//     if(this.items.length>0) return false

//     return true
// }

// }

// function remove(str){
//     revvowels=[]
//     let revstr=""
//     for(let i=str.length-1;i>=0;i--){
//         if(str[i]!="a"&& str[i]!="e"&&str[i]!="i"&&str[i]!="o"&&str[i]!="u"){
//             revvowels.push(str[i])
//             revstr+= revvowels.pop()
//         }
        
        
//     }

//     return revstr

// }

// let str="brototype"



// console.log(remove(str))

// function revString(str){
//     let newstack=new stack();
//     let newsrt=""   
    
//   for(let i=0;i<str.length;i++){
//     if(str[i]!="a"&& str[i]!="e"&&str[i]!="i"&&str[i]!="o"&&str[i]!="u"){ 
//     newstack.push(str[i])}
//   }
//   console.log(newstack)

//  while(!newstack.isempty()){
//     newsrt += newstack.pop()
//   }
// return newsrt
// }


// console.log(revString(str))





class stack{
    constructor(){
        this.data=[]
    }

push(value){
    
    this.data.push(value)
}

pop(){
    if(this.data.length<0) return false
    this.data.pop()
    return true
    
}
isempty(){
    if(this.data.length>-1)return false 
    return true
}

print(){
let current=this.data;
let str=""
for(let i=0;i<this.data.length;i++){
    str+=current[i]
}
return str
}

rev(){
    let current=this.data
    let str=""
   let i=current.length
    while(current.length>0){
        str+=current.pop()
        i--
    }
    return str
}



}


let obj=new stack()
// obj.push(10)
// obj.push(20)
// obj.push(30)
// obj.push(40)
// obj.push(50)
// obj.pop()
const arr="where are you now"
for(let i=0;i<arr.length;i++){
    obj.push(arr[i])
}

console.log(obj.rev())

console.log(obj.print())

obj.print()
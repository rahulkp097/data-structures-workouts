// function heapSort(arr) {
//     for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//       heapify(arr, i, arr.length);
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//       [arr[0], arr[i]] = [arr[i], arr[0]];
//       heapify(arr, 0, i);
//     }
  
//     return arr;
//   }
  
//   function heapify(arr, i, n) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
  
//     if (left < n && arr[left] > arr[largest]) {
//       largest = left;
//     }
  
//     if (right < n && arr[right] > arr[largest]) {
//       largest = right;
//     }
  
//     if (largest !== i) {
//       [arr[i], arr[largest]] = [arr[largest], arr[i]];
//       heapify(arr, largest, n);
//     }
//   }

//   const arr = [6,10,5,3,1,4,8];
//   const sortedArr = heapSort(arr);
//   console.log(sortedArr); 




  function heapify(arr, n, i)
{
  var smallest = i; 
  var l = 2 * i + 1; 
  var r = 2 * i + 2; 

  
  if (l < n && arr[l] < arr[smallest])
    smallest = l;

  if (r < n && arr[r] < arr[smallest])
    smallest = r;

  
  if (smallest != i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]]

    
    heapify(arr, n, smallest);
  }
}

function heapSort(arr)
{
  
  for (var i = parseInt(n / 2 - 1); i >= 0; i--)
    heapify(arr, n, i);

  // for (var i = n - 1; i >= 0; i--) {
  
  //   [arr[0], arr[i]] = [arr[i], arr[0]]

    
  //   heapify(arr, i, 0);
  // }
  return arr
}

var arr = [15,35,20,10,8,];
var n = arr.length;
console.log(heapSort(arr));

 
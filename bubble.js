//Bubble Sort

const a=[20,40,10,30,50,60,90,100]

for(let i=0;i<a.length;i++){
    for(let j=0;j<=1;j++){
        
        if(a[j]>a[j+1]){
            let temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
    }

}

console.log(a);
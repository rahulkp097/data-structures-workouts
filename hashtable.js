// class hashtable{
//     constructor(size=7){
//         this.datamap=new Array(size)
//     }
//     _hash(key) {
//         let hash = 0
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * 23) % this.datamap.length
//         }
//         return hash
//     }

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

// let obj=new hashtable();
// obj.set('bolts', 1400)
// obj.set('paint', 1500)
// obj.set('tinner', 1600)
// obj.set('brush', 1400)
// console.log(obj.keys())
// console.log(obj.get("paint"))



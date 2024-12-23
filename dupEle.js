// function isAlreadyIn(arr){
//     let duplicate=[];
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] === arr[j]){
//                 duplicate.push(arr[i])
//             }
//         }
//     }
//     return duplicate;
// }
// let input=[1,1,2,2,3,5,8,7,9,2];
// let dup=isAlreadyIn(input)
// console.log(dup)

let arr=[1,3,5,1,2,6,4,2,2,1,1,25]
let duplicate=[]
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j]){
         duplicate.push(arr[i])
        }
    }
}
console.log(duplicate)
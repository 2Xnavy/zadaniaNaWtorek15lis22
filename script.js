function script1(){
    let arr1 = ['one','three','five'];
    let arr2 = ['two','four','six'];
    
    let all = [...arr1, ...arr2];
    
    console.log(all.join(', '));
}




const joinArrays = (arr1, arr2) => [...arr1, ...arr2];

let arr10 = ['seven','nine','eleven'];
let arr20 = ['eight','ten','twelve'];

console.log(joinArrays(arr10, arr20));




const array1 = [1, 2, 3, 4];
const initialValue = 10;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue - currentValue,
  initialValue
);
console.log(sumWithInitial);




/*
.map(), coś ze strzałkami: [1^2+3, 2^2+3, 3^2+3]
.reduce()
.filter()
foreach
*/


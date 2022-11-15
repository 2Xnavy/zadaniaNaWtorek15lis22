function script1(){
    let arr1 = ['one','three','five'];
    let arr2 = ['two','four','six'];
    
    let all = [...arr1, ...arr2];
    
    console.log(all.join(', '));
}

const joinArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

let arr10 = ['seven','nine','eleven'];
let arr20 = ['eight','ten','twelve'];

console.log(joinArrays(arr10, arr20));


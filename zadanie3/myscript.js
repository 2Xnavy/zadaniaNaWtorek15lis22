/*

Zadanie 3. (3 pkt)
Napisz funkcję, która przyjmuje tablicę, a w przypadku tablicy liczb zwraca
drugi największy element w tej tablicy. W przypadku tablicy stringów (czyli
tekstu) zwraca drugi najdłuższy z nich.
[1, 5 ,10 ,15]  >> 10
[1,1, 3, 3, 4 ,4] >> 3 
[ala, robert, stanislaw] >> Robert
*/


/*ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 */
function zadanie3(){

    console.log("\nZADANIE 3:");

    //let arr = [1,3,5,33,7,6,4,2,0,44,22];
    let arr = ["123", "12", "1234", "1", "12345", "12345678", "1234567", "123456789"];

    //console.log(arr.length);
    console.log(arr); //przed posegregowaniem

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    //console.log(arr); //po posegregowaniu
    console.log("Dana z tablicy o drugiej najwyzszej wartosci: "+arr[arr.length-2]);
    

}
/*ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 ZADANIE 3 */


function bubbleSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

function handleCalculatorForm(form){

    let toDisplay = form.inputbox.value;
    document.getElementById("calcResult").innerHTML = calculate(toDisplay, "+-/*");
}

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function calculate(var1, var2){
    return 0;
}

function palindrome(var1){
    var1 = var1 + "!";
    return var1;
}

function handleAnagramForm(form){

    let word1 = form.inputbox3.value;
    let word2 = form.inputbox4.value;
    document.getElementById("anagramResult").innerHTML = anagram(word1, word2);
}

function anagram(var1, var2) {
    let word1 = [];
    let word2 = [];
    let flag = true;

    word1ASCII = [];
    word2ASCII = [];

    word1 = var1.split('');
    word2 = var2.split('');

    if(word1.length == word2.length){
        for(let i = 0; i < word1.length; i++){
            word1ASCII[i] = word1[i].charCodeAt(0);
        }

        for(let i = 0; i < word2.length; i++){
            word2ASCII[i] = word2[i].charCodeAt(0);
        }

        word1ASCII = bubbleSort(word1ASCII);
        word2ASCII = bubbleSort(word2ASCII);

        console.log(word1ASCII);
        console.log(word2ASCII);


        for(let i = 0; i < word1ASCII.length; i++){
            if (word1ASCII[i] != word2ASCII[i]){
                flag = false;
                break;
            }
        }
    }
    else {
        return false;
    }
    return flag;
}

function tower(n, sourcePole, destinationPole, auxiliaryPole) {
    if(0 == n)
    return;

    tower(n - 1, sourcePole, auxiliaryPole, destinationPole);

    console.log("Move the disk " + n + " from " +
    sourcePole + " to " + destinationPole);

    tower(n - 1, auxiliaryPole, destinationPole,sourcePole);
}

tower(4, 'A', 'C', 'B');

function fibonacci (n){
    if (n < 2){
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

//console.log(recurse(1,5));
console.log(0.2 + 0.1);
console.log(fibonacci(5));
console.log(anagram("siema", "siemb"));
console.log("a".charCodeAt(0));
console.log("b".charCodeAt(0));



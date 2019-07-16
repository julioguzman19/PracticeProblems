/* document.getElementById("javaScript").innerHTML = adjacentElementsProduct([1,2,3]); */

function adjacentElementsProduct(array) {
    let result = null;
    for(let i=0; i<array.length; i++){
        if(array[i]*array[i+1]>result || result ===null){
             result = array[i]*array[i+1];
        }
    }
    return result;
}

//Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
//Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
/* 
-Any digit followed by all zeros: 100, 90000
-Every digit is the same number: 1111
-The digits are sequential, incementing†: 1234
-The digits are sequential, decrementing‡: 4321
-The digits are a palindrome: 1221 or 73837
-The digits match one of the values in the awesomePhrases array 
*/

document.getElementById("javaScript").innerHTML = isInteresting(3, [1337, 256]);

function isInteresting(number, awesomePhrases) {
   
  }
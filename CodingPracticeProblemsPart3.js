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

returns:
// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
*/

/*Pseudo Code
1) Check # of digits
- if less than 3 return 0
2) Check if one of the criteria
- leadingZeros: check first digit greater than zero then rest of digits zeros
- same numbers: user first digit to compare every other digit
- sequential incrementing: check if current digit is less than next digit by 1 but after 9 zero comes in
- sequential decrementing: check if current digit is more than next digit by 1
- palindrome: if even # of digits split in half and compare  if odd # of digits remove middle digit and the split in half and compare
- digits matches one of the values in awesomePhrases?


*/
document.getElementById("javaScript").innerHTML = isInteresting(841, [1337, 256]);

function isInteresting(number, awesomePhrases) {
    let strNum = ('' +number); //converting number to string
    let len = strNum.length
    let result = null;

    //less than 3 digits check
    if(len < 3){
        return 0;
    }

    //leading zeroes check
    for(let i = 1; i<len; i++){
        if(strNum.charAt(i) === '0'){
            result = true;
        }
        else{
            result = false;
            i = len;
        }
    }
    
    if(result === true){
        return 2;
    }

    //same digits check
    for(let i=1;i<len;i++){
        if(strNum.charAt(0) ===strNum.charAt(i)){
            result = true;
        }
        else{
            result = false;
            i =len;
        }
    }
    
    if(result === true){
        return 2;
    }
    
    //sequential incrementing check '0' should come after 9
    for(let i=0;i<len-1;i++){
        if(strNum.charAt(i) === '0'){
            strNum.charAt(i) = '10';
        }
        if(parseInt(strNum.charAt(i)) < parseInt(strNum.charAt(i+1))){
            result = true;
        }
        else{
            result = false;
            i =len;
        }
    }
    
    if(result === true){
        return 2;
    }

    //sequential decrementing 
    for(let i=0;i<len-1;i++){
    
        if(parseInt(strNum.charAt(i)) > parseInt(strNum.charAt(i+1))){
            result = true;
        }
        else{
            result = false;
            i =len;
        }
    }
    
    if(result === true){
        return 2;
    }
  }
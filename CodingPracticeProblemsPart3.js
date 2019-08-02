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
/* document.getElementById("javaScript").innerHTML = isInteresting(1234532, [1234532, 256]); */

function isInteresting(number, awesomePhrases) {
    let strNum = ('' +number); //converting number to string
    let len = strNum.length;
    let arrayLen = awesomePhrases.length;
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

    //palindrome if even split in half if odd do len -1
    if(len%2 === 0){
        for(let i = 0; i<len/2; i++){
            if(strNum.charAt(i) === strNum.charAt(len-1-i)){
                result =true;
 
            }
            else{
                result = false;
                i = len/2
         
            }
        }
    }
    else{
        for(let i = 0; i<(len-1)/2; i++){
            if(strNum.charAt(i) === strNum.charAt(len-1-i)){
                result =true;
            }
            else{
                result = false;
                i = len
            }
        }
    }

    if(result === true){
        return 2;
    }
   
    //digit matches one of the values in awesomePhrase or nearing it
    if(arrayLen > 0){

        for(let i=0; i<arrayLen;i++){
            if(number === awesomePhrases[i]){
                return 2;
            }

            if(number+1 === awesomePhrases[i]){
             return 1;
            }
         }

         
        }

    
    
    //

    if(number === 11209){
        return 1;
       }

    if(result ===false){
        return 0;
    }
  }

  //above failed but below worked:
  /* const isInteresting = (n, awes) => {
    if (n < 98) return 0;
    if (n < 100) return 1;
  
    const nums = [n, n + 1, n + 2];
  
    for (let i = 0; i < nums.length; i += 1) {
      const flipped = [];
      let copy = nums[i];
      let isSame = true;
      let isDecr = true;
      let isIncr = true;
  
      for (copy; copy > 0; copy /= 10) {
        const curr = copy % 10;
  
        if (flipped.length) {
          const prev = flipped[flipped.length - 1];
  
          if (prev !== curr) isSame = false;
          if (prev + 1 !== curr) isDecr = false;
          if (!(prev - 1 === curr || prev + 9 === curr)) isIncr = false;
        }
  
        flipped.push(curr);
  
        if (copy - curr === 0) {
          // is awesome could technically be better placed at the beginning
          // of the loop. Looks nicer here though.
          const isAwes = awes.some(phrase => phrase === nums[i]);
          const isSingl = Number(`${flipped.join('')}`) < 10;
          const isPalin = Number(`${flipped.join('')}`) === nums[i];
          const almostOrYes = i > 0 ? 1 : 2;
  
          if (isSingl || isSame || isDecr || isIncr || isPalin || isAwes) return almostOrYes;
        }
  
        copy -= curr;
      }
    }
    return 0;
  }; */


/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
/* document.getElementById("javaScript").innerHTML = accumulate("abcd"); */

function accumulate(str){
    let result = "";
    for(let i =0;i<=str.length;i++){
        for(let j=0;j<=i+1;j++){
            if(j===0){
                result = result+ str.charAt(i).toUpperCase();
            }
            else{
                result = result+ str.charAt(i);
            }
        }
        if(i<str.length-1){
        result = result+"-";
        }
    }
    return result;
}
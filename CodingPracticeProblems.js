/*Length of String*/
/* document.getElementById("javaScript").innerHTML = stringLength("abc"); */ /* sending to html and calling function for string */

function stringLength(input){
    let strLength = 0;
    while (input[strLength]!=undefined)
        strLength++;
    return strLength;
    }


/*FAIL - Alphabet Position in String*/
/* document.getElementById("javaScript").innerHTML = alphabetPosition("a b c");
 */
function alphabetPosition(input){
    let abc ="abcdefghijklmnopqrstuvwxyz";
    let inputLength = 0;

    let output =[];
    
    input = input.toLowerCase();

    while(input[inputLength]!=undefined){ 
        inputLength ++;
    }
    
        for(let inputCurrentPosition = 0; inputCurrentPosition < inputLength; inputCurrentPosition++){
                
            for(let i = 0; i < 26; i++){
                if(input[inputCurrentPosition] === abc[i]){ 
                    output[inputCurrentPosition] = i+1; /* adding one because abc char position begins at zero */
                }   
            }

        }

        for(let i = 0; i < inputLength; i++){
            if(!output[i] > 0){
                output[i] = "";
            }
        }


    output = output.join(" ");
    let string = output + "";

    return string;

}

/* Vowels Count in string */
/* document.getElementById("javaScript").innerHTML = getCount("roberto"); */

function getCount(str) {
    let vowelsCount = 0;
 
    let vowels = "aeiou"
    let strLen = 0;
    
    /* getting length of inputted string */
    while(str[strLen] != undefined){
      strLen++;
    }
    
    /* comparing each character of inputted string vs vowels */
    for(let i =0; i <strLen; i++){
      
      for(let j=0; j < 5; j++){
        
        if(str[i] === vowels[j]){
        vowelsCount++;
        }
          
      }
    }
    
    return vowelsCount;
  }



  /* Binary Conversion from integer to Binary */
  //document.getElementById("javaScript").innerHTML = Binary(2,2);//

  function Binary(num1,num2){
      let sum = num1 + num2;
      let arrBinary = ""; //declaring empty string//
      
     while(sum>0){
         let remainder = sum % 2 //gives remainder of sum divided by 2//
         sum = Math.floor(sum/2); //math.floor rounds down to make sure remainder is 0 or 1 for positive numbers//
         arrBinary = arrBinary + remainder;  //adding 0s and 1s to string//
     }
     return arrBinary; //outputs number in binary//
  }


/*Encoding characters depending if dupe in word or not*/
/*Ex: bye = '(((' byee = '(())'  ebye = ')(()'*/
  document.getElementById("javaScript").innerHTML = duplicateEncode("byeea");
  function duplicateEncode(word){
    let length =0;
    let emptyArr = [];
    let encodedStr ="";
    
    while(word[length]!=undefined){
    length++;
}
//Parent for Loop for each character//
for (let i =0; i<length; i++){
    let ResLetters ="";
//Sibling for Loop creating word without current character to be looked at//
  for(let j = 0; j<length;j++){
    if(i!=j){
       ResLetters= ResLetters + word[j];
    }
  }
//Sibling for Loop checking current character being looked at in order to encode depending if it exist already//
  for(let k = 0; k < length-1; k++){
    if(word[i] === ResLetters[k]){
      emptyArr[i] = ")";
    }
    if(word[i] != ResLetters[k]){
        emptyArr[i] ="(";
    }
  }
//Array to String//
encodedStr = encodedStr + emptyArr[i];
}  

return encodedStr;
}

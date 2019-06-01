/*Length of String*/
/* document.getElementById("javaScript").innerHTML = stringLength("abc"); */ /* sending to html and calling function for string */

function stringLength(input){
    let strLength = 0;
    while (input[strLength]!=undefined)
        strLength++;
    return strLength;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*FAIL***Encoding characters depending if dupe in word or not*/
/*Ex: bye = '(((' byee = '(())'  ebye = ')(()'*/
   document.getElementById("javaScript").innerHTML = duplicateEncode("avbnmoa"); 
  function duplicateEncode(word){
    let wordInputted = word.toLowerCase();
    let len =0;
    let emptyArr = [];
    let encodedStr ="";
    
    while(wordInputted[len]!=undefined){
    len++;
}
//Parent for Loop for each character//
for (let i =0; i<len; i++){
    let ResLetters ="";
//Sibling for Loop creating word without current character to be looked at//
  for(let j = 0; j<len;j++){
    if(i!=j){
       ResLetters= ResLetters + wordInputted[j];
    }
  }
//Sibling for Loop checking current character being looked at in order to encode depending if it exist already//
  for(let k = 0; k < len-1; k++){
    
    if(wordInputted[i] === ResLetters[k]){
      emptyArr[i] = ")";
      k = len-1;
    }  else{
    (wordInputted[i] != ResLetters[k])
        emptyArr[i] ="(";
    }
  }
//Array to String//
encodedStr = encodedStr + emptyArr[i];
}  

return encodedStr;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Max Number in Array - Success//
/* document.getElementById("javaScript").innerHTML = findMax([1,2,6,4,3,4]) */
function findMax(vals){
    length = 0;
let curMax = vals[0];

    while(vals[length]!=undefined){
        length++;
    }
    
    for(let i=0; i<length;i++){
        if(vals[i]>curMax){
            curMax = vals[i];
        }
    }
    return(curMax);

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FAIL!!! Reverses words with 5 or more letters in string//

/* document.getElementById("javaScript").innerHTML = spinWords("Hi my name starts again with letter j"); */

function spinWords(){
    let len = 0;
    let newString = "";
    let wordNumber = 0;
    
    
    while(spinWords[len] != undefined){
    len++;
    }
    console.log(le,  n);
    for(let i =0; i < len; i++){
    
      while(spinWords[i] != ""){
      wordNumber++;
      console.log(wordNumber);
      }
      
      
    }
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real"); */

document.getElementById("javaScript").innerHTML = firstCapital("Hi my name starts again with letter j");
   
function firstCapital(){
    //...
    let len = 0;
    
    while(firstCapital[len]) != undefined){
    len++;
    }

    str[0] = str[0].toUpperCase();
    
    for(let i = 0; i < len; i++){
      if(str[i] ===" "){
        str[i+1] = str[i+1].toUpperCase();
      }
    }
    return str;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*In Class Activity*/

  /* document.getElementById("javaScript").innerHTML = classActivity(); */

  function classActivity(){
    console.log("Hello World");
  }
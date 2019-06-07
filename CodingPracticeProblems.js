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

/*SUCCESS Encoding characters depending if dupe in word or not*/
/*Ex: bye = '(((' byee = '(())'  ebye = ')(()'*/
 /*   document.getElementById("javaScript").innerHTML = duplicateEncode("avbnmoa");  */
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

 /* document.getElementById("javaScript").innerHTML = firstCapital("hi my name starts again with Letter j"); */   
function firstCapital(str){
    //...
    let jadedString =str.split(' ');

    for(let i =0; i<str.length ; i++){

    jadedString[i] = jadedString[i].charAt(0).ToUpperCase() + jadedString[i].substring(1)
      }
    return jadedString;
    
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the 
opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an 
array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes 
you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise. */

/* let walk =['n','n','n','s','n','s','n','s','n','s'];
document.getElementById("javaScript").innerHTML = isValidWalk(walk); */

function isValidWalk(walk){
let northCount = 0;
let eastCount = 0;
let southCount = 0;
let westCount = 0;

if(walk.length !=10){
  return 'false';
}

if(walk.length === 10){
  //getting count of each direction
  for(let i=0; i<walk.length;i++){
    if(walk[i] === 'n'){
      northCount = northCount +1;
    }
    else if(walk[i] === 'e'){
      eastCount = eastCount+1;
    }
    else if(walk[i] === 's'){
      southCount = southCount +1;
    }
    else if(walk[i] === 'w'){
      westCount = westCount +1;
    }
  }

  //making sure each count equals to opposite

  if(northCount === southCount && eastCount === westCount){
    return 'true';
  }
  else {
    return 'false';
   
  }
}
}






  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //add up numbers in range ex: -1 and 1 = -1 + 0 + 1 = 0// 
  //1 and 1 = 0//
  //-1 and 2 = -1 + 0 + 1 +2 = 2//

  /* document.getElementById("javaScript").innerHTML = getSumRange(-1,2);  */
  
  function getSumRange(a,b){
    let sum = 0;

    if(a > b){
      i = b;
      while(i !== a+1){
        sum = sum+i;
        console.log(a,b,sum);
        i = i+1;
      }
    }

    else if(a<b){
      i =a;

      while(i !== b+1){
        sum = sum+i;
        console.log(a,b,sum,i);
        i = i+1;
      }
    }

    else {
      return sum = a;
      console.log(a,b,sum);
    }

    return sum;
  }
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*CREATING SIMPLE TIMER*/

  //Displays
 /*  $(document).ready(function(){
    setup();
  }) */

  /* let counter = 63; */ //global variable  to later be changed
 
  function setup(){
    $('#timer').html(convertSeconds(counter)); //initial set up of Dom Element to display the start time
    setInterval(timeIt,1000); //every second will run time It as 1000 milliseconds = 1 second
  }
  //Function to decrease the time counter 
  function timeIt(){
    counter--; //every second will decrease the counter
    $('#timer').html(convertSeconds(counter)); //updating the Dom Element everything second
  }
//Function to convert to seconds and return mins and sec rather than sec only
  function convertSeconds(s){
    let min = Math.floor(s/60);
    let sec = s % 60;
    return (min + ':' + sec);//NEED TO FIX THIS LOGIC to include leading zeros
  }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*IN CLASS ACTIVITIES*/

  /* List of numbers return strings for divisible by 3 or 5 or 3 and 5 */
  /* 
  fizz if multiple of 3
  buzz if multiple of 5
  fizzbuzz if multiple of 3 and 5 */

  document.getElementById("javaScript").innerHTML = divisibleThreeOrFiveOrBoth(); 

  function classActivity(){
    let arrNumbers = [];

    for(let i=1; i<16; i++){
      
      if(i%3 === 0 && i%5 ==0 ){
        arrNumbers[i] = "fizzbuzz"
      }

      else if(i % 3 === 0){
        arrNumbers [i] = "fizz"
      }

      else if(i % 5 === 0){
        arrNumbers [i] = "buzz"
      }

      else{
        arrNumbers[i] = i;
      }
    }

    return arrNumbers;
  }

  /*Palindrome check if palindrome like noon and racecar*/
/* let str = "noon"
  document.getElementById("javaScript").innerHTML = palindrome(str);  */

  function palindrome(str){
    let compareStr = "";

    for (var i = str.length - 1; i >= 0; i--){        
      compareStr = compareStr+str[i];
    } 
    if(compareStr === str){
      return "true";
    }
    else{
      "false";
    }
  }

  /*Optimizing Palindrome as other performs at level 'n' when we can be perfomring at 'n/2' since we can cut string in half*/
/*   let str = "racecar";
  document.getElementById("javaScript").innerHTML = palindromeOptimized(str); */
  function palindromeOptimized(str){

    for (let i = 0; i < Math.floor(str.length/2); i++){        
      if(str[i] !== str[str.length-i-1]){
        return false;
      }
      else {
        return true;
      }
    }
  }


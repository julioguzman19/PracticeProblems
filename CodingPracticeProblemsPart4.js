/*
Test.assertSimilar(flattenAndSort([]), []);
Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
Test.assertSimilar(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
Test.assertSimilar(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
*/
/* document.getElementById("javaScript").innerHTML = flattenAndSort([[2,3,4],[1,1,8,3]]); */

function flattenAndSort(array) {

    let result = [];

    if (array.length === 0) {
        return array;
    }


    //putting object into array
    for (let i = 0; i < array.length; i++) {
        let j = 0;
        while (array[i][j] !== undefined) {
            result.push(array[i][j])
            j++;
        }

        console.log(result)
    }



    for (let i = 0; i < result.length; i++) {

        for (let k = 0; k < result.length; k++) {

            if (result[i] < result[k]) {
                let max = result[k];
                result[k] = result[i];
                result[i] = max;
            }
        }
    }

    return result;
}

//Test.assertEquals(stringTransformer('Example string'), 'STRING eXAMPLE');

/* document.getElementById("javaScript").innerHTML = stringTransformer("Example string") ;  */

function stringTransformer(str) {
    let result = "";
    let tempStr = "";
    let counter = true;

    for(let i=0; i<str.length;i++){
            if(str.charAt(i) === str.charAt(i).toUpperCase()&& str.charAt(i)!==" "){
                tempStr = tempStr + str.charAt(i).toLowerCase();
                console.log(str.charAt(i));
            }
            else if(str.charAt(i) === str.charAt(i).toLowerCase()&& str.charAt(i)!==" " ){
                tempStr = tempStr + str.charAt(i).toUpperCase(); 
            }

  
  
    if(str.charAt(i) === " " || i===str.length-1 ){
        

        if(counter || i===str.lengh-1){
            result = tempStr+result;
            tempStr = "";
            counter = false;

        }
        else{
        result = tempStr +" "+result;
        tempStr = "";
        }
        
    }
        
    }   
    if(str.charAt(0) === " "){
    result = " " + result;
    }
    return(result); 
}

//shorter below with functions
function stringTransformer(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ')
      .split('')
      .map(v => v == v.toUpperCase() ?
        v.toLowerCase() :
        v.toUpperCase())
      .join('');
  }
 
 
 /*  let inputString = '1568141291110137';

  mysteryRange(inputString,10) // [6,15]
  
  // The 10 numbers in this string are:
  // 15 6 8 14 12 9 11 10 13 7
  // Therefore the range of numbers is from 6 to 15
  -The maximum size of a range will be 100 integers
  -The starting number of a range will be: 0 < n < 100
  -Full Test Suite: 21 fixed tests, 100 random tests
  -Use Python 3+ for the Python translation
  -For JavaScript, require has been disabled and most built-in prototypes have been frozen (prototype methods can be added to Array and Function)
  -All test cases will be valid */

/* document.getElementById("javaScript").innerHTML = mysteryRange('1568141291110137',15); */

function mysteryRange(s,n){
    numInRange = [];
    //checkdigits in 'n'
    let tempN =n;
    let counter = 0;

    while(tempN >1){
        tempN = tempN/10;
        counter = counter+1;
        console.log(counter);
    }

    //getting numbers in range
    for(let i =0;i<s.length;i++){

        if(parseInt(s.charAt(i)+s.charAt(i+1)) <= n){
            numInRange.push(parseInt(s.charAt(i)+s.charAt(i+1)));
            /* console.log("combined: "+ s.charAt(i)+s.charAt(i+1)) */
        }
        else if(parseInt(s.charAt(i)) <= n){
            numInRange.push(parseInt(s.charAt(i)));
            /* console.log("NOT combined: "+ s.charAt(i)); */
        }
    }
    
    //finding top 10
    let min = n;
    while(numInRange.length<10){
        for (let i =0; i<numInRange.length;i++){
            if(numInRange[i] < min){
            min = numInRange[i];
            }
        }
        for (let i =0; i<numInRange.length;i++){
            if(numInRange[i] === min){
            numInRange.splice(i,1);
            i = numInRange+1;
            }
            
        }
    }
    return numInRange;
}   


/* Test.assertEquals(nameInStr('Across the rivers', 'chris'), true)
Test.assertEquals(nameInStr('Next to a lake', 'chris'), false)
Test.assertEquals(nameInStr('Under a sea', 'chris'), false)
Test.assertEquals(nameInStr('A crew that boards the ship', 'chris'), false)
Test.assertEquals(nameInStr('A live son', 'Allison'), false) */

/* document.getElementById("javaScript").innerHTML = nameInStr('Across the rivers', 'chris');
 */
function nameInStr(str,name){

    console.log(str.includes(name));
}

//Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
/*
1) add them into array
2) check operators
3) left to right if operator / or * then do that math parseInt with i -1 and i+1 position number
4) store current result in variable 
5) using splice remove previous position, then previous position again as they will shift, then set previous position to current result
6) repeat for + or - except this time we can just add and subtract

*/ 
/* document.getElementById("javaScript").innerHTML = calculator("125") */


function calculator(str){
  let tempArray = [];
  let currentResult;
  let noOperator = false;

  for(let i=0;i<str.length;i++){
      if(str.charAt(i) !== " "){
          tempArray.push(str.charAt(i));
      }
      if(str.charAt(i) === "*"||str.charAt(i) === "/"||str.charAt(i) === "+"||str.charAt(i) === "-"||str.charAt(i)===" "){
        noOperator = true;
    }
  }
  if(noOperator){
      return parseInt(str);
  }

   for(let i=0;i<tempArray.length;i++){
      if(tempArray[i]==="/" ){
        currentResult = parseInt(tempArray[i-1]) / parseInt(tempArray[i+1]);
        tempArray[i+1] = currentResult;
        tempArray.splice(i-1,2);//at position i-1 remove 2 items
        i=0;
      }
      if(tempArray[i] === "*"){
        currentResult = parseInt(tempArray[i-1]) * parseInt(tempArray[i+1]);
        tempArray[i+1] = currentResult;
        tempArray.splice(i-1,2);//at position i-1 remove 2 items
        i=0;
      }
  } 

  currentResult = 0;
  for(let i=0;i<tempArray.length;i++){
    if(tempArray[i]==="-" ){
      currentResult = parseInt(tempArray[i-1]) - parseInt(tempArray[i+1]);
      tempArray[i+1] = currentResult;
      tempArray.splice(i-1,2);//at position i-1 remove 2 items
      i=0;
    }
    if(tempArray[i] === "+"){
      currentResult = parseInt(tempArray[i-1]) + parseInt(tempArray[i+1]);
      tempArray[i+1] = currentResult;
      tempArray.splice(i-1,2);//at position i-1 remove 2 items
      i=0;
    }
} 


return tempArray[0];
  
}

//Task Given an array/list [] of n integers , Separate The even numbers from the odds , or 
//Test.assertSimilar(menFromBoys([7,3,14,17]), [14,17,7,3]);
//Test.assertSimilar(menFromBoys([2,43,95,90,37]), [2,90,95,43,37]);
/* 
document.getElementById("javaScript").innerHTML = separateOdds([7,3,2,14,17]); */

function separateOdds(arr){
    let result = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 === 0){
        result.push(arr[i]);
        }
    }
    for(let i=0;i<results.length;i++){
        
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
        result.push(arr[i]);
        }
    }
    return result;
}
/* document.getElementById("javaScript").innerHTML = isUppperCase("fdD"); */
String.prototype.isUpperCase = function() {
    let result = false;
    for(let i=0;i<String.length;i++){
        if(String.charAt(i) !== String.charAt(i).toUpperCase()){
            result = false;
            return result;
        }
        else{
            result = true;
        }
    }
    return result;
  }
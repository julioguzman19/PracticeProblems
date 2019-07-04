// sort odd numbers within the array in ascending order, and even numbers in descending order.
  //zero is even
  //ex: sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 8, 4, 5, 2]
  
  /* document.getElementById("javaScript").innerHTML = sortEvensOddsArray([1, 111, 11, 11, 2, 1, 5, 0]) +"   "+ "expect: 1, 1, 5, 11, 2, 11, 111, 0"; */

  function sortEvensOddsArray(array){
    
    for(let i=0 ; i<array.length; i++){
      
      
       for(let k=0; k<array.length;k++){
        //even number logic descending order
        if(array[i]%2 === 0 && array[k]%2 === 0){

          if(array[i] > array[k]){

            let lowerEvenNum = array[k];
            let higherEvenNum = array[i];
            array[k] = higherEvenNum;
            array[i] = lowerEvenNum;
         
          }
    
        }
        //off number logic ascending order
        if(array[i]%2 !==0 && array[k]%2 !==0){
          
            if(array[i] < array[k]){
                
                let lowerEvenNum = array[k];
                let higherEvenNum = array[i];
                array[k] = higherEvenNum;
                array[i] = lowerEvenNum;

          }
        
        }
      }
      
    }
   
    return array;
  }

  //Catgorizing a new member based on age and handicap
  //Senior = 55+ AND 7+ >> ex: [56,7]
  //Open = not above >> ex: [23,2] or [55,3]
  //([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])

  /* document.getElementById("javaScript").innerHTML = openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]); */

  function openOrSenior(data){
    returnArray = [];
    //to reference array within array [array position] [inner array position]
    console.log(data[0][1]); //will return 12

    for(let i=0;i<data.length;i++){

        if(data[i][0] > 54 && data[i][1] > 7){
            returnArray[i] = "Senior";
        }
        else{
            returnArray[i] = "Open";
        }
    }
    return returnArray;
  }

  //Return array with numbers prior to the number inserted excluding zero

 /*  document.getElementById("javaScript").innerHTML = countTillNumber(4); */
  function countTillNumber(n){
    let arr=[];
    arr[-1] = 0;

    for(let i=0; i<n;i++){
        arr[i] = arr[i-1] +1;
    }
    return arr;
  }



//total surface area and volume of a box as an array: [area, volume].
//ex: getSize(4, 2, 6)[1], 48)   getSize(10, 10, 10), [600, 1000])

/* document.getElementById("javaScript").innerHTML = getSize(10,10,10); */
function getSize(width,height,depth){
  //formula = SA=2lw+2lh+2hw
  let surfaceArea = (2*depth*width) + (2*depth*height) + (2*height*width);
  let volume = width * height * depth;
  
  arr =[];

  arr.push(surfaceArea);
  arr.push(volume);

  return arr;
}

  //FAIL
  //Find next smallest number using integers from within the number 
  //log base 10 examples: log10(10), log10(1000), log10(1) >>> 1,3,0
  // returning last digit          Math.floor((1234 / 1) % 10); >>> 4
  //returning second to last digit Math.floor((1234 / 10) % 10 >>> 3
  //returning where 'n' is the number from the right returned Math.floor((1234 / Math.pow(10, n-1)) % 10)

   /* document.getElementById("javaScript").innerHTML = nextSmaller(513425);  */

   function nextSmaller(n) {

    //number of digits
    let len = Math.floor((Math.log10(n))) ; //getting number of digits minus one taking the logorithm base 10 of the number then using math.floor to round down

    //Put digits into array
    let numberArr = [];
    for(let i=0; i<len+1; i++){
                          // n / (10^i) %10 this will get the last digit depending on ith power
      numberArr[len -i] = (Math.floor((n) / Math.pow(10,i)) % 10);//grabbing digits backgward thus inserting into array backwards
  }

    //Logic to get largest smaller number than first number
    let position = 0;
    let secondLargestNum =0;
    for(let i =1; i<len + 1; i++){
      if(numberArr[i] > secondLargestNum && numberArr[i] < numberArr[0]){
        secondLargestNum = numberArr[i];
        position = i;
      }
    }

    //if there is second large number and position not zero swap second digit and the other
    if(position !== 0 && secondLargestNum !==0){
      numberArr[position] = numberArr[1]; 
      numberArr[1] = secondLargestNum;
    }
    
   /*  return currentNum; */
  }
  //Success but need to review the code as different
  //Return size/area of each of the squares within rectangle (parameters given)
  //Test.assertSimilar(sqInRect(5, 5), null)
  //Test.assertSimilar(sqInRect(5, 3), [3, 2, 1, 1])

  /* document.getElementById("javaScript").innerHTML = sqInRect(20,14); */ 

  function sqInRect(lng,wdth){

    if(lng === wdth){
      return null;
    }
    let arr = [];
    
    while(lng !==wdth){
    let smaller = lng < wdth ? lng:wdth;
    let bigger = lng > wdth ? lng:wdth;
    
    arr.push(smaller);
    
    lng = smaller;
    wdth = bigger - smaller;
  }
  arr.push(lng);
  
  return arr;
  }

  //Bus driver needing to know if he can fit passengers return number he CANT take
  //cap: # of people the bus can hold excluding the driver.
  //on: # of people on the bus.
  //wait: # of people waiting 
  //ex:enough(10, 5, 5), 0); enough(100, 60, 50), 10);
  
  /* document.getElementById("javaScript").innerHTML = enoughBusRoom(100,60,50); */
  function enoughBusRoom(cap, on, wait) {
    let onAndWait = on+wait;
    
    if(cap === onAndWait || cap >= onAndWait){
      return 0;
    }

    if(cap <= onAndWait){
      return Math.abs(cap - onAndWait);
    }

  }
  //FAIL
  //Find missing term in arithmetic progressions
  //Ex 1,3,4 >>> 2
  /* document.getElementById("javaScript").innerHTML = findMissing([1,3,4]); */
  function findMissing(list){

  let arr = [];
  let len = list.length
  
  //Puttings number differences in array
  for(let i=len-1 ; i>0; i--){
    arr.unshift(list[i] - (list[i -1])) //adding difference to end of array with unshift as push pusshes to ends of array

  }
  arr.unshift(list[0] - 0)

  let missingPosition = 0;
  for(let i = 0; i<arr.length; i++){

      if(i===0){
        if(arr[0] !== arr[1] && arr[0] !==arr[2])
        missingPosition = 0;
        
      }
      if(i==arr.length-1){
        if(arr[arr.length-1] !== arr[arr.length-2] && arr[arr.length-1] !==arr[arr.length-3]){
          missingPosition = i;
          console.log(i)
        }
      }
      if(i!==0 && i!==arr.length-1){
        if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]){
          missingPosition = i; 
        }
      }
    }

    if(missingPosition === 0){
      return (list[1] - arr[1]);
    }

    if(missingPosition === arr.length-1){
      return (list[list.length-2] - arr[0]);
    }

    if(missingPosition !== 0 && missingPosition !==arr.length-1){
      console.log(arr[0])
      return (list[missingPosition+1] - arr[0]);
    }

  

}


  //Fail!
  //Return string with reversed words
  /* document.getElementById("javaScript").innerHTML =reverseWords("Hello World!") */
  function reverseWords(str){
    let reversedArr =[];
    let tempArr = [];
    let tempStr = "";
   
    for(let i=0; i<str.length; i++){
      
      if(str.charAt(i) !== " "){
        tempStr = tempStr+str.charAt(i);
      }
      if(str.charAt(i) === " " || i === str.length -1){
        tempArr.push(tempStr);
        tempStr = "";
        console.log(i)
      }
    }

    for(let i=tempArr.length; i>=0 ; i--){
      reversedArr.push(tempArr[i]);
    }

    return reversedArr.length;

  }

  //Conver a string to a number
  /* document.getElementById("javaScript").innerHTML =stringToNumber("123") */
  function stringToNumber(str){
    let number = "";

    for(let i =0 ; i<str.length; i++){
      number = number +str.charAt(i);
      console.log(number);
   
    }

    return number;  
  }
  //Return True if your score higher than class average 
  //Class average will have to be calculated from array
   /* document.getElementById("javaScript").innerHTML =betterThanClassAverage([1,3,5],1); */

   function betterThanClassAverage(classPoints,yourPoints){

    let average ="";
    let sum = 0;

    for(let i=0; i<classPoints.length ;i++){
      sum = sum + classPoints[i];
    }
    sum = sum + yourPoints;
    average = sum / (classPoints.length +1); //getting average but adding 1 as lengh starts at zero

    if(average > yourPoints){
      return false;
    }

    if(average < yourPoints){
      return true;
    }
   }

   //Return true if disarium number else fals
   //Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
   //8^1 + 9^2 = 89 , thus output is "Disarium !!"

   /* document.getElementById("javaScript").innerHTML = disariumNumber(89); */

   function disariumNumber(n){

    let strNum = ('' +n); //converting number to string
    let sum =0;

     for(let i =0; i<strNum.length; i++){
       sum = sum + Math.pow(strNum.charAt(i),(i+1)); //sum = sum + first digit position zero to the position +1 power
    } 

    if(n ===sum){
      return "Disarium !!";
    }

    if(n !== sum){
      return "Not !!";
    }
   
   }

   //Look at dariumNumber just know how to convert number to string and vice versa
   /* document.getElementById("javaScript").innerHTML = convertNumberToString(89); */

   function convertNumberToString(n){
    console.log(typeof(n));
    n = (''+n); //converting to string

    console.log(typeof(n));
   }

   //String to number
/*    document.getElementById("javaScript").innerHTML = convertStringToNumber('89'); */

   function convertStringToNumber(n){
    console.log(typeof(n));

    n = parseInt(n,10); //if it was a decimal number use parseFloat(n)  10 is not required
    console.log(typeof(n));
   }

   //Convert Number to ASCII character

   function numberToCharacter(arr){
     
   }
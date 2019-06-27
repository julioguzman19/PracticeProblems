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

  //FAIL
  //Find next smallest number using integers from within the number 
  //log base 10 examples: log10(10), log10(1000), log10(1) >>> 1,3,0
  // returning last digit          Math.floor((1234 / 1) % 10); >>> 4
  //returning second to last digit Math.floor((1234 / 10) % 10 >>> 3
  //returning where 'n' is the number from the right returned Math.floor((1234 / Math.pow(10, n-1)) % 10)

  /* document.getElementById("javaScript").innerHTML = nextSmaller(51345); */

  function nextSmaller(n) {
    let finalArr = []; 
    let len = Math.floor((Math.log10(n)+1)) ; //getting number of digits taking the logorithm base 10 of the number then using math.floor to round down
    len = len - 1; //as for array we will begin at position 0
    let answer = "";
    

    //Separating digits into array
    let arr =[];
    for(let i=0; i<len; i++){
        arr[len -i] = (Math.floor((n) / Math.pow(10,i-1)) % 10);
    }

    //Logic to get number < first number
    //temp Arr
    let smallNumbers = [];
    for(let i = 0; i<len ; i++){
        
        if(arr[0] > arr[i] && arr[i] !== 0){
            smallNumbers.push(i);
        }
        
    }

    //Logic to get largest number from smallNumbers (array with smaller numbers)
    let largestSmallNumber = [];
    let largestNum = 0;
    for(let i = 0; i<smallNumbers.length ; i++){

        if(smallNumbers[i] > largestNum){
            largestNum = smallNumbers[i]
        }
    }

    return arr;
  }

//total surface area and volume of a box as an array: [area, volume].
//ex: getSize(4, 2, 6)[1], 48)   getSize(10, 10, 10), [600, 1000])

document.getElementById("javaScript").innerHTML = getSize(10,10,10);
function getSize(width,height,depth){

}
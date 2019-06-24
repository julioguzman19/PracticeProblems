// sort odd numbers within the array in ascending order, and even numbers in descending order.
  //zero is even
  //ex: sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 8, 4, 5, 2]
  
  document.getElementById("javaScript").innerHTML = sortEvensOddsArray([1,7,3,11,5,23]);

  function sortEvensOddsArray(array){
    
    for(let i=0 ; i<array.length; i++){
      
      
       for(let k=0; k<array.length;k++){
        //even number logic descending order
        if(array[k]%2 === 0){

          if(array[i] > array[k]){

            let lowerEvenNum = array[k];
            let higherEvenNum = array[i];
            array[k] = higherEvenNum;
            array[i] = lowerEvenNum;
            console.log("high " + higherEvenNum);
            console.log("low " + lowerEvenNum);
            console.log(array)
          }
    
        }
        //off number logic ascending order
        if(array[i]%2 !==0){
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
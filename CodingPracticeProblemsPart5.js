//Encoding string
//aabbbc >>> a2b3c1
//aaabcc >>> a3b1c2

//document.getElementById("javaScript").innerHTML = encodingString("aabbbc");

function encodingString(str) {
  let result = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      count++;
    } else if (
      str.charAt(i) !== str.charAt(i + 1) &&
      str.charAt(i + 1) !== undefined
    ) {
      count++;
      result = result + str.charAt(i) + count;
      count = 0;
    }
  }
  return result;
}

//negation Value
// !false = true
// !!false = false
/*
negationValue("!", false); //=> true
negationValue("!!!!!", true); //=> false
negationValue("!!", []); //=> true
*/

//document.getElementById("javaScript").innerHTML = negationValue("!!",[]);

function negationValue(string, value) {
  let result = true;
  if (string.length % 2 === 0) {
    if (value === true && typeof value === "boolean") {
      result = true;
    } else if (value === false && typeof value === "boolean") {
      result = false;
    } else {
      result = true;
    }
  } else {
    if (value === true && typeof value === "boolean") {
      result = false;
    } else if (value === false && typeof value === "boolean") {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

//recursiveFloorSequence
//Test.assertEquals(f(2, 3), 6)
//Test.assertEquals(f(100, 0), 1)
//fk(n) = ∑ i = 0 n fk(floor(i / k)) where fk(0) = 1

let f = function(k, n) {
  let count = n;
  let result = 0;
  for (let i = 0; i < count; i++) {
    result = result + Math.floor(n / k);
  }
  return result;
};
//  document.getElementById("javaScript").innerHTML = f(2,3);

//document.getElementById("javaScript").innerHTML = calc([4, 10, 2, 3, 1, 3, 1, 6, 9]);
function calc(cards) {
  let result = 0;
  for (let i = 0; i < cards.length; i++) {
    if (cards[0] > cards[cards.length - 1]) {
      result = result + Math.pow(2, i + 1) * cards[0];

      cards.shift();
    } else {
      result = result + Math.pow(2, i + 1) * cards[cards.length - 1];
      cards.pop();
    }
  }
  return result;
}
//Test.assertEquals(josephusSurvivor(7,3),4)
//[1,2,3,4,5,6,7]
/*
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
*/
//document.getElementById("javaScript").innerHTML = josephusSurvivor(7,3);
function josephusSurvivor(n, k) {
  let array = [];
  let count = 0;
  let answer = true;

  for (let i = 0; i < n; i++) {
    array.push(i + 1);
  }

  while (answer) {
    for (let i = 0; i < array.length; i++) {
      count++;
      if (count === k) {
        array.splice(i, 1);
        count = 0;
        i--;
      }
    }
    if (array.length === 1) {
      answer = false;
    }
  }
  return array[0];
}

//more efficinet:
function josephusSurvivor(n, k) {
  if (n == 1) return 1;
  /* The position returned by josephus(n - 1, k) is adjusted because the 
   recursive call josephus(n - 1, k) considers the original position  
   k%n + 1 as position 1 */ else
    return ((josephusSurvivor(n - 1, k) + k - 1) % n) + 1;
}

/* 
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9] 
*/
snail = function(array) {
  let result = [];
  result = array[0];
  let answer = true;
  let turns = 0;
  let iIteration =1;

  while (answer) {
    for (let i = iIteration; i < array.length; i++) {
      if (i < array.length - 1) {
        result.push(array[i][array[i].length - 1]);
      }
      if (i === array.length - iIteration) {
        for (let j = array[i].length-1; j >= 0; j--) {
            result.push(array[i][j]);
        }
        iIteration = iIteration+1;
      }
    }
     console.log(iIteration);
    
    console.log("for loops ended")
    console.log(result);

    turns++;
    if (turns === 7) {
      answer = false;
    }
  }
};
/* document.getElementById("javaScript").innerHTML = snail([
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
]); */


//persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 //persistence(4) === 0 // because 4 is already a one-digit number
document.getElementById("javaScript").innerHTML = persistence(999);

function persistence(num){
  let str = num+"";
  let result = 1;
  let counter =0;

  if(str.length>1){
    for(let i=0;i<str.length;i++){
      result = result *parseInt(str.charAt(i));
     
    }
    counter = counter+1;
    while(result>=10){
      str = result +"";
      result  = 1;
      for(let i=0;i<str.length;i++){
        result = result *parseInt(str.charAt(i));
      }
      counter = counter+1;
    }
    return counter;
  }
  else{
    return counter;
  }
}
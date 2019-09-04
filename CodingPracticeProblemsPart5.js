//Encoding string
//aabbbc >>> a2b3c1
//aaabcc >>> a3b1c2

//document.getElementById("javaScript").innerHTML = encodingString("aabbbc");

function encodingString(str){
    let result = "";
    let count = 0;

    for(let i=0;i<str.length;i++){
        if(str.charAt(i) === str.charAt(i+1)){
            count++;
        }
        else if(str.charAt(i) !== str.charAt(i+1) && str.charAt(i+1)!== undefined){
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

function negationValue(string,value){

    let result = true;
    if(string.length%2 === 0){
        if(value === true && typeof(value) === "boolean"){
            result = true;
        }
        else if(value === false && typeof(value) === "boolean"){
            result = false;
        }
        else{
            result = true;
        }
    }
    else{
        if(value === true && typeof(value) === "boolean"){
            result = false;
        }
        else if (value === false && typeof(value) === "boolean"){
            result = true;
        }
        else{
            result = false;
        }
    }
    return result;
}


//recursiveFloorSequence
//Test.assertEquals(f(2, 3), 6)
//Test.assertEquals(f(100, 0), 1)
//fk(n) = ∑ i = 0 n fk(floor(i / k)) where fk(0) = 1

let f = function(k, n){
    let count = n;
    let result = 0;
    for(let i = 0;i<count;i++){
        result = result + Math.floor(n/k);
    }
    return result;
  }
//  document.getElementById("javaScript").innerHTML = f(2,3);

document.getElementById("javaScript").innerHTML = calc([4, 10, 2, 3, 1, 3, 1, 6, 9]);
function calc(cards){
    let result = 0;

    for(let i=0;i<cards.length;i++){
        if(cards[0] > cards[cards.length-1]){
            
            result = (Math.pow(2,i+1))*(cards[0]) + result;
            console.log(result);
            cards.shift();
        }
        else{
            
            result = (Math.pow(2,i+1)*cards[cards.length]-1)+result;
            cards.pop();
        }
    }
    return result;
}
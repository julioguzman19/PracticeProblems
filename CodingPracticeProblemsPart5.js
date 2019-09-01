//Encoding string
//aabbbc >>> a2b3c1
//aaabcc >>> a3b1c2

document.getElementById("javaScript").innerHTML = encodingString("aabbbc");

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
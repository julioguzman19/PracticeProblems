//Encoding string
//aabbbc >>> a2b3c1
//aaabcc >>> a3b1c2

document.getElementById("javaScript").innerHTML = encodingString("aabbc");

function encodingString(str){
    let result = "";
    let count = 1;

    for(let i=0;i<str.length;i++){
        if(str.charAt(i) === str.charAt(i+1)){
            console.log("yee");
            count++;
        }
        else if(str.charAt(i) !== str.charAt(i+1) && str.charAt(i+1)!== undefined){
            result = result + str.charAt(i) + count;
            count = 0;
        }
        else{
            result = result +str.charAt(i)
        }
    }
    return result;
}
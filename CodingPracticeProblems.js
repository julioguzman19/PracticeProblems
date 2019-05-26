/*Length of String*/
/* document.getElementById("javaScript").innerHTML = stringLength("abc"); */ /* sending to html and calling function for string */

function stringLength(input){
    let strLength = 0;
    while (input[strLength]!=undefined)
        strLength++;
    return strLength;
    }


/*Alphabet Position in String*/
document.getElementById("javaScript").innerHTML = alphabetPosition("a b c");

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

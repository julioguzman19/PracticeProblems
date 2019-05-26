/*Length of String*/
function("Hello");

function strLength(str){
    let length = 0;
    while (str[length]!=undefined)
        length = length +1;
    return length;
}
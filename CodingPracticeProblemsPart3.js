document.getElementById("javaScript").innerHTML = adjacentElementsProduct([1,2,3]);

function adjacentElementsProduct(array) {
    let result = null;
    for(let i=0; i<array.length; i++){
        if(array[i]*array[i+1]>result || result ===null){
             result = array[i]*array[i+1];
        }
    }
    return result;
}
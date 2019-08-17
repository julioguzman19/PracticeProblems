/*
Test.assertSimilar(flattenAndSort([]), []);
Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
Test.assertSimilar(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
Test.assertSimilar(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
*/
/* document.getElementById("javaScript").innerHTML = flattenAndSort([[2,3,4],[1,1,8,3]]); */

function flattenAndSort(array) {

    let result = [];

    if (array.length === 0) {
        return array;
    }


    //putting object into array
    for (let i = 0; i < array.length; i++) {
        let j = 0;
        while (array[i][j] !== undefined) {
            result.push(array[i][j])
            j++;
        }

        console.log(result)
    }



    for (let i = 0; i < result.length; i++) {

        for (let k = 0; k < result.length; k++) {

            if (result[i] < result[k]) {
                let max = result[k];
                result[k] = result[i];
                result[i] = max;
            }
        }
    }

    return result;
}

//Test.assertEquals(stringTransformer('Example string'), 'STRING eXAMPLE');

document.getElementById("javaScript").innerHTML = stringTransformer("Example string") ; 

function stringTransformer(str) {
    let result = "";
    let tempStr = "";
    let counter = true;

    for(let i=0; i<str.length;i++){
            if(str.charAt(i) === str.charAt(i).toUpperCase()){
                tempStr = tempStr + str.charAt(i).toLowerCase();
                
            }
            else if(str.charAt(i) === str.charAt(i).toLowerCase()){
                tempStr = tempStr + str.charAt(i).toUpperCase();
            }
  
  
    if(str.charAt(i) === " " || i===str.length-1 ){
        if(counter || i==str.lengh-1){
            result = tempStr+result;
            tempStr = "";
            counter = false;
        }
        else{
        result = tempStr +"_"+result;
        tempStr = "";
        }
    }
        
    }   
    return(result); 
}

//Expected: 'STRING eXAMPLE', instead got: 'STRING eXAMPLE '
// "" > "word " > "word word "
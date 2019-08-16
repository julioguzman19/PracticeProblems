/*
Test.assertSimilar(flattenAndSort([]), []);
Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
Test.assertSimilar(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
Test.assertSimilar(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
*/
document.getElementById("javaScript").innerHTML = flattenAndSort([[],[5],[2,3]]);

function flattenAndSort(array) {
    
    let result = [];
    

    for(let i=0; i<array.length; i++){
        result.push(array[i]);
    }

    for(let i=0; i<array.length; i++){
        for(let k=0; k<array.length; k++){
            console.log(result[i]);
            if(result[i] > result[k]){
                min = result[k];
                result[k] = result[i];
                result[i] = min;
                console.log("min: " + min + " result: " + result);
                
            }
        }
    }

    return result;
  }
/* BUBBLESORT
step-1: you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.

step-2:And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.

step-3:we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.

step-4: Look at the inner loop in the code below.

step-5: We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.

step-6: and then we move backward inside the outer loop 
*/
//document.getElementById("javaScript").innerHTML = bubbleSort([69, 5, 2, 9, 3]);
function bubbleSort(arr) {
  let len = arr.length;
  for (i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      console.log("arr: " + arr + "\n");
      console.log(
        "---------if arr[j-1]: " +
        arr[j - 1] +
        " " +
        "> arr[j]:  " +
        arr[j] +
        " ------------------------"
      );
      if (arr[j - 1] > arr[j]) {
        console.log("\n\n\n\narr: " + arr);
        let temp = arr[j - 1];
        console.log("temp to store higher number: " + arr[j - 1]);
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
/* Quick Sort is a divide and conquer algorithm. 
It creates two empty arrays to hold elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays. 
There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array */
/* document.getElementById("javaScript").innerHTML = quickSort([
  3,
  0,
  2,
  5,
  -1,
  4,
  1
]); */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let newArray = [];
  let pivot = arr.pop(); //gets last number of array in this case one
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
    console.log("pivot: " + pivot + " right: " + right + " " + "left: " + left);
  }
  return newArray.concat(quickSort(left), pivot, quickSort(right));
}

//document.getElementById("javaScript").innerHTML = isPrime(11117);

function isPrime(number) {
  let divisor = 2;

  while (number > divisor) {
    if (number % divisor === 0) {
      return number + " " + "is not prime";
    }
    else {
      divisor++;
    }
  }
  return number + " " + "is prime!!!";
}

/* There's a staircase with N steps, and you can climb 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
///////////n=4   self notes: f(4) = f(3)+ f(2)    f(n) = f(n-1) + f(n-2)
1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2 
///////////n=3
1,1,1
1,2
2,1
///////////n=2
1,1
2
///////////n=1
1
*/
document.getElementById("javaScript").innerHTML = staircase(4);
function staircase(n) {
  if (n <= 1) {
    return 1;
  }
  return staircase(n - 1) + staircase(n - 2);
}
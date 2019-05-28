//Examining the Document Object//

//will get the below from the DOM as we are selecting//
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);

/* console.log(document.forms);
console.log(document.form[0]) */

console.log(document.getElementById("javaScript"));
let headerOne = document.getElementById("javaScript");
headerOne.textContent = "Hello";
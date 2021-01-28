document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
document.querySelector('#divide').addEventListener('click', divide);
document.querySelector('#multiply').addEventListener('click', multiply);

function add(){
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    let total = num1 + num2;

    document.querySelector("#result").innerText = total;
    document.querySelector('#num1').value = "";
    document.querySelector('#num2').value = "";
 }

 function subtract(){
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    let total = num1 - num2;

    document.querySelector("#result").innerText = total;
    document.querySelector('#num1').value = "";
    document.querySelector('#num2').value = "";
 }

 function divide(){
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    let total = num1 / num2;

    document.querySelector("#result").innerText = total;
    document.querySelector('#num1').value = "";
    document.querySelector('#num2').value = "";
 }

 function multiply(){
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    let total = num1 * num2;

    document.querySelector("#result").innerText = total;
    document.querySelector('#num1').value = "";
    document.querySelector('#num2').value = "";
 }


let groc1;
let groc2;
let groc3;
function calculate() {
    groc1 = parseFloat(document.getElementById('groc1').value);
    groc1 = parseFloat(document.getElementById('groc2').value);
    groc3 = parseFloat(document.getElementById('groc3').value);
 let total = groc1 + groc1 + groc3;

 document.getElementById('result').innerText = `Total Amount is: ${total}`;

}
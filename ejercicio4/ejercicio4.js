const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const btoncalcular = document.getElementById("btoncalcular");
const resul = document.getElementById("resul");

function Calculadora(){

    const valorPeso = parseFloat(peso.value);
    const valorAltura = parseFloat(altura.value);

    const imc = valorPeso / (valorAltura * valorAltura);
    resul.innerText = "Su IMC es: " + imc.toFixed(2);

   window.alert("Su IMC calculado es: " + imc.toFixed(2));

}
btoncalcular.addEventListener("click", Calculadora);
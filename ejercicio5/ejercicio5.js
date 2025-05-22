const amedida = document.getElementById("amedida");
const bmedida = document.getElementById("bmedida");
const cmedida = document.getElementById("cmedida");
const btncalcu = document.getElementById("btncalcu");
const resultado = document.getElementById("resultado");

function Calculararea(){
  const a = parseFloat(amedida.value);
  const b = parseFloat(bmedida.value);
  const c = parseFloat(cmedida.value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || c > a || a <= 0 || b <= 0 || c < 0) {
    window.alert("Ingrese valores validos, A debe ser mayor que C.");
    return;
  }

  const areaTriangulo = ((a - c) * b) / 2;
  const areaRectangulo = b * c;
  const areaTotal = areaTriangulo + areaRectangulo;

  resultado.innerText = "El area total del terreno es: " + areaTotal.toFixed(2) + " m²";
}

btncalcu.addEventListener("click", Calculararea);
// Obtener los elementos del formulario
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const correo = document.getElementById("correo");
const btnEnviar = document.getElementById("btnenviar");
const mensaje = document.getElementById("mensaje");

// Función para validar los datos
function validarDatos() {
    const nombreVal = nombre.value.trim();
    const apellidoVal = apellido.value.trim();
    const edadVal = parseInt(edad.value);
    const alturaVal = parseFloat(altura.value);
    const correoVal = correo.value.trim();

    let errores = [];

    if (!nombreVal || nombreVal.length > 50) {
        errores.push("El nombre no puede estar vacio ni tener mas de 50 caracteres.");
    }

    if (!apellidoVal || apellidoVal.length > 50) {
        errores.push("El apellido no puede estar vacio ni tener mas de 50 caracteres.");
    }

    if (isNaN(edadVal) || edadVal < 0) {
        errores.push("La edad no puede ser negativa ni vacia.");
    } else if (edadVal < 18) {
        errores.push("Debe ser mayor de edad (18 años o mas).");
    }

    if (isNaN(alturaVal) || alturaVal < 0 || alturaVal > 230) {
        errores.push("La altura debe estar entre 0 y 230 cm.");
    }

   
    if (!correoVal || !correoVal.includes("@")) {
        errores.push("El correo no puede estar vacio y debe contener '@'.");
    }
     mensaje.className = "";
     
    if (errores.length > 0) {
        mensaje.classList.add("error");
        mensaje.innerText = "Errores:\n" + errores.join("\n");
    } else {
        mensaje.classList.add("ok");
        mensaje.innerText = "Todos los datos son validos";
}
}
btnEnviar.addEventListener("click", validarDatos);

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

//funcion para anadir un nombre a la lista
function agregarAmigo() {
    //obtiene el valor del imput
    let nombreInput = document.querySelector('#amigo').value;
    if (nombreInput === '') {
        alert('Por favor introduce un nombre en el campo');
        return;
    } else {
        listaAmigos.push(nombreInput.value);
        limpiarCaja();
        cambiaTextoLista();
    }
}

function limpiarCaja() {
    
}
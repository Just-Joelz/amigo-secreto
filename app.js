// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

//funcion para anadir un nombre a la lista
function agregarAmigo() {
    //obtiene el valor del input
    let nombreInput = document.querySelector('#amigo');
    if (nombreInput === '') {
        alert('Por favor introduce un nombre en el campo');
        return;
    } else {
        listaAmigos.push(nombreInput.value);
        limpiarCaja();
        actualizarLista();
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista() {
    let listaAmigosUl = document.querySelector('#listaAmigos');
    listaAmigosUl.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = listaAmigos[i];
        listaAmigosUl.appendChild(li);
        
    }
}

function sortearAmigo() {


    if (listaAmigos) {
        
    } else {
        
    }
}
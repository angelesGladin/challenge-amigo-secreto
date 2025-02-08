let amigos = [];
let indiceAleatorio = 0;
let amigoSorteado = 0;

function agregarAmigo() {
    //capturo nombre y limpio texto inicial (trimp)
    let capturaNombreAmigo = document.getElementById('amigo').value.trim();

    //validar la entrada
    if (capturaNombreAmigo === "") {
        alert('Por favor, inserte un nombre');
        return;
    }
    //agregar nombre al array 
    amigos.push(capturaNombreAmigo);
    
    //limpia el campo
    document.getElementById('amigo').value = "";

   //mostrar lista agregada
    mostrarListaAmigos();
}

function mostrarListaAmigos(){
    //llamar la lista con su id
    let lista = document.getElementById("listaAmigos");
    
    //limpia la lista existente para que no se duplique 
    lista.innerHTML = ""

    //iteración con el arreglo y creación de lista
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }

}
function sortearAmigo() {
    //validar que la lista no este vacia 
    if(amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    
    //genera nombre aleatorio
    indiceAleatorio = Math.floor(Math.random()*amigos.length);
    
    //obtener nombre sorteado
    amigoSorteado = amigos[indiceAleatorio]; 
    console.log(amigoSorteado);
   
    //mostrar resultado 
    document.getElementById("sortear").disabled = false
    document.getElementById("amigoMostrado").innerHTML = `El amigo seleccionado: ${amigoSorteado}`;
   
    //mostrar botón de reinicio
    document.getElementById("reiniciar").style.display = "block";
}


function reiniciarSorteo() {
    //reiniciar variables y lista de amigos 
    amigos = [];
    indiceAleatorio = 0;
    amigoSorteado = 0;

    //limpiar lista y el resultado
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("sortear").disabled = true;
    document.getElementById("amigoMostrado").disabled = true;

    //ocultar botón de inicio
    document.getElementById("reiniciar").style.display = "none";

}

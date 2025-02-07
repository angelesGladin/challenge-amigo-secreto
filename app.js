let amigos = [];
let indiceAleatorio = 0;
let amigoSorteado = 0;


function agregarAmigo() {
    //capturo nombre y limpio texto inicil (trimp)
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

    mostrarListaAmigos()
    console.log(amigos);
}

function mostrarListaAmigos(){
    //llamar la lista con su id
    let lista = document.getElementById("listaAmigos");
    //limpia la lista existente par que no se duplique 
    lista.innerHTML = ""

    //iteración con el arreglo y creación de li
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }

}
    function sortearAmigo() {
        //validar que la lista no esste vacia 
        if(amigos.length === 0) {
            alert('No hay amigos en la lista para sortear.');
            return;
        }
        //genera nombre aleatorio
        indiceAleatorio = Math.floor(Math.random()*amigos.length++);
        //obtener nombre
        amigoSorteado = amigos[indiceAleatorio]; 
        //mostrar resultado 
        document.getElementById("sortear").innerHTML = `El amigo seleccionado: <strong>${amigoSorteado}</strong>`;
    }
    
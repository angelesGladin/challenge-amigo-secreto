let amigos = [];

function agregarAmigo() {
    //capturo nombre y limpio texto inicil (trimp)
    let capturaNombreAmigo = document.getElementById('amigo', String).value.trim();

    //validar la entrada
    if (capturaNombreAmigo === "") {
        alert('Por favor, inserte un nombre');
        return;
    }
    //agregar nombre al array 
    amigos.push(capturaNombreAmigo);
    //limpia el campo
    document.getElementById('amigo', String).value = "";


    console.log(amigos);
}

function mostrarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }

}
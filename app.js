let amigos = [];

function agregarAmigo() {
    //capturo nombre y limpio texto inicail (trimp)
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


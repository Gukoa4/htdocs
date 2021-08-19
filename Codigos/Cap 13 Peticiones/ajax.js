const peticion = new XMLHttpRequest();

/*peticion.addEventListener("readystatechange", () => {
    console.log(peticion.readyState)
    console.log(peticion.response)
})*/

/*peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState == 4 && peticion.status ==200) {
        console.log(peticion.response)
    }
})*///esto se hacia antes, dos validaciones para manejar los distintos status de respuesta del servidor

peticion.addEventListener("load", () => {
    let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Lo siento no se encontro el resultado";

    console.log(respuesta)

})


peticion.open("GET", "informacion.txt");

peticion.send();


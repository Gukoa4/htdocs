//const peticion = new XMLHttpRequest();
//verificar el navegador
let peticion;
if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");



/*peticion.addEventListener("readystatechange", () => {
    console.log(peticion.readyState)
    console.log(peticion.response)
})*/

/*peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState == 4 && peticion.status ==200) {
        console.log(peticion.response)
    }
})*///esto se hacia antes, dos validaciones para manejar los distintos status de respuesta del servidor
/*
peticion.addEventListener("load", () => {
    let respuesta;
    if (peticion.status == 200) {
        respuesta = peticion.response;
        console.log(JSON.parse(respuesta).nombre)
    }
    else {
        respuesta = "Lo siento no se encontro el resultado";

        console.log(respuesta)
    }
})*/
peticion.addEventListener("load", () => {
    let respuesta;
    if (peticion.status == 201||peticion.status == 200) {
        respuesta = peticion.response;
        console.log(JSON.parse(respuesta));
    }
    else {
        respuesta = "Lo siento no se encontro el resultado";

        console.log(respuesta)
    }
})


peticion.open("POST", "https://reqres.in/api/users");

peticion.setRequestHeader("Content-type","application/json;charset=UTF8")

peticion.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}));


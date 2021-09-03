//"use strict";


/*
const fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());*/

const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n)
    return n
}

const actualizarHora = () => {
    const fecha = new Date();
    let hora = addZeros(fecha.getHours());
    let min = addZeros(fecha.getMinutes());
    let seg = addZeros(fecha.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;

}

actualizarHora()

setInterval(actualizarHora, 1000)

const bdark = document.querySelector("#bdark");
const body = document.querySelector("body");



bdark.addEventListener("click", e => {
    body.classList.toggle('darkmode');
    store(body.classList.contains("darkmode"))
    console.log(body.classList.contains("darkmode"))

})

function load() {
    let modoOscuro = localStorage.getItem("darkmode");
    if (!modoOscuro) { store("false") }
    else if (modoOscuro == "true") { body.classList.add('darkmode') }
}

function store(value) {
    localStorage.setItem("darkmode", value);
}

load();
/*
const geoloaction = navigator.geolocation;

const position = (pos) => {
    console.log(pos)
}
const err = () => console.log(err);

const option = {
    maximumAge: 0,
    timeout: 3000,
    enableHighAccuracy: true
}

geoloaction.getCurrentPosition(position, err, option);
*/
/*
#####################File reader#################################
*/

const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e) => {
    //e.target.files    
    //console.log(archivo.files[0]);
    //leerArchivo(archivo.files[0]);
    //leerArchivos(archivo.files);
    leerImagen(archivo.files)
});

/*
const leerArchivo = (archivo)=>{
    const reader = new FileReader();
    reader.readAsText(archivo);
    reader.addEventListener("load",(evt)=>console.log(JSON.parse(evt.currentTarget.result)));
}*/
/*
const leerArchivos = (archivos) => {
    for (let i = 0; i < archivos.length; i++) {
        const archivo = archivos[i];
        const reader = new FileReader();
        reader.readAsText(archivo);
        reader.addEventListener("load", (evt) => console.log(JSON.parse(evt.currentTarget.result)));

    }
}*/
/*const leerArchivos = (archivos) => {
    for (const archivo of archivos) {
        const reader = new FileReader();
        reader.readAsText(archivo);
        reader.addEventListener("load", (evt) => console.log(JSON.parse(evt.currentTarget.result)));        
    }
}*/
/*
const leerImagen = (Imagenes) => {
    let resultado = document.querySelector(".resultado");
    
    for (const imagen of Imagenes) {
        const reader = new FileReader();
        reader.readAsDataURL(imagen);
        reader.addEventListener("load", (evt) => {
            let newImg =`<img src='${evt.currentTarget.result}'>`;
            resultado.innerHTML += newImg;            
        });             
    }
}*/

/*
const leerImagen = (Imagenes) => {
    let resultado = document.querySelector(".resultado");
    
    for (const imagen of Imagenes) {
        const reader = new FileReader();
        reader.readAsDataURL(imagen);
        reader.addEventListener("load", (evt) => {
            let newImg = document.createElement("img");
            console.log(newImg);
            newImg.src =evt.currentTarget.result;
            console.log(newImg); 
            resultado.appendChild(newImg);      
        });             
    }
}
*/
//refactorizar para usar async await

const leerImagen = (Imagenes) => {
    //let resultado = document.querySelector(".resultado");
    const zona = document.querySelector(".zona");
    const fragmentos = document.createDocumentFragment();
   
    for (const imagen of Imagenes) {
        const reader = new FileReader();
        reader.readAsDataURL(imagen);
        reader.addEventListener("load", (evt) => {
            let newImg = document.createElement("img");            
            newImg.src = evt.currentTarget.result;
            //resultado.appendChild(newImg);
           fragmentos.appendChild(newImg);       
        });             
    }
    setTimeout(()=>{
        zona.appendChild(fragmentos)
    },1000)
}


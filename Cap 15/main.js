"use strict";


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

const addZeros = n =>{
    if (n.toString().length < 2 ) return "0".concat(n)
    return n
}

const actualizarHora = ()=>{
    const fecha = new Date();
    let hora = addZeros(fecha.getHours());
    let min = addZeros(fecha.getMinutes());
    let seg = addZeros(fecha.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
    
}

actualizarHora()

setInterval(actualizarHora,1000)

const bdark = document.querySelector("#bdark");
const body = document.querySelector ("body");



bdark.addEventListener("click", e=>{
    body.classList.toggle('darkmode');
    store(body.classList.contains("darkmode"))
    console.log(body.classList.contains("darkmode"))
    
})

function load (){
    let modoOscuro = localStorage.getItem("darkmode");
    if (!modoOscuro){store("false")}
    else if (modoOscuro == "true"){body.classList.add('darkmode')}
}

function store(value) {
    localStorage.setItem("darkmode",value);
}

load();
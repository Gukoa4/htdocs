"use strict"

const btnEnviar = document.getElementById("btn-enviar");
const mensaje = document.querySelector(".ingresar");
const contenedor = document.querySelector(".contenedor");


btnEnviar.addEventListener("click",(evt)=>{
    evt.preventDefault();
    
    console.log(mensaje.value);
    let caja = document.createElement("DIV");
    caja.classList.add("cliente");
    caja.classList.add("mensaje");
    let contenido = document.createElement("blockquote");
    contenido.textContent=mensaje.value;
    caja.appendChild(contenido)
    contenedor.appendChild(caja);
    mensaje.value = "";
})
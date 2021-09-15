"use strict";

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service.js");
}
const btnEnviar = document.getElementById("btn-enviar");
const mensaje = document.querySelector(".ingresar");
const contenedor = document.querySelector(".contenedor");

btnEnviar.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let caja = document.createElement("DIV");
  caja.classList.add("cliente");
  caja.classList.add("mensaje");
  let contenido = document.createElement("blockquote");
  contenido.textContent = mensaje.value;
  caja.appendChild(contenido);
  contenedor.appendChild(caja);
  await navigator.serviceWorker.ready.then((res) => {
    res.active.postMessage(mensaje.value);
  });
  mensaje.value = "";
});
navigator.serviceWorker.addEventListener("message", (e) => {
  console.log("Se recibio el siguente mensaje del servidor: ", e.data);
  let caja = document.createElement("DIV");
  caja.classList.add("servidor");
  caja.classList.add("mensaje");
  let contenido = document.createElement("blockquote");
  contenido.textContent = e.data;
  caja.appendChild(contenido);
  contenedor.appendChild(caja);
});


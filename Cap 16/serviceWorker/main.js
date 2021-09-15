"use strict"

if (navigator.serviceWorker){
    navigator.serviceWorker.register("service.js")
}

navigator.serviceWorker.ready.then(res => res.active.postMessage("Hola como estas"))

navigator.serviceWorker.addEventListener("message",(e)=>{
    console.log("Se recibio el siguente mensaje del servidor: ", e.data)
})
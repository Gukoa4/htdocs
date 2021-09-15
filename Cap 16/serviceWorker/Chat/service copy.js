let channel = new MessageChannel();

self.addEventListener("install",(evt)=>{
    console.log ("instalando service worker")
})

self.addEventListener("activate",()=>{
    console.log("El service worker esta activado")
})

self.addEventListener("error",()=>{
    console.log("Ha ocurrido un error")
})

self.addEventListener("fetch",()=>{
    console.log("service worker interceptando peticion")
})

self.addEventListener("message",(e)=>{
    console.log("Se recibio el siguente mensage del navegador: ", e.data)
    channel.port1.onmessage = e.source;
    e.source.postMessage( [channel.port2])
})
"use strict"

const zona = document.querySelector(".zona");
const texturas = document.querySelector(".texturas").children;
zona.addEventListener("dragover",(evt)=>{
    evt.preventDefault();
})
zona.addEventListener("drop",(evt)=>{
    let estilo = evt.dataTransfer.getData("textura");
    zona.style.background = estilo;
    zona.style.backgroundRepeat = `no-repeat`;
    zona.style.backgroundSize = `cover`;
    zona.style.backgroundPosition = `center`;
    
})
const transferirTextura = (evt,estilo) =>{
    evt.dataTransfer.setData("textura",estilo)
}

Array.from(texturas).forEach(textura =>{
     textura.addEventListener("dragstart",(evt)=>{
        transferirTextura(evt,getComputedStyle(textura).backgroundImage)       
    });
    console.log(getComputedStyle(textura).backgroundImage);
    });


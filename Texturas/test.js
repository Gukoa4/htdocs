"use strict"

const zona = document.querySelector(".zona");
zona.addEventListener("dragover",(evt)=>{
    evt.preventDefault();
})
zona.addEventListener("drop",(evt)=>{
    let n = evt.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.png")`;
    zona.style.background = `url("textura${n}.png")`;
    zona.style.backgroundRepeat = `no-repeat`;
    zona.style.backgroundSize = `cover`;
})

for (let i =1; i<document.querySelector(".texturas").children.length+1;i++){
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(evt)=>{
        transferirTextura(i,evt)
       
    })
}

const transferirTextura = (n,evt) =>{
    evt.dataTransfer.setData("textura",n)
}
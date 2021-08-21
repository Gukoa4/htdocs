"use strict";

const circulo = document.querySelector(".circulo");
const cuadrado = document.querySelector(".cuadrado");

circulo.addEventListener("dragstart",(evt)=>{
    evt.dataTransfer.setData("text-plain",evt.target.className);
    //console.log(evt.dataTransfer.getData("text-plain"))
});
//circulo.addEventListener("drag",()=>console.log("drag"));
circulo.addEventListener("dragend",()=>console.log("dragend"));

cuadrado.addEventListener("dragenter",()=>console.log("dragenter"));
cuadrado.addEventListener("dragover",(evt)=>{
    evt.preventDefault();
    console.log("dragover")
});
cuadrado.addEventListener("drop",(evt)=>{
    console.log(evt.dataTransfer.getData("text-plain"));
    console.log("drop")});
cuadrado.addEventListener("dragleave",()=>console.log("dragleave"));
"use strict";

const circulo = document.querySelector(".circulo");
let cuadrado = document.querySelector(".cuadrado");

circulo.addEventListener("dragstart",()=>console.log(1));
circulo.addEventListener("drag",()=>console.log(2));
circulo.addEventListener("dragend",()=>console.log(3));
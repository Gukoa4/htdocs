"use strict";

const cajas = document.querySelectorAll(".caja");

//nos devuelve un arreglo de entradas

const verifyVisibility = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting)
      console.log("se esta viendo la caja: ", entry.target.textContent);
  }
};

const options = {
    //root toma una referencia por defecto es viewport
    //rootMargin nos da el margen antes (positivo) o despues (negativo) del elemento
    //tresholds se activa segun el porcentaje del objeto visible y se puede pasar como array para que se active varias veces con distintos porcentajes por ejemplo al deslizar sobre un contenedor ira cambiando de colores
}

const observer = new IntersectionObserver(verifyVisibility);

for (const caja of cajas) {
  observer.observe(caja);
}

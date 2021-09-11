"use strict";
/*
const ejecutarBucle = () => {
  console.log("Saludando desde el worker");
  
};
*/
//addEventListener("message", ejecutarBucle);
addEventListener("message", e=>{
  if (e.data.length >4){
    console.log(e.data);
    postMessage("aceptado");
  };
});
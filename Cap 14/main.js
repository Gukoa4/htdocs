/*
let objeto = {
    "propiedad":"datos"
}

console.table(objeto)

let variable = ["gato","perro","canario"];

console.log(variable);
console.log(variable.sort());

class Objeto {
    constructor(){};
    hablar(){
        console.log("hola")
    }
}
const objeto = new Objeto();

//objeto.__proto__.hablar = ()=>{ ######De esta manera se modifica el original######
objeto.hablar = ()=>{ //##asi solo se modifica por fuera
    console.log("modificado y heredado")
}

// ahora vamos a heredar la funcion sobreescrita

let arr =[];
arr.__proto__ = objeto; //asi copio con la ultima modificacion

arr.hablar();

arr.__proto__ = objeto.__proto__; //asi copio el original

arr.hablar();*/

//"use strict";

/*let nombre = "Giuliano";
console.log(nombre);

const obj = {};
Object.defineProperty(obj,'nombre',{value:"Pedro",writeable:false});*/

/*
const obj = {nombre: "Luca"};
Object.preventExtensions(obj);

obj.apellido = "Baldini";
console.table(obj);

function hablar (texto,texto){
    console.log(texto)
}
*/

//Funciones flecha
/*
const saludar = () =>{
    console.log ("hola");
    console.log("¿Como estas?")
}
saludar ()
*//*
const saludar = function(res){return nombre =res;}
const saludar =res=> nombre = res;
resultado = saludar()
console.log(resultado);*/


/*
//creamos una clausura
const cambiarTamaño = tamaño =>{
    return ()=> {
        document.querySelector(".texto").style.fontSize = `${tamaño}px`;
    }
}
px12 = cambiarTamaño(12);
px14 = cambiarTamaño(14);
px16 = cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click",px12);
document.querySelector(".t14").addEventListener("click",px14);
document.querySelector(".t16").addEventListener("click",px16);

*/
"Use strict"
let valor1 = "valor 1";
let valor2 = "valor 2";
let valor3 = "valor 3";

console.log(valor1,valor2,valor3)

let array = ["valor1","valor2","valor3"]

console.log (array);
console.log (...array)
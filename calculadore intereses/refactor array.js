"use strict";
let monto = document.querySelector(".monto");
let consultar = document.getElementById("btnConsultar");
//array con los valores para despues pasarlos por child
//TNA

//let cuotas = [1,1//1.0942,2//1.1288,3//1.2384,6//1.5216,12//1,1//1.0965,2//1.057,1,1.3234,12];
//interes,cuota
// if cuota == zeta cargar mensaje a acordar cliente con naranja valor 1 y

/**
 * @description Obtener los montos y cuotas
 * @returns Un objeto con el valor total, cuota y monto de interes
 */
const calculo = (monto, cuotas) => {
  let calculos = [];
  for (let i = 0; i < cuotas.length; i++) {
    let cantCuotas = cuotas[i][0];
    const interesPorcentual = cuotas[i][1];
    const importe = financial(monto * interesPorcentual);
    // if cuota == zeta cargar mensaje a acordar cliente con naranja valor 1 y titulo zeta
    if (isNaN(cantCuotas)) {
      cantCuotas = 1;
    }
    const cuota = financial(importe / cantCuotas);
    const interes = financial(importe - monto);

    //calculos.push(cantCuotas, importe, interesPorcentual, cuota, interes);
    calculos.push([importe, cuota, interes]);
  }
  return calculos;
};

function dotcomma(n) {
  n = n.replace(".", "");
  n = n.replace("$", "");
  n = n.replace(",", ".");
  return n;
}

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

monto.addEventListener("input", (evt) => {
  evt.preventDefault();
  let cuotas = [
    [1, 1],
    [2, 1.0942],
    [3, 1.1288],
    [6, 1.2384],
    [12, 1.5216],
    [1, 1],
    [2, 1.0965],
    ["zeta", 1.057],
    [12, 1.3234],
  ];
  let numero = financial(dotcomma(monto.value));
  if (isNaN(numero)) {
    numero = 0;
  }
  let arrCuotas = calculo(numero, cuotas);
  const arra = document.querySelectorAll(".cuota");
  let j = 0;
  for (let i = 0; i < arra.length; i += 6, j++) {
    arra[i].innerHTML = `Valor final <br>`;
    arra[i + 1].innerHTML = `$${arrCuotas[j][0]} <br>`;
    arra[i + 1].style.fontWeight = "500";

    arra[i + 2].innerHTML = "<br> Valor cuota";
    arra[i + 3].innerHTML = "$" + arrCuotas[j][1];
    arra[i + 3].style.fontWeight = "500";

    arra[i + 4].innerHTML = "<br>Interes";
    arra[i + 5].innerHTML = "+ $" + arrCuotas[j][2];
    arra[i + 5].style.fontWeight = "500";
  }
});

const clip = () => {};

consultar.addEventListener("click", (evt) => {
  evt.preventDefault();
});

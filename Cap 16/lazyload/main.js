"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;

const crearPublicaciones = (name, content) => {
  const container = document.createElement("DIV");
  const comentarios = document.createElement("DIV");
  const nombre = document.createElement("H3");
  const contenido = document.createElement("P");
  const btnComentario = document.createElement("INPUT");
  const btnEnviar = document.createElement("INPUT");
  container.classList.add("publicacion");
  comentarios.classList.add("comentarios");
  btnComentario.classList.add("comentario");
  btnEnviar.classList.add("enviar");

  btnEnviar.type = "submit";
  btnComentario.setAttribute("placeholder", "Introduce un comentario");
  nombre.textContent = name;
  contenido.textContent = content;

  comentarios.appendChild(btnComentario);
  comentarios.appendChild(btnEnviar);

  container.appendChild(nombre);
  container.appendChild(contenido);
  container.appendChild(comentarios);

  return container;
};

const cargarMasPublicaciones = (entry) => {
  if (entry[0].isIntersecting) cargarPublicaciones(4);
};

const observer = new IntersectionObserver(cargarMasPublicaciones);

const cargarPublicaciones = async (num) => {
  const request = await fetch("datos.txt");
  const content = await request.json();
  const arr = await content.content;

  const documentFragment = document.createDocumentFragment();
  for (let i = 0; i < num; i++) {
    if (arr[contador] != undefined) {
      let newPublicacion = crearPublicaciones(
        arr[contador].nombre,
        arr[contador].contenido
      );
      documentFragment.appendChild(newPublicacion);
      contador++;
      if (i == num - 1) observer.observe(newPublicacion);
    }else {
        let final = document.createElement("H3");
        final.textContent = "No hay mas publicaciones";
        documentFragment.appendChild(final);
        break;        
    }
  }
  publicaciones.appendChild(documentFragment);
};

cargarPublicaciones(5);

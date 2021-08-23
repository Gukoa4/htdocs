
const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e) => {
    leerImagen(archivo.files)
});

const leerImagen = (Imagenes) => {
  let resultado = document.querySelector(".resultado");
  var zona = document.querySelector(".zona");
  var fragmentos = document.createDocumentFragment();
 
  for (const imagen of Imagenes) {
      const reader = new FileReader();
      reader.readAsDataURL(imagen);
      reader.addEventListener("loadend", (evt) => {
          let newImg = document.createElement("img");            
          newImg.src = evt.currentTarget.result;
          //resultado.appendChild(newImg);
         fragmentos.appendChild(newImg);       
      });             
  }
  //zona.appendChild(fragmentos);
  setTimeout(()=>{zona.appendChild(fragmentos);},1000)
}

const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e) => {
  leerImagen(archivo.files)
});

const leerImagen = (Imagenes) => {
    let resultado = document.querySelector(".resultado");
    
    for (const imagen of Imagenes) {
        const reader = new FileReader();
        reader.readAsDataURL(imagen);
        reader.addEventListener("load", (evt) => {
            let newImg = document.createElement("img");
            console.log(newImg);
            newImg.src =evt.currentTarget.result;
            console.log(newImg); 
            resultado.appendChild(newImg);      
        });             
    }
}
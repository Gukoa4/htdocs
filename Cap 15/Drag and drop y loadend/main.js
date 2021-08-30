//"use strict"

const zona = document.querySelector (".zona");


zona.addEventListener("dragover",evt=>{
    
    evt.preventDefault();
    changeStyle(evt.srcElement,"#666");    
})
zona.addEventListener("dragleave",evt=>{    
    evt.preventDefault();
    changeStyle(evt.srcElement,"#bbb");    
})

zona.addEventListener("drop",evt=>{    
    evt.preventDefault();
    
    //cargarArchivo(evt.dataTransfer.files[0]);
    //cargarArchivos(evt.dataTransfer.files);
    cargarVideo(evt.dataTransfer.files[0]);
    zona.style.border=`4px solid #ccc`;
})

const changeStyle = (obj,color) =>{
    obj.style.color=color;
    obj.style.border=`4px dashed ${color}`;

}
/*
const cargarArchivo = archivo => {
    const reader = new FileReader();
    reader.readAsText(archivo);
    reader.addEventListener("load",evt=>{
        let url = URL.createObjectURL(archivo);
        let img = document.createElement("IMG");
        img.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(img);
    })
}
const cargarArchivos = archivos => {
    for (const archivo of archivos){
    const reader = new FileReader();
    reader.readAsText(archivo);
    reader.addEventListener("load",evt=>{
        let url = URL.createObjectURL(archivo);
        let img = document.createElement("IMG");
        img.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(img);
    })
}
}
*/
const cargarVideo = ar => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("progress", evt=>{
        //console.log(ar.size)
        //console.log(evt.loaded)
        //console.log((evt.loaded/ar.size)*100+"%")
        let carga = Math.round((evt.loaded/ar.size)*100);
        zona.textContent =`${carga}%`;
        document.querySelector(".barra-de-carga").style.padding = `76px 20px`;
        document.querySelector(".barra-de-carga").style.width = `${carga}%`;
    })
    reader.addEventListener("load",e=>{
        let url = URL.createObjectURL(ar);
        let videoCargado = document.createElement("VIDEO");
        videoCargado.setAttribute("src",url);
        videoCargado.setAttribute("controls",true);
        document.querySelector(".resultado").appendChild(videoCargado);        
    })
    reader.addEventListener("loadend",evt=>{    
        zona.style.border=`4px solid #000`;
        zona.style.background=`#4f9`;
        zona.textContent =`Carga completa`;
    
    })
}
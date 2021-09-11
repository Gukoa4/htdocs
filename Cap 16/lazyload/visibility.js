"use strict";
addEventListener("visibilitychange",(e)=>{
    console.log("se cambio de pestaña");
    console.log(e.target.visibilityState);
    if (e.target.visibilityState== "visible"){
        document.write("abandonaste la pagina");
    }else {
        alert("volviste");
    }
})
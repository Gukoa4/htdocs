"use strict"

if (!Notification){
    console.log("no esta disponible")
}

Notification.requestPermission(()=>{
    if (Notification.permission =="granted"){
        new Notification("Buen dia");
    }
})
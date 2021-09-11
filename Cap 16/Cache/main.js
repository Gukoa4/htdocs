"use strict"

caches.open("archivos-estaticos").then(cache =>{
    console.log(cache);
    cache.add("index.html");
});
caches.open("archivos-estaticos-2").then(cache =>{
    console.log(cache);
    cache.addAll(["index.html","main.js","estilos.css","Cap 16/Memoization/index.html"]);
});

caches.open("archivos-estaticos-2").then(cache =>{
    cache.match("index.html").then(res => {
        console.log("\n","Matches",res)
    });
});

caches.open("archivos-estaticos-3").then(cache =>{
    fetch("index.html").then(res =>{
        cache.put("index.html",res)
    })
});

caches.open("archivos-estaticos").then(cache =>{
    console.log("borrando...");
    cache.delete("index.html");
});
aches.open("archivos-estaticos").then(cache =>{
  
    cache.keys().then(res=>{
        console.log("key",res)
    })
});
const bdark = document.querySelector("#bdark");
const body = document.querySelector ("body");



bdark.addEventListener("click", e=>{
    body.classList.toggle('darkmode');
    store(body.classList.contains("darkmode"))
    console.log(body.classList.contains("darkmode"))
    
})

function load (){
    let modoOscuro = localStorage.getItem("darkmode");
    if (!modoOscuro){store("false")}
    else if (modoOscuro == "true"){body.classList.add('darkmode')}
}

function store(value) {
    localStorage.setItem("darkmode",value);
}

load();
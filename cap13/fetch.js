/*fetch("https://reqres.in/api/users?page=2")
    .then(res => res.text())
    .then(res => console.log(res))

fetch("https://reqres.in/api/users?page=2")
    .then(res => res.json())
    .then(res => console.log(res))

//se puede crear con un json
fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
        "name": "morpheus",
        "job": "leader"
    }),
    headers: { "Content-type": "application/json" }
})
    .then(res => res.json())
    .then(res => console.log(res))

//se puede crear con tildes   
    
fetch("https://reqres.in/api/users", {
    method: "POST",
    body: `{"name": "morpheus", "job": "leader"}`,
    headers: { "Content-type": "application/json" }
})
    .then(res => res.json())
    .then(res => console.log(res))

//se puede pasar por parametro los headers

let headers ={method: "POST",
body: `{"name": "morpheus", "job": "leader"}`,
headers: { "Content-type": "application/json" }
}

    fetch("https://reqres.in/api/users", headers
    )
    .then(res => res.json())
    .then(res => console.log(res))*/

    let imagen = document.querySelector(".imagen");

    fetch("LogoLB.png")
    .then(res => res.blob())
   .then(img => imagen.src = URL.createObjectURL(img))
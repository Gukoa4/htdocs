/*fetch("informacion.txt")
    .then(res => res.json())
    .then(res => console.log(res))*/

//axios ahora una linea
/*
axios("informacion.txt")
    .then(res => console.log(res))*/

axios.post("https://reqres.in/api/users", {
    "nombre": "Giuliano",
    "apellido": "Baldini"
})
    .then(res => console.log(res))

axios("https://reqres.in/api/users", {
    method: "post",
    data:{"nombre": "Giuliano",
          "apellido": "Baldini"}
})
    .then(res => console.log(res))
const getInfo = async () => {
    let aprobados =document.querySelector(".num-aprobados");
    let desaprobados =document.querySelector(".num-desaprobados");
    
    try {
        let resultado = await axios("aprobsados.txt");
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    } catch (error) {
        aprobados.textContent =`Error al obtener informacion`;
        desaprobados.textContent =`Error al obtener informacion`;
    }
}

document.getElementById("getInfo").addEventListener("click", getInfo)
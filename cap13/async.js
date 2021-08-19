const getName = async () => {

    try {
        let peticion = await fetch("informacion.txt");
        let resultado = await peticion.json();
        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
}

getName()
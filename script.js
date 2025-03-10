let list = []

function add(){
    console.log("Boton presionado");
    let input = obtenerMedianteID('input').value;
    if (input == ""){
        alert("No se admiten valores vacios");
        return;
    }else{
        list.push(input);
        mostrarValor(list);
    }
}

function obtenerMedianteID(id){
    return document.getElementById(id);
}

function mostrarValor(list){
    for(let i = 0; i < list.length; i++){
        let con = document.createElement("li");
        con.textContent = list[i];
        let div = obtenerMedianteID('contenido');
        div.appendChild(con);
    }
}
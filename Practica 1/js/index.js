let edad = prompt( "Introdusca su edad:")

if(edad > 18 && edad <= 100){
    alert("El usuario es mayor de edad")
}else if(edad < 18 && edad >= 1){
    alert("El usuario es menor de edad")
}else if(edad == 18){
    alert("EL usuario tiene 18")
}else if(edad > 100){
    alert("El usuario es centenario")
}else if(edad <= 0){
    alert("Edad invalida")
}


/*las valiables se declaran con var y let, cont.
let nombre = prompt ("ingrese contrasenia")
let contrasenia = 12345

if (nombre == 12345) {
    document.write ("bienvenido")
}
else {
    alert ("contrasenia erronea")
} 
 */

let Numero1 = prompt("ingresa un numero mayor a 1000")

if (Numero1 >1000) {
    alert("NUMERO CORRECTO")
}
else {
    alert("NUMERO INCORRECTO")
}

let texto1 = prompt("ingresar tu saludo")

if (texto1 == "hola"){
    alert("Bienvenido")
}
else {
    alert("texto incorrecto")
}

let IngresarNumero = prompt("ingresar un numero entre 10 y 50")

if ((IngresarNumero <50 )&&(IngresarNumero >10)){
alert ("correcto el numero es mayor a 10 y menor a 50")
}

else {
    alert ("numero incorrecto")
}
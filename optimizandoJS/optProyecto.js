
let Nombre = prompt("Ingrese su Nombre")
alert ("Bienvenido "+ " " + Nombre + " acontinuacion podes escoger tu combo")
let aderezo = prompt('¿queres la hamburguesa con o sin aderezo? "C" con, "S" sin, ')
let hamburguesa
let Hamburguesa1= "hamburguesa con aderezo"
let hamburguesa2="hamburguesa sin aderezo"
let precio2 = 150
let precio = 200
const descuento1 = precio - 20
const descuento2 = precio2 - 20
let pago = prompt("Si abonas en efectivo tenes un 20% de descuento, Escribi como desear abonar con la palabra  'efectivo o con tarjeta' seleccionar la forma de pago")

localStorage.setItem ("hamburguesa1", Hamburguesa1);
localStorage.setItem ('hamburguesa2', hamburguesa2);

if (aderezo == "C" ){
hamburguesa = Hamburguesa1
alert(`Eligiste tu hamburguesa con ` + Hamburguesa1)
console.log("Elegiste tu hamburguesa con  " + Hamburguesa1)

}
if (pago = "efectivo"){
alert("elegiste pagar con efectivo tu combo cuenta  "  + descuento1)

}
else if (pago = "tarjeta"){
alert("elegiste abonar con tarjeta tu combo cuenta  " + precio)
}
else {
alert ("Ingreso incorrecto")
}






if (aderezo ="S") {
hamburguesa = hamburguesa2
alert(`Eligiste tu hamburguesa con ` + hamburguesa2)
console.log("Elegiste tu hamburguesa con  " + hamburguesa2)
}
if (pago = "efectivo"){
alert("elegiste pagar con efectivo tu combo cuenta  "  + descuento2)

}
else if (pago = "tarjeta"){
alert("elegiste abonar con tarjeta tu combo cuenta  " + precio2)
}
else {
alert("Ingreso incorrecto")
}


const combo = ["carne","mostaza", "pan"];{

        this.carne= "carne";
        this.mostaza = "mostaza";
        this.pan = "pan";
console.log(combo)
        }


        const combo2 = ["carne", "sinMostaza", "pan" ];{
this.carne = "carne" ;
this.sinMostaza = "sinMostaza";
this.pan = "pan" ;
console.log(combo2)
        }


var form = document.getElementsByTagName ('form')
form.addEventListener('submit', validarForm)
function validarForm (e) {
        e.preventDefoult();
        console.log ("formulario enviado")
}






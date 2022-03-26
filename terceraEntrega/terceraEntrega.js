

let Nombre = prompt("Ingrese su Nombre");
alert('Bienvenido  '+ Nombre + ' Elegi el combo que mas te guste');
let aderezo = prompt('¿queres la hamburguesa con o sin aderezo? "C" con, "S" sin, ');
let hamburguesa

let precio2 = 150
let precio = 200
const descuento1 = precio - 20
const descuento2 = precio2 - 20
let pago = prompt("Si abonas en efectivo tenes un 20% de descuento, Escribi como desear abonar con la palabra  'efectivo o con tarjeta' seleccionar la forma de pago")


swal({
        title: "GRACIAS POR TU COMPRA",
        text: "tu pedido estara en unos minutos!",
        icon: "success",
        button: "PERFECTO",
});
const Hamburguesa1 =[{
        carne: 'carne',
        aderezo: 'sin aderezo',
        precio: 200
}
];
function getDatos() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(Hamburguesa1);

        }, 6000);
        });
}
getDatos().then((Hamburguesa1) => console.log(Hamburguesa1))
const hamburguesa2 =[{
        carne: 'carne',
        aderezo: 'con aderezo',
        precio: 220
}
];
 function getDatos() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(hamburguesa2);

        }, 6000);
        });
}
getDatos().then((hamburguesa2) => console.log(hamburguesa2))


localStorage.setItem ("hamburguesa1", Hamburguesa1);
localStorage.setItem ('hamburguesa2', hamburguesa2)
localStorage.setItem ('combo1', combo)
localStorage.setItem ('combo2', combo2)

if (aderezo == "C" ){
hamburguesa = Hamburguesa1
alert(`Eligiste tu hamburguesa con ` + Hamburguesa1)
console.log("Elegiste tu hamburguesa con  " + Hamburguesa1)

}
if (pago == "efectivo"){
alert("elegiste pagar con efectivo tu combo cuenta  "  + descuento1)

}
else if (pago == "tarjeta"){
alert("elegiste abonar con tarjeta tu combo cuenta  " + precio)
}
else {
alert("Ingreso incorrecto")
}






if (aderezo =="S") {
hamburguesa = hamburguesa2
alert(`Eligiste tu hamburguesa con ` + hamburguesa2)
console.log("Elegiste tu hamburguesa con  " + hamburguesa2)
}
if (pago == "efectivo"){
alert("elegiste pagar con efectivo tu combo cuenta  "  + descuento2)

}
else if (pago == "tarjeta"){
swal("elegiste abonar con tarjeta tu combo cuenta  " + precio2)
}
else {
alert("Ingreso incorrecto")
}


var combo = ["carne","mostaza", "pan"];{

        this.carne= "carne";
        this.mostaza = "mostaza";
        this.pan = "pan";
console.log(combo)
        }


        var combo2 = ["carne", "sinMostaza", "pan" ];{
this.carne = "carne" ;
this.sinMostaza = "sinMostaza";
this.pan = "pan" ;
console.log(combo2)
        }




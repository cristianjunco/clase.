let Nombre = prompt("Ingrese su Nombre");
alert('Bienvenido  '+ Nombre + ' Elegi el combo que mas te guste');
let aderezo = prompt('¿queres la hamburguesa con o sin aderezo? "C" con, "S" sin, ');

swal({
    title: "GRACIAS POR TU COMPRA",
    text: "tu pedido estara en unos minutos!",
    icon: "success",
    button: "PERFECTO",
});

if (aderezo == "C" ){
    hamburguesa = Hamburguesa1
    alert(`Eligiste tu hamburguesa con ` + Hamburguesa1)
    console.log("Elegiste tu hamburguesa con  " + Hamburguesa1)
    
    }

    
if (aderezo =="S") {
    hamburguesa = hamburguesa2
    alert(`Eligiste tu hamburguesa con ` + hamburguesa2)
    console.log("Elegiste tu hamburguesa con  " + hamburguesa2)
    }
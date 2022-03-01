<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="hamburguesa.png" type="image/x-icon">
    <link rel="stylesheet" href="CoderBurges.css">
    <title>CoderBurguer</title>
</head>
<body>
    <div>
        <center><h1>Bienvenidos a CoderBurguer</h1>
                 <h2>Su pedido esta siendo preparado</h2>
        </center>

    </div>
    
</body>
<script src="clase3.js"></script>
</html>


CODIGO JAVASCRIP

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

 if ((aderezo == "C" )){
     hamburguesa = Hamburguesa1
    alert (`Eligiste con aderezos`)
    console.log('elegiste agregar aderezos')
   }
   if (pago == "efectivo"){
    alert ("elegiste pagar con efectivo tu combo cuenta  "  + descuento1)

}
else (pago == "tarjeta");{
        alert("elegiste abonar con tarjeta tu combo cuenta  " + precio)
    }

 if ((aderezo =="S")) {
     hamburguesa= hamburguesa2
    
     alert ('Elegiste sin aderezos')
     console.log('elegiste no agregar aderezos')
       }
     if (pago == "efectivo"){
           alert ("elegiste pagar con efectivo tu combo cuenta  "  + descuento2)
      
       }
       else (pago == "tarjeta");{
               alert("elegiste abonar con tarjeta tu combo cuenta  " + precio2)
                     }
      

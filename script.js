
    let precio;
    let juego;
    let opcion;
    let confirmarCompra;
    let sumaTotal = 0;
    let cantidadJuegos = 0;
  
   
   do{
    opcion = parseInt(prompt("SELECCIONE EL JUEGO QUE QUIERA COMPRAR:\n 1. ELDEN RING \n 2. FAR CRY 6 \n 3. DAYING LIGHT 2 \n 4. FIFA 2020 \n 0. Hasta luego. "));
    switch (opcion) {

        case 0: 
            alert("GRACIAS POR SU VISITA");
            break;

        case 1:

            juego = "ELDEN RING";
            precio = 8200;
            confirmarCompra = prompt("DESEA COMPRAR " + juego + " S/N");
            
            while(confirmarCompra!= 'S' && confirmarCompra!= 'N'){
                alert("USTED INGRESO UN CARACTER INVALIDO");
                confirmarCompra = prompt("DESEA COMPRAR " + juego + " S/N");
            }
            if(confirmarCompra == 'S'){
                alert("USTED A COMPRADO "+ juego +" POR $" + precio);
                sumaTotal = sumaTotal + precio;
                cantidadJuegos++;
            }
            break;

        case 2:
            juego = "FAR CRY 6";
            precio = 4400;
            confirmarCompra = prompt("DESEA COMPRAR " + juego + " S/N");
            
            while(confirmarCompra!= 'S' && confirmarCompra!= 'N'){
                alert("USTED INGRESO UN CARACTER INVALIDO");
                confirmarCompra = prompt("DESEA COMPRAR " + juego + " S/N");
            }
            if(confirmarCompra == 'S'){
                alert("USTED A COMPRADO "+ juego +" POR $" + precio);
                sumaTotal = sumaTotal + precio;
                cantidadJuegos++;
            }
            break;

        case 3:
            juego = "DYING LIGHT 2";
            precio = 5800;
            confirmarCompra = prompt("DESEA COMPRAR " + juego + " S/N");
            
            while(confirmarCompra!= 'S' && confirmarCompra!= 'N'){
                alert("USTED INGRESO UN CARACTER INVALIDO");
                confirmarCompra = prompt("DESEA COMPRAR " + juego + " S/N");
            }
            if(confirmarCompra == 'S'){
                alert("USTED A COMPRADO "+ juego +" POR $" + precio);
                sumaTotal = sumaTotal + precio;
                cantidadJuegos++;
            }
            break;

        case 4:
            juego = "FIFA 2022";
            precio = 3150;
            confirmarCompra = prompt("DESEA COMPRAR " + juego + " S/N");
            
            while(confirmarCompra!= 'S' && confirmarCompra!= 'N'){
                alert("USTED INGRESO UN CARACTER INVALIDO");
                confirmarCompra = prompt("DESEA COMPRAR " + juego + " S/N");
            }
            if(confirmarCompra == 'S'){
                alert("USTED A COMPRADO "+ juego +" POR $" + precio);
                sumaTotal = sumaTotal + precio;
                cantidadJuegos++;
            }
            break;
        default:
            alert("LA OPCION NO ESTA EN EL CATALOGO.");
        }
    } while(opcion !=0);

    if(cantidadJuegos >= 1){
         alert("USTED HA COMPRADO " + cantidadJuegos +" JUEGOS. EL COSTO TOTAL DE LA COMPRA ES DE $" + sumaTotal);
    }


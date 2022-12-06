alert("Ingrese la opcion del producto que desea llevar, si ya no quiere llevar mas productos ingrese ESC");

let seleccionarProductos = Number(prompt("\n‣Buzo [1] $6000 \n‣Remera [2] $3000 \n‣Jean [3] $7000 \n‣Zapatillas [4] $10000"));
let seleccionarCantidad;
let total = 0;


const calcularPrecio = (cant, precio) => {
    return cant * precio
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("El producto que acaba de seleccionar es Buzo, indique la cantidad"));
            total += calcularPrecio(seleccionarCantidad, 6000);
            break;
        case 2:
            seleccionarCantidad = Number(prompt("El producto que acaba de seleccionar es Remera, indique la cantidad"));
            total += calcularPrecio(seleccionarCantidad, 3000)
            break;
        case 3:
            seleccionarCantidad = Number(prompt("El producto que acaba de seleccionar es Jean, indique la cantidad"));
            total += calcularPrecio(seleccionarCantidad, 7000);
            break;
        case 4:
            seleccionarCantidad = Number(prompt("El producto que acaba de seleccionar es Zapatillas, indique la cantidad"));
            total += calcularPrecio(seleccionarCantidad, 10000);
            break;

        default:
            break;
    }
    seleccionarProductos = Number(prompt("\n-1 Buzo $6000 \n-2 Remera $3000 \n-3 Jean $7000 \n-4 Zapatillas $10000"))
}

alert("El total de la compra es de: $" + total)

/*100*(1-0.15)*/

const validarEnvioGratuito = () => {
    if (total >= 10000) {
        alert("Tenes envio gratis gracias a que tu compra es mayor a $10.000");
    } else {
        total += 1000;
        alert("El costo de envio es de 1000, el total es: $" + total);
    }
}

validarEnvioGratuito()

const validarMetodoDePagoyMostrarTotal = () => {
    let metodo = prompt("Ingrese el metodo de pago, Tarjeta(T) o Efectivo(E)");
    if (metodo == "Tarjeta" || metodo == "T") {
        total *= 1.1;
        alert("El total es de: $" + total);
    } else if (metodo == "Efectivo" || metodo == "E") {
    let descuentoEfectivo = total*0.15;
        total = total*(1-0.15);
        alert("Tenes un descuento de: $" + descuentoEfectivo + " :) " + "\nEl total es de: $" + total);
    }


}

validarMetodoDePagoyMostrarTotal()
class Producto {
    constructor(nombre, precio) {
        this.nombre =  nombre;
        this.precio = precio;
    }
}

class Cajero {
    constructor(productos, total) {
        this.productos = productos;
        this.total = total;
    }

    validarEnvioGratuito = () => {
        if (this.total >= 10000) {
            alert("Tenes envio gratis gracias a que tu compra es mayor a $10.000");
        } else {
            this.total += 1000;
            alert("El costo de envio es de 1000, el total es: $" + this.total);
        }
    }

    validarMetodoDePagoyMostrarTotal = () => {
        let metodo = prompt("Ingrese el metodo de pago, Tarjeta(T) o Efectivo(E)");
        if (metodo == "Tarjeta" || metodo == "T") {
            this.total *= 1.1;
            alert("El total es de: $" + this.total);
        } else if (metodo == "Efectivo" || metodo == "E") {
        let descuentoEfectivo = this.total * 0.15;
            this.total = this.total * (1-0.15);
            alert("Tenes un descuento de: $" + descuentoEfectivo + " :) " + "\nEl total es de: $" + this.total);
        }
    }

    pedirProductosCalcularTotal = () => {
        let productoIngresado;
        let candidadIngresada;
        let listadoProductos = "Ingrese un codigo de producto. Para terminar con la compra ingrese 0\n" + this.listarProductos();

        productoIngresado = this.pedirProducto(listadoProductos, this.productos.length);

        while (productoIngresado != 0) {
            let producto = this.productos[productoIngresado - 1];
            candidadIngresada = Number(prompt("El producto que acaba de seleccionar es " + producto.nombre + ", indique la cantidad"));
            this.total += this.calcularPrecio(candidadIngresada, producto.precio);

            productoIngresado = this.pedirProducto(listadoProductos, this.productos.length);
        }
    }

    calcularPrecio = (cant, precio) => {
        return cant * precio
    }

    listarProductos = () => {
        let textoProductos = "";
        for(let posicion = 0; posicion < this.productos.length; posicion++)
        {
            textoProductos += "‣" + this.productos[posicion].nombre + " [" + (posicion + 1) + "] $" + this.productos[posicion].precio + "\n";
        }
        return textoProductos;
    }

    pedirProducto = (listadoProductos, maximoCodigoProducto) => {
        let productoIngresado;
        
        productoIngresado = Number(prompt(listadoProductos));

        while(productoIngresado > maximoCodigoProducto || productoIngresado < 0) {
            alert("El código de producto ingresado es inválido. Debe ser entre 1 y " + maximoCodigoProducto);
            productoIngresado = Number(prompt(listadoProductos));
        }

        return productoIngresado;
    }
}

let productoRemera = new Producto("Remera", 3000);
let productoBuzo = new Producto("Buzo", 6000);
let productoPantalon = new Producto("Pantalon", 7000);
let productoZapatillas = new Producto("Zapatillas", 10000);
let productoAnillo = new Producto("Anillo", 250);

let productos = [productoRemera, productoBuzo, productoPantalon, productoZapatillas, productoAnillo];

let cajero = new Cajero(productos, 0);
cajero.pedirProductosCalcularTotal();
cajero.validarEnvioGratuito();
cajero.validarMetodoDePagoyMostrarTotal();
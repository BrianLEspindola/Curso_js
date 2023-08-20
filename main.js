//VENTA DE JOYERIA

//Molde creador de productos

class Producto {
       constructor(nombre, precio, imagen, descripcion, cantidad) {
         this.nombre = nombre;
         this.precio = precio;
         this.imagen = imagen;
         this.descripcion = descripcion;
         this.vendido = false;
       }
    
       vender() {
         this.vendido = true;
       }
     }
//productos en el mercado

 const producto1 = new Producto(
   "cadenita corazon",
   200,
   "img src=../imagenes/cadenita_corazon.JPG",
   "collar de oro 18k",
   2,
    );

 const producto2 = new Producto(
   "cadenita sol y luna",
   200,
   "img src=../imagenes/cadenitas_s_l.JPG",
   "collar de oro 18k",
   2,
 );

 const producto3 = new Producto(
    "cadenita oro",
    200,
    "src=../imagenes/cadenita_enchapada.JPG",
    "cadenita enchapada en oro",
    2,
 );

 const producto4 = new Producto(
    "aritos",
    200,
    "src=../imagenes/aritos_enchapados.JPG",
    "aritos de oro 18k",
    2,
 );


//array con productos

const arrayProducto = [producto1, producto2, producto3, producto4,];

 let nombre = prompt("Ingrese el nombre del producto  consultar");

while (nombre != "ESC") {
  let producto;
  for (const item of productos) {
    if (item.nombre === nombre) {
      producto = item;
    }
  }

  if (producto) {
    let mensaje = `
      Nombre: ${producto.nombre}
      Imagen: ${producto.imagen}
      Precio: $${producto.precio}
      Descripcion: ${producto.descripcion}
      Cantidad: ${producto.cantidad}
    `;

    alert(mensaje);
  } else {
    alert("El producto no se encuentra disponible");
  }

  nombre = prompt("Ingrese el nombre del producto a  consultar");
}

vender()
    if (this.cantidad === 0) {
      console.log("No quedan productos");
    } else {
      this.cantidad -= 1;
    }
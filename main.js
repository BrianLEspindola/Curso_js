//VENTA DE JOYERIA
class Producto {
       constructor(nombre, precio, imagen, descripcion) {
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

 const producto1 = new Producto(
   "cadenita corazon",
   200,
   "img src=../imagenes/cadenita_corazon.JPG"";
   "collar de oro 18k",
    );

 const producto2 = new Producto(
   "cadenita sol y luna",
   200,
   "img src=../imagenes/cadenitas_s_l.JPG",
   "collar de oro 18k",
 );

 const producto3 = new Producto(
    "cadenita oro",
    200,
    "src=../imagenes/cadenita_enchapada.JPG",
    "cadenita enchapada en oro",
 );

 const producto4 = new Producto(
    "aritos",
    200,
    "src=../imagenes/aritos_enchapados.JPG",
    "aritos de oro 18k",
 );

 const producto5 = new Producto(
    "cadena trensada",
    150,
    "src=../imagenes/cadena_trensada.JPG",
    "Cadena trensada de plata 18cm",
 );

 const producto6 = new Producto(
    "aritos de oro",
    300,
    "src=../imagenes/aros_oro.JPG",
    "pulcera de oro 18k medida 7cm",
 );

 const producto7 = new Producto(
    "cadenita oro",
    300,
    "src=../imagenes/cadenita_enchapada.JPG",
    "pulcera de oro 18k medida 7cm",
 );



 vender() {
    if (this.cantidad === 0) {
      console.log("No quedan productos");
    } else {
      this.cantidad -= 1;
    }
  }

  console.log(producto1);
 producto1.vender();
 console.log(producto1);
    
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
  }
  //Productos en el mercado
  
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
  
  
  //Array con productos
  
  const arrayProducto = [producto1, producto2, producto3, producto4,];
  
  //Declaro funcion para consultar prodcutos
  function consultarProductos(){
  
    let nombre = prompt("Ingrese el nombre del producto  consultar, para salir ingresar ESC");
  
    while (nombre != "ESC") {
      const producto = arrayProducto.find(item => item.nombre === nombre);
    
      if (producto) {
        console.log(
        `
        Nombre: ${producto.nombre}
        Imagen: ${producto.imagen}
        Precio: $${producto.precio}
        Descripcion: ${producto.descripcion}
        Cantidad: ${producto.cantidad}
        `
        );
        break
      } else{
        console.log(`Producto no disponible`);
        break
      }
    }
  }
  
  consultarProductos()
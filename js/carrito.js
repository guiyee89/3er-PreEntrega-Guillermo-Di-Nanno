let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProducto = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector(".carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const total = document.querySelector("#total")
const comprar = document.querySelector("#carrito-acciones-comprar")

function cargarCarrito() {

  carritoProducto.innerHTML = "";
  

  if (productosEnCarrito && productosEnCarrito.length > 0) {

    carritoVacio.classList.add("disabled");
    carritoProducto.classList.remove("disabled");
    carritoAcciones.classList.remove("disabled");
    carritoComprado.classList.add("disabled");

    carritoProducto.innerHTML = "";

    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
              <img  src="${producto.imagen}" alt="${producto.titulo}" />
              <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
              </div>

              <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
              </div>

              <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>${producto.precio}</p>
              </div>

              <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
              </div>

              <button class="carrito-producto-eliminar" id="${producto.id}">
                <i class="bi bi-trash-fill"></i>
              </button>
        `;

      carritoProducto.append(div);
    });
  } else {
    carritoVacio.classList.remove("disabled");
    carritoProducto.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.add("disabled");
    carritoAcciones.innerHTML = "";
  }

  actualizarBotonesEliminar();
  actualizarTotal()
}

cargarCarrito();

function actualizarBotonesEliminar() {
  /* botones para agregar objetos al carrito */
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarProducto);
  });
}

function eliminarProducto(e) {
  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex((producto) => producto.id === idBoton);

  productosEnCarrito.splice(index, 1);
  cargarCarrito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  console.log(productosEnCarrito)
}


botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

   productosEnCarrito.length= 0;
   localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
   cargarCarrito()
}

function actualizarTotal(){
  const totalTotal = productosEnCarrito.reduce((acc, products) => acc + (products.precio * products.cantidad), 0);
  total.innerText = `$${totalTotal}`;
}

comprar.addEventListener("click", buyProducts);
function buyProducts() {

   productosEnCarrito.length= 0;
   localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
   
    carritoVacio.classList.add("disabled");
    carritoProducto.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.remove("disabled");

    carritoProducto.innerHTML = "";
    carritoAcciones.innerHTML = "";
}




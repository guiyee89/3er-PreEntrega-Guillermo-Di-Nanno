const productos = [
    {
        id: "viaje-01",
        titulo: "Sydney",
        imagen: "../image/sydney0.jpg",
        categoria: {
            nombre: "Destinos de viaje",
            id: "viajes"
        },
        precio: 1200,
    },
    {
        id: "viaje-02",
        titulo: "Melbourne",
        imagen: "../image/melbourne1.jpg",
        categoria: {
            nombre: "Destinos de viaje",
            id: "viajes"
        },
        precio: 1100,
    },
    {
        id: "viaje-03",
        titulo: "Brisbane",
        imagen: "../image/brisbane0.jpg",
        categoria: {
            nombre: "Destinos de viaje",
            id: "viajes"
        },
        precio: 1000,
    },
    {
        id: "viaje-04",
        titulo: "Gold Coast",
        imagen: "../image/goldcoast0.jpg",
        categoria: {
            nombre: "Destinos de viaje",
            id: "viajes"
        },
        precio: 950,
    },
    {
        id: "servicio-01",
        titulo: "Seguro de salud",
        imagen: "../image/servicio1.jpg",
        categoria: {
            nombre: "Servicios",
            id: "servicios"
        },
        precio: 150,
    },
    {
        id: "servicio-02",
        titulo: "Seguro de equipaje",
        imagen: "../image/servicio2.jpg",
        categoria: {
            nombre: "Servicios",
            id: "servicios"
        },
        precio: 50,
    },
    {
        id: "servicio-03",
        titulo: "Planificacion de viaje",
        imagen: "../image/servicio3.jpg",
        categoria: {
            nombre: "Servicios",
            id: "servicios"
        },
        precio: 40,
    },
    {
        id: "servicio-04",
        titulo: "Atencion al cliente 24/7",
        imagen: "../image/servicio4.jpg",
        categoria: {
            nombre: "Servicios",
            id: "servicios"
        },
        precio: 35,
    },
]

const contenedorProductos = document.querySelector("#container-productos");
const botonCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = ""; /* para que se muestre vacio, y luego solo ejecute las categorias en cada boton */

    productosElegidos.forEach(producto => {

        const div = document.createElement("div"); /* toda esta construccion es para emular el contenido de productos del html hacia el JS */
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar()
    
}

cargarProductos(productos);

botonCategoria.forEach(boton => {       /* creamos funcion de categorias de los botones para que cada click nos traiga los productos por categoria y id del html*/
    boton.addEventListener("click", (e) => {     
        
        botonCategoria.forEach(boton => boton.classList.remove("active"))     /* por cada click, se cambia la solapa active */

        e.currentTarget.classList.add("active")  

        if(e.currentTarget.id != "todos") {    /* "todos" por el id que dimos en html */
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id) ;
        cargarProductos(productosBoton);

        }else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos);
        }
    })
});


function actualizarBotonesAgregar(){  /* botones para agregar objetos al carrito */
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarCantidad()
} else {
    productosEnCarrito = [];
}



function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {  // .some nos devuelve true or false.. /* necesitamos identificar si X producto ya esta en el carrito, si es asi, sumar cantidad del mismo producto en vez de agregar 2 veces el mismo objeto entero */
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton); /* buscamos el index de la propiedad que queremos sumar */
        productosEnCarrito[index].cantidad++;                                            /* y le sumamos en cada eleccion */
    } else {
        productoAgregado.cantidad = 1;  /* creamos la propiedad Cantidad en el array dado q no existia */
        productosEnCarrito.push(productoAgregado)
    }
    actualizarCantidad()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarCantidad(){
    let nuevoNumero = productosEnCarrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    numerito.innerText = nuevoNumero;

}
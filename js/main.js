const productos = [
    {
        id: "viaje-01",
        title: "Sydney",
        img: "../image/sydney0.jpg",
        price: 1200,
        cat: {
            name: "Traveling options",
            id: "trips"
        },
        
    },
    {
        id: "viaje-02",
        title: "Melbourne",
        img: "../image/melbourne1.jpg",
        price: 1100,
        cat: {
            name: "Traveling options",
            id: "trips"
        },  
    },
    {
        id: "viaje-03",
        title: "Brisbane",
        img: "../image/brisbane0.jpg",
        price: 1000,
        cat: {
            name: "Traveling options",
            id: "trips"
        },
    },
    {
        id: "viaje-04",
        title: "Gold Coast",
        img: "../image/goldcoast0.jpg",
        price: 950,
        cat: {
            name: "Traveling options",
            id: "trips"
        },
    },
    {
        id: "servicio-01",
        title: "Healthcare Insurance",
        img: "../image/servicio1.jpg",
        price: 150,
        cat: {
            name: "Services",
            id: "services"
        },
    },
    {
        id: "servicio-02",
        title: "Luggage Insurance",
        img: "../image/servicio2.jpg",
        price: 50,
        cat: {
            name: "Services",
            id: "services"
        },
    },
    {
        id: "servicio-03",
        title: "Plan your trip",
        img: "../image/servicio3.jpg",
        price: 40,
        cat: {
            name: "Services",
            id: "services"
        },
    },
    {
        id: "servicio-04",
        title: "24/7 Customer Service",
        img: "../image/servicio4.jpg",
        price: 35,
        cat: {
            name: "Services",
            id: "services"
        },
    },
]

const containerProducts = document.querySelector("#container-productos");
const buttonSelect = document.querySelectorAll(".boton-categoria");
const title = document.querySelector(".titulo-principal");
let addButton = document.querySelectorAll(".producto-agregar");
const cartNumber = document.querySelector("#numerito");

function addProducts(productSelect){
    
    containerProducts.innerHTML = ""; /* para que se muestre vacio, y luego solo ejecute las categorias en cada boton */

    productSelect.forEach(producto => {

        const div = document.createElement("div"); /* toda esta construccion es para emular el contenido de productos del html hacia el JS */
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.img}" alt="${producto.title}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.title}</h3>
            <p class="producto-precio">$${producto.price}</p>
            <button class="producto-agregar" id="${producto.id}">Add to Cart</button>
        </div>
        `;

        containerProducts.append(div);
    })

    addingButtons()
    
}

addProducts(productos);

buttonSelect.forEach(boton => {       /* creamos funcion de categorias de los botones para que cada click nos traiga los productos por categoria y id del html*/
    boton.addEventListener("click", (e) => {     
        
        buttonSelect.forEach(boton => boton.classList.remove("active"))     /* por cada click, se cambia la solapa active */

        e.currentTarget.classList.add("active")  

        if(e.currentTarget.id != "all") {    /* "todos" por el id que dimos en html */
        const productCat = productos.find(producto => producto.cat.id === e.currentTarget.id);
        title.innerText = productCat.cat.name;
        const buttonProduct = productos.filter(producto => producto.cat.id === e.currentTarget.id) ;
        addProducts(buttonProduct);

        }else {
            title.innerText = "All our products"
            addProducts(productos);
        }
    })
});


function addingButtons(){  /* botones para agregar objetos al carrito */
    addButton = document.querySelectorAll(".producto-agregar");

    addButton.forEach(boton => {
        boton.addEventListener("click", addCart)
    })
}


let cart;

let cartLS = localStorage.getItem("productos-en-carrito");

if(cartLS){
    cart = JSON.parse(cartLS);
    addQuantity()
} else {
    cart = [];
}



function addCart(e){
    const id = e.currentTarget.id;
    const addedProduct = productos.find(producto => producto.id === id)
    


    if(cart.some(producto => producto.id === id)) {  // .some nos devuelve true or false.. /* necesitamos identificar si X producto ya esta en el carrito, si es asi, sumar cantidad del mismo producto en vez de agregar 2 veces el mismo objeto entero */
        const index = cart.findIndex(producto => producto.id === id); /* buscamos el index de la propiedad que queremos sumar */
        cart[index].quantity++;                                            /* y le sumamos en cada eleccion */
    } else {
        addedProduct.quantity = 1;  /* creamos la propiedad Cantidad en el array dado q no existia */
        cart.push(addedProduct)
    }
    addQuantity()

    localStorage.setItem("productos-en-carrito", JSON.stringify(cart))
}

function addQuantity(){
    let num = cart.reduce((acc, prod) => acc + prod.quantity, 0);
    cartNumber.innerText = num;

}
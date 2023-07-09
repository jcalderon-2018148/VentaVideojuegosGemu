class Producto {
    constructor(id, img, nombre, precio, consola){
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.precio = precio;
        this.consola = consola;
    }

    set setId(id) {
        this.id = id;
    }
    get getId() {
        return this.id;
    }

    set setImg(img) {
        this.img = img;
    }
    get getImg() {
        return this.img;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }

    set setPrecio(precio) {
        this.precio = precio;
    }
    get getPrecio() {
        return this.precio;
    }

    set setConsola(consola) {
        this.consola = consola;
    }
    get getConsola() {
        return this.consola;
    }
}

let productos = [new Producto(1, "image/products/marioGolfNS.jpg", "Mario Golf Super Rush Nintendo Switch", 699.00, "NS"),
    new Producto(2, "image/controlPS5.png", "Control PlayStation 5 - negro", 600.00, "PS"),
    new Producto(3, "image/products/caseNSMario.jpg", "Case Power A Running Mario Case", 300.00, "NS"),
    new Producto(4, "image/products/cargadorNSNyko.jpg", "Cable de alimentacion de CA Nyko para Nintendo Switch (Negro)", 250.00, "NS"),
    new Producto(5, "image/products/raniboxSixExtractionPS4.jpg", "Rainbox Six Extraction PlayStation 4", 500.00, "PS"),
    new Producto(6, "image/products/zeldaSkywarSwordNS.jpg", "The Legend of Zelda Skyward Sword HD Nintendo Switch", 699.99, "NS"),
    new Producto(7, "image/products/consolaNSL32gbPalkia.jpg", "Consola Nintendo Switch Lite 32GB Edicion Palkia y Dialga", 2999.00, "NS"),
    new Producto(8, "image/products/controlPowerANSMario.jpg", "Control Power A Power up Mario Controller", 350.00, "NS"),
    new Producto(9, "image/products/gow4PS4.jpg", "God of War PlayStation 4", 200.00, "PS"),
    new Producto(10, "image/products/controlHoriInalambricoNS.jpg", "Control Hori Inalambrico Switch Split Pad Pro Gatillos traseros asignables Azul", 599.00, "NS"),
    new Producto(11, "image/products/camaraGamingHDPS4.jpg", "Camara Gaming HD Sony PlayStation 5 Lentes Duales 1080p Soporte Integrado Blanco/Negro", 550.00, "PS"),
    new Producto(12, "image/products/fifa22XBSX.jpg", "Fifa 22 Xbox Series X", 350.00, "XB"),
    new Producto(13, "image/products/onePieceOdysseyXBSX.jpg", "One Piece Odyssey Xbox series X", 480.00, "XB"),
    new Producto(14, "image/products/f122XBSX.jpg", "F1 22 Xbox Series X", 650.00, "XB"),
    new Producto(15, "image/products/quarryXBSX.jpg", "The Quarry Xbox Series X", 650.00, "XB"),
    new Producto(16, "image/products/xbsxConsola.jpg", "Consola Xbox Series X 1TB Negro (Carbon Black)", 7999.99, "XB"),
    new Producto(17, "image/products/baseCargaIndividualXBSX.jpg", "Base de carga Individual Hori para Control Xbox One Series X/S Negro", 250.00, "XB"),
    new Producto(18, "image/products/controlXBCableUSBC.jpg", "Control Inalambrico Xbox + Cable USB-C para Xbox One Xbox Series X/S Windows 10 Negro", 850.00, "XB"),
    new Producto(19, "image/products/volanteLogitechG29.jpg", "Volante de Carreras Logitech Driving Force G29 Alambrico USB 2.0 para PS3 PS4 PC Negro", 3299.00, "PS"),
    new Producto(20, "image/products/horizonForbiddenWestPS4.jpg", "Horizon Forbidden West PlayStation 4", 650.00, "PS"),
    new Producto(21, "image/products/gotgPS4.jpg", "Marvels Guardians of the Galaxy PlayStation 4", 650.00, "PS"),
    new Producto(22, "image/products/ps5ConsolaBundleDemonSoul.jpg", "Bundle: Consola PS5 + Juego Demon Soul PS5 + Control Inalambrico PS5", 9999.00, "PS"),
    new Producto(23, "image/products/horizonForbiddenWestPS5.jpg", "Horizon Forbidden West Edition PlayStation 5", 819.00, "PS"),
    new Producto(24, "image/products/ratchetClankRiftApartPS5.jpg", "Ratchet and Clank Rift Apart Launch Edition PlayStation 5", 799.00, "PS")
];


// conseguir valor radio
let radioBtns = document.querySelectorAll("input[name='consola']");

// conseguir valor range
let rango = document.getElementById("rangoPrecio");
let etiquetaRango = document.getElementById("tagRango");
rango.oninput = () => {
    etiquetaRango.innerHTML = "Q" + Number.parseFloat(rango.value).toFixed(2);
}
etiquetaRango.innerHTML = "Q" + Number.parseFloat(rango.value).toFixed(2);


// contenedor productos
let contenedor = document.getElementById("contenedorProductos");

let findSelected = () => {
    let selected = document.querySelector("input[name='consola']:checked").value;
    let respuestaRadio = selected;
    console.log(respuestaRadio);
    productosFilter = productos.filter(consola => consola.getConsola == respuestaRadio && consola.getPrecio <= rango.value);

    if (respuestaRadio == "todas") {
        productosFilter = productos.filter(consola => consola.getPrecio <= rango.value);
        if (contenedor.hasChildNodes()) {
            let respuesta = document.getElementById("productos");
            contenedor.removeChild(respuesta);
            llenarArray();
            verificarClick();

        } else {
            llenarArray();
            verificarClick();
        }
        
    }

    if (contenedor.hasChildNodes()) {
        console.log(productosFilter.length);

        let respuesta = document.getElementById("productos");
        contenedor.removeChild(respuesta);
        llenarArray();
        verificarClick();

    } else {
        console.log(productosFilter.length);
        llenarArray();
        verificarClick();

    }
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", findSelected);
});

rango.addEventListener("input", findSelected);

findSelected();


function llenarArray() {
    let div = document.createElement("div");
    div.id = "productos";
    div.setAttribute("style", "grid-template-columns: repeat(4, 1fr); gap: 20px;");
    div.classList.add("card-container");
    contenedor.appendChild(div);

    for (let pr of productosFilter) {
        let producto = document.createElement("div");

        content = `
            <div class = "carta-productos" id="producto${pr.getId}" style="width: 250px; height: 100%;">
                <div class = "producto-img ">   
                    <a href="#"><img class = "card-image" src = ${pr.getImg}></a>
                </div>
                <div class = "linea-separador"> 
                    <svg>
                        <rect x="1" y="1" fill = "none"></rect>
                    </svg>
                </div>
                <div class="d-grid">
                    <p style="width:100%; height:100px; text-align: center;"><a href="#" class="nombre-producto">${pr.getNombre}</a></p>
                    <div class = "linea-separador"> 
                        <svg>
                            <rect x="1" y="1" fill = "none"></rect>
                        </svg>
                    </div>
                    <h5 style="text-align:center;" class ="precio-producto">Q${Number.parseFloat(pr.getPrecio).toFixed(2)}</h5>
                    <button type="button" class="btn btn-outline-dark" id="botonCarrito">Añadir al carrito</button>
                </div>
            </div>
        `
        producto.innerHTML = content;
        div.append(producto);
    }
}





let carrito = [];
let contenedorCarrito = document.getElementById("contenedorCarrito");
const cardContainer = document.querySelector("#carrito");

function verificarClick() {
    const clickBoton = document.querySelectorAll(".btn");
    

    clickBoton.forEach(btn => {
        btn.addEventListener("click", addToCarritoItem);
    })
}



function addToCarritoItem(e) {
    const button = e.target;
    const item = button.closest(".carta-productos");
    const itemTitle = item.querySelector(".nombre-producto").textContent;
    const itemPrice = item.querySelector(".precio-producto").textContent;
    const itemImg = item.querySelector(".card-image").src;
    
    console.log(itemTitle);
    console.log(itemPrice);
    console.log(itemImg);

    const newItem = {
        title: itemTitle,
        precio: Number.parseFloat(itemPrice.replace("Q", '')),
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem);

}

function addItemCarrito(newItem) {
    const inputElement = cardContainer.getElementsByClassName("input-cant");

    for(let i = 0; i < carrito.length; i++) {
        if(carrito[i].title.trim() === newItem.title.trim()){

            carrito[i].cantidad++;

            let inputValue = inputElement[i].value;
            inputValue.value++;

            carritoTotal(); 
            renderCarrito();

            console.log(carrito)
            return null;
        }
    }

    carrito.push(newItem);
    renderCarrito();
}

function renderCarrito() {
    cardContainer.innerHTML = '';
    carrito.map(item => {
        const div1 = document.createElement('div');
        div1.classList.add("carta-productos");
        div1.setAttribute("style", "width: 250px; border: 1px solid lightgray; border-radius: 5%; padding: 20px 20px; box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);");

        const content = `
            <div class = "producto-img ">   
                <a href="#"><img class = "card-image" src = ${item.img}></a>
            </div>
            <div class="d-grid">
                <p style="width:100%; height:100px; text-align: center;"><a href="#" class="producto-carrito">${item.title}</a></p>
                <div class = "linea-separador"> 
                    <svg>
                        <rect x="1" y="1" fill = "none"></rect>
                    </svg>
                </div>
                <h6>Precio unitario: Q${(Number.parseFloat(item.precio).toFixed(2))}</h6>
                <h6>Cantidad: <input type="number" min="1" value=${item.cantidad} style="width: 30px;" class="input-cant"></h6>
                <button type="button" class="btn btn-outline-danger">Eliminar</button>
            </div>
        `;

        div1.innerHTML = content;
        cardContainer.append(div1);

        div1.querySelector(".btn-outline-danger").addEventListener("click", removeItemCarrito);
        div1.querySelector(".input-cant").addEventListener("change", sumaCantidad);
    })

    carritoTotal(); 
}

function carritoTotal() {
    let total = 0;
    const itemCarTotal = document.querySelector(".itemCartTotal");
    carrito.forEach((item) => {
        const precio = item.precio;
        total = total + precio*item.cantidad;
    })
    
    itemCarTotal.innerHTML = `Total: Q${Number.parseFloat(total).toFixed(2)}`;
    addLocalStorage();
}


function removeItemCarrito(e) {
    const buttonDelete = e.target;
    const div1 = buttonDelete.closest(".carta-productos");
    const title = div1.querySelector(".producto-carrito").textContent;

    for(let i = 0; i < carrito.length; i++) {
        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i, 1);
            console.log("ola");
        }
    }

    div1.remove();
    carritoTotal();
}

function sumaCantidad(e) {
    const sumaInput = e.target;
    const div = sumaInput.closest(".carta-productos");
    const title = div.querySelector(".producto-carrito").textContent;
    carrito.forEach(item => {
        if (item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal();
        }
    })
}

function addLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

window.onload = function() {
    const storage = JSON.parse(localStorage.getItem("carrito"));
    if(storage) {
        carrito = storage;
        renderCarrito();
    }
}
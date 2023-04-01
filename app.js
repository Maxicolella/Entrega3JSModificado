import { Producto } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document.getElementById("product-form")

document.addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;

    // Create a new Oject Product
    const producto = new Producto(nombre, precio, cantidad);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (nombre === "" || precio === "" || cantidad === "") {
      ui.mostrarMensaje("Por favor ingrese datos en todos los campos.", "danger");
    }

    // Save Product
    ui.agregarProductos(producto);
    ui.mostrarMensaje("Producto agregado correctamente", "success");
    ui.resetearForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.eliminaProductos(e.target);
  e.preventDefault();
});

obtener_bienvenida();
guardar_bienvenida();

function obtener_bienvenida(){
  if (localStorage.getItem("nombre")){
    let nombre = localStorage.getItem ("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));
    
    console.log(nombre);
    console.log(persona);
 
  } else {
    console.log("No hay nada.")
  }
    
}

function guardar_bienvenida(){
  
  let persona = {
    nombre:   prompt("Ingrese su nombre."),
    apellido:  prompt("Ingrese su apellido."),
    edad: prompt("Ingrese su edad."),
  }  
  
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify (persona));

    document.body.innerHTML = document.body.innerHTML + "<b> Bienvenido " + "</br>" + persona.nombre + " " + persona.apellido 
  

};
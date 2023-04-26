import { Producto } from "./Product.js";
import { UI } from "./UI.js";

// DOM Eventos
document.getElementById("product-form")

document.addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Obteniendo los valos del formulario.
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;

    // Creando un nuevo Objeto.
    const producto = new Producto(nombre, precio, cantidad);

    // Creando una nueva UI instancia
    const ui = new UI();

    // Input User Validation
    if (nombre === "" || precio === "" || cantidad === "") {
      ui.mostrarMensaje("Por favor ingrese datos en todos los campos.", "danger");
    }

    // Guardar productos.
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

// const miBoton = document.getElementById("miBoton")

// miBoton.addEventListener('click', ejecutarFetch)

// function ejecutarFetch(){
  
// const aplicacion = document.querySelector('.containersu')

// const url = 'https://jsonplaceholder.typicode.com/users'

// fetch (url)
//   .then (res => res.json())
//   .then (data => {
//     data.forEach(usuario => {
//       const p = document.createElement('p')
//       p.setAttribute('id', usuario.id)
//       p.innerHTML = usuario.name
//       p.addEventListener('click', function(){
//         window.location.href = `./usuario.html?=id${usuario.id}`
//       })
//       aplicacion.appendChild(p)
//     });
//   })

// .catch (err => console.log(err))

let listado = document.getElementById("listado");

const traerDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      const li = document.createElement("li");
      li.innerHTML = `
          <h3>${publicacion.title}</h3>
          <p>${publicacion.body}</p>
        `;

      listado.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

traerDatos();
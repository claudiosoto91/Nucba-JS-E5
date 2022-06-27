import * as UI from './variables.js';
import { listaPizzas } from './listaPizzas.js';
import { mostrarLista } from './mostrarLista.js';
import { mostrarResultado } from './mostrarResultado.js';
import { mostrarError } from './mostrarError.js';
import { LimpiarHTML } from './limpiarHTML.js';

const Pizzas = [
  {
    id: 0,
    nombre: "Muzzarella",
    ingredientes: ["Muzzarella", "Salsa de tomate"],
    precio: 580,
    url: "./img/pizza-muzza.jpg"
  },

  {
    id: 1,
    nombre: "Especial",
    ingredientes: ["Muzzarella", "Salsa de tomate", "Jamón Cocido"],
    precio: 750,
    url: "./img/pizza-especial.jpg"
  },

  {
    id: 2,
    nombre: "Cuatro Quesos",
    ingredientes: [
      "Muzzarella",
      "Gruyere",
      "Roquefort",
      "Parmesano",
      "Salsa de tomate"
    ],
    precio: 800,
    url: "./img/pizza-4-quesos.jpg"
  },

  {
    id: 3,
    nombre: "Calabresa",
    ingredientes: ["Muzzarella", "Salsa de tomate", "Salame"],
    precio: 780,
    url: "./img/pizza-calabresa.jpg"
  },

  {
    id: 4,
    nombre: "Cebolla",
    ingredientes: ["Muzzarella", "Salsa de tomate", "Cebolla"],
    precio: 700,
    url: "./img/pizza-cebolla.jpg"
  },

  {
    id: 5,
    nombre: "Lechuga",
    ingredientes: ["Muzzarella", "Salsa de tomate", "Lechuga", "Mayonesa"],
    precio: 730,
    url: "./img/pizza-lechuga.jpg"
  }
];

//Cargar en el localStorage
window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('listaPizzas', JSON.stringify(Pizzas));
});

//Traemos de nuevo el Array del LocalStorage 
export const pizzasLocalStorage = JSON.parse(localStorage.getItem("listaPizzas"));

//Llamo a la funcion para mostrar las pizzas
listaPizzas();

//Ver u Ocultar pizzas
UI.btnPizzas.addEventListener('click', mostrarLista);


//Capturando el texto del input
UI.pedirPizza.addEventListener('click', mostrarPizza);
function mostrarPizza(e){

  e.preventDefault();
  
  if ( UI.textoPizza.value === '' ){
    mostrarError('Debe ingresar una Pizza, por favor!');
    return
  }
  const encontrarPizza = pizzasLocalStorage.find(pizza => pizza.nombre.toLowerCase() === UI.textoPizza.value.toLowerCase());
  if ( encontrarPizza === undefined ){
    mostrarError('La pizza no existe!');
  } else{
    LimpiarHTML();
    mostrarResultado(encontrarPizza);
  }
}










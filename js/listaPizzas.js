import * as UI from './variables.js';
import { pizzasLocalStorage } from './app.js';

//Mostrar todas las pizzas en pantalla
export function listaPizzas () {
      pizzasLocalStorage.map(pizza => {
  
      const divListaPizza = document.createElement('div');
      divListaPizza.classList.add('listaPizza');
  
      const divImgPizza = document.createElement('div');
      divImgPizza.classList.add('img-pizza');
      divImgPizza.innerHTML = `<img src='${pizza.url}' alt='imagen pizza'>`;
  
      const divContenido = document.createElement('div');
      divContenido.classList.add('contenido');
      const parrafoNombre = document.createElement('p');
      parrafoNombre.textContent = pizza.nombre;
      const parrafoIngredientes = document.createElement('p');
      parrafoIngredientes.textContent = pizza.ingredientes;
      const parrafoPrecio = document.createElement('p');
      parrafoPrecio.textContent = `$${pizza.precio}`;
  
      divContenido.appendChild(parrafoNombre);
      divContenido.appendChild(parrafoIngredientes);
      divContenido.appendChild(parrafoPrecio);
  
      divListaPizza.appendChild(divImgPizza);
      divListaPizza.appendChild(divContenido);
  
      UI.pizzas.appendChild(divListaPizza);
  
    });
  }
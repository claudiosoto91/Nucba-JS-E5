
import * as UI from './variables.js';

//Mostrar la pizza elegida en pantalla
export function mostrarResultado(pizzaElegida){
  
    const divListaPizza = document.createElement('div');
    divListaPizza.classList.add('listaPizza');

    const divImgPizza = document.createElement('div');
    divImgPizza.classList.add('img-pizza');
    divImgPizza.innerHTML = `<img src='${pizzaElegida.url}' alt='imagen pizza'>`;

    const divContenido = document.createElement('div');
    divContenido.classList.add('contenido');
    const parrafoNombre = document.createElement('p');
    parrafoNombre.textContent = pizzaElegida.nombre;
    const parrafoIngredientes = document.createElement('p');
    parrafoIngredientes.textContent = pizzaElegida.ingredientes;
    const parrafoPrecio = document.createElement('p');
    parrafoPrecio.textContent = `$${pizzaElegida.precio}`;

    divContenido.appendChild(parrafoNombre);
    divContenido.appendChild(parrafoIngredientes);
    divContenido.appendChild(parrafoPrecio);

    divListaPizza.appendChild(divImgPizza);
    divListaPizza.appendChild(divContenido);

    UI.bloqueResultado.appendChild(divListaPizza);
}
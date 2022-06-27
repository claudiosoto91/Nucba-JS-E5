import * as UI from './variables.js';
let click = 1;
export function mostrarLista(){
    if ( click === 1 ){
   
      UI.mostrarOcultar.style.display = '';
      click++;
    } else {
        UI.mostrarOcultar.style.display = 'none';
        click = 1;
    }
  }
import * as UI from './variables.js';

//Se muestra en pantalla que el input está vacio
export function mostrarError(mensaje){
    const existeError = document.querySelector('.error');
    if ( !existeError ){
      const parrafoError = document.createElement('parrafo')
      parrafoError.classList.add('error');
      parrafoError.textContent = mensaje;
      UI.formulario.insertAdjacentElement("beforebegin", parrafoError);
      setTimeout(()=>{
        parrafoError.remove();
      },3000);
  
    }
  
  }
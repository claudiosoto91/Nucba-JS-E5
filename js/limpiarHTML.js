
import * as UI from './variables.js';

//Limpiar la pantalla para seguir mostrando resultados
export function LimpiarHTML(){
    while( UI.bloqueResultado.firstChild ){
      UI.bloqueResultado.removeChild( UI.bloqueResultado.firstChild );
    }
  }
  
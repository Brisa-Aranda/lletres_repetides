
// Exercici 2
// Al bucle, si la lletra és una vocal imprimeix a la consola:
//  ‘He trobat la VOCAL: __’. 
//  Sinó, imprimeix: ‘He trobat la CONSONANT: __’.
// Si trobes un número, mostra per pantalla: ‘Els noms de persones 
//  contenen el número: __

var nombre = 'bri7sa';

function caracteres() {
  for (var letra of nombre) {
    if (letra === 'a' ||
      letra === 'e' ||
      letra === 'i' ||
      letra === 'o' ||
      letra === 'u') {
         console.log("He encontrado la vocal: " + letra);
    } else {
        if(letra === 'b' || letra === 'c' || letra === 'd' || letra === 'f' || letra === 'g' ||
        letra === 'h' || letra === 'j' || letra === 'k' || letra === 'l' || letra === 'm' ||
        letra === 'n' || letra === 'ñ' || letra === 'p' || letra === 'q' || letra === 'r' ||
        letra === 's' || letra === 't' || letra === 'w' || letra === 'x' || letra === 'y' ||
        letra === 'z'){
          console.log("He encontrado la consonante: " + letra);
        } else{
          console.log("Los nombres de personas no contienen el número: " + letra);
        }
    }
  }
}
caracteres();
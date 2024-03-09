let numeroAleatorio = Math.random()*9;
let numeroEncontrar = Math.floor(numeroAleatorio + 1);
console.log ("El numero a encontrar es: " + numeroEncontrar);

const USUARIO = prompt("Ingrese su usuario");
const USUARIO_ALEATORIO = Math.random()*8900;
const USUARIO_INVITADO = Math.floor(USUARIO_ALEATORIO + 1000);

if (USUARIO === " ") {
    alert ("¡Hola " + USUARIO_INVITADO + ",  Bienvenido a El Juego De La Coincidencia!");
} else if (USUARIO === "") {
    alert ("¡Hola " + USUARIO_INVITADO + ",  Bienvenido a El Juego De La Coincidencia!");
} else {
    alert ("¡Hola " + USUARIO + ",  Bienvenido a El Juego De La Coincidencia!");
}

alert ("Tenes 5 chances para encontrar un numero entre el 1 y el 9 incluidos. ¡Si ganas, encontraste tu numero de la suerte!")

for (let i=1 ; i < 6; i++) {
     let numeroIngresado = parseInt(prompt("Ingrese un numero entre el 1 y 9 incluidos"));
     if ((i === 5) && (numeroIngresado !== numeroEncontrar)) {
          let nuevoIntento = prompt ("¿Desea intentar por otra via?").toLowerCase();
          if (nuevoIntento === "no") {
               alert ("Lo siento, no has encontrado el numero, has perdido El Juego De La Coincidencia");
               console.log("Estado del juego: perdido");
               document.write(`<p>El numero a encontrar era: ${numeroEncontrar}</p>`);
          } else {
               alert ("¡Perfecto, ahora tendras tantos intentos como usted quiera, pero esta vez, el numero a encontrar cambia con el intento");
               let condicionFinal = true;
               let contador = 0;

               while (condicionFinal !== "no") {
                    let numeroAleatorioFinal = Math.random()*9;
                    let numeroEncontrarFinal = Math.floor(numeroAleatorioFinal + 1);
                    console.log ("El numero a encontrar es: " + numeroEncontrarFinal);
                    contador++;
                    condicionFinal = prompt(`¿Desea continuar? En caso negativo indique "No"`).toLowerCase();
                    if (condicionFinal !== "no") {
                         let numeroIngresadoFinal = parseInt(prompt("Ingrese un numero entre el 1 y 9 incluidos"));
                         if (numeroIngresadoFinal !== numeroEncontrarFinal) {
                              continue;
                         } else if (numeroIngresadoFinal === numeroEncontrarFinal) {
                              alert ("Felicitaciones, costo un poco pero, has ganado El Juego De La Coincidencia");
                              console.log("Estado del juego: ganado");
                              console.log("Realizado en: " + (contador + 5) + " intentos");
                              document.write(`<p>Tu numero de la suerte es: ${numeroEncontrar}</p>`);
                              document.write(`<p>Lo lograste en: ${contador + 5} intentos</p>`);
                              break;
                         }
                    } else if (condicionFinal === "no") {
                         alert ("Lo siento, no has encontrado el numero, has perdido El Juego De La Coincidencia");
                         console.log("Estado del juego: perdido");
                         document.write(`<p>El numero a encontrar era: ${numeroEncontrar}</p>`);
                         break;
                    }
               }
          }
     } else if (numeroIngresado === numeroEncontrar) {
          alert ("Felicitaciones, has ganado El Juego De La Coincidencia");
          console.log("Estado del juego: ganado");
          document.write(`<p>Tu numero de la suerte es: ${numeroEncontrar}</p>`);
          document.write(`<p>Lo lograste en: ${i} intentos</p>`);
          break;
     }
}
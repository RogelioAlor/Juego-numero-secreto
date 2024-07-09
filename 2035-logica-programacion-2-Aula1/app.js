let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces' }`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
     }
    
    return;
}

function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }
    
    //si  el numero generado esta incluido en la lista hacemos una operacion si no hacemos otra    
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
   
    condicionesIniciales();
    //Deshabilitar el numero de intentos
 //indicar mensaje de intervalo de numeros
    //iniciarlizar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function condicionesIniciales() {
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p',`Introduce un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}
condicionesIniciales();


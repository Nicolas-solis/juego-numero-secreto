let Numerosecreto = 0;
let Intentos = 0;
let listaNumeroSorteado = [];
let NumeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let Elementogenerico = document.querySelector(elemento);
    Elementogenerico.innerHTML= texto;
    return;
}

function VerificarIntento(){
    let NumeroUsuario =parseInt(document.getElementById("ValorUsuario").value);
   //console.log(typeof(NumeroUsuario));
    //console.log(NumeroUsuario);
    console.log(Numerosecreto);
    //console.log (NumeroUsuario === Numerosecreto);
    if (NumeroUsuario === Numerosecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${Intentos} ${(Intentos === 1) ? `vez` : `veces`} `)
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { 
        if (NumeroUsuario > Numerosecreto) {
            asignarTextoElemento("p", "El numero secreto es menor ");
        }else {
            asignarTextoElemento("p","el numero secreto es mayor ");
        }
        Intentos ++;
         limpiarCaja();
    return;
}  
}

function limpiarCaja (){
   // para quitar un valor pueden ser de dos maneras 
   // document.querySelector("#ValorUsuario").value = "";
    let borrarCaja = document.querySelector("#ValorUsuario");
    borrarCaja.value = "";
}
function CondicionesIniciales(){
asignarTextoElemento("h1", "Juego del numero secreto");
asignarTextoElemento("p", `Indica un numero del 1 al ${NumeroMaximo}`);
Numerosecreto = GenerarNumeroSecreto();
Intentos = 1;

}

function reiniciarJuego(){
// limpiar caja 
 limpiarCaja();
// indicar mensaje de intervalo de numeros
// generar el numero aleatoreo 
// inicializar el numero intentos 
CondicionesIniciales();
//deshabilitar el bonton de nuevo juego 
    document.querySelector("#reiniciar").setAttribute("disabled" ,"true");
}
function GenerarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*NumeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    // si ya sorteamos todos los numeros mostramos aviso y cerramos juegos 
    if (listaNumeroSorteado.length == NumeroMaximo){
        asignarTextoElemento("p", " ya se sortearon todos los numeros posibles")

    }else {
        // si el numero generado esta incluido en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return GenerarNumeroSecreto();


        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
CondicionesIniciales ();
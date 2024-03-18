//alert("hola este es mi javascript");

//let nombre="Martha";
//nombre = "Maria";
//
//var nombre1= "Martha";
//
//const nombre2= "Martha";
//nombre2= "Maria";
//
//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS

//let contenidoTitulo = "sye"

//let titulo = document.querySelector(".logo .fuente-acento");
//titulo.innerHTML = contenidoTitulo;


//CONDICIONALES
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//if(textoTitulo =="bye"){
   // titulo.innerHTML = "otro";
//} 
//else{
 //   console.log("No se cumple");
//}

//SELECCIONAR ELEMENTOS

//let contenidoAcerca = "hola"

//let acerca = document.querySelector(".menu .acerca-de");
//acerca.innerHTML = contenidoAcerca;

//CONDICIONALES
//let textoAcerca = acerca.innerText;
//console.log(textoAcerca);//

//if(textoAcerca == "hola"){
   // acerca.innerHTML = "No estoy";//
//}
//else {
 //   acerca.innerHTML = "No es verdad";
//}

 //FUNCIONES

let nombre = "Eloyito";
let ciudad = "Lima";
let gusto = "caldo";

let parrafito = document.querySelector (".parrafo2");

function cambiar(nombre, ciudad, gusto){
    let relleno = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;

    return relleno;
}

parrafito.innerText = cambiar(nombre, ciudad, gusto);


let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};





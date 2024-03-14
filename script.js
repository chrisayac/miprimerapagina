//alert("Hola este es mi Javascript");

//let nombre = "Martha"
//nombre = "Maria"

//var nombre1 = "Martha"

//const nombre2 = "Martha"

//console.log(nombre)
//console.log(nombre1)
//console.log(nombre2)  

//SELECCION DE ELEMENTOS

//let contenidoTitulo = "Martha";

//let titulo = document.querySelector(".logo .fuente-")
//titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
//let textoTitulo = titulo.innerHTML;
//console.log(textoTitulo)

//if(textoTitulo == "Nombre") {
    //titulo.innerHTML = "Otro";
//} else {
    //console.log("no se cumple");
//}

//FUNCIONES

//let nombre1 ="Ani";
//let ciudad1 ="Bs As";
//let gusto1 ="chocolate";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, ciudad, gusto) {
  //  let contenido = `Me llamo ${nombre}, naci en ${ciudad}. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen, y tengo deseos de formar parte de una ${gusto} consolidada en el mercado comprometiéndome con sus objetivos, visión y misión.`;

  //  return contenido;
//} 

//parrafo.innerText = cambiarTexto(nombre1, ciudad1, gusto1);

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

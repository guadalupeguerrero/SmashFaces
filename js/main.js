var numeroAlAzar;
var puntos = 0;
var intentos = 0;

var imagenes = [
 "Ana.JPG", "Analy.JPG", 
 "Areli.JPG", "Beatriz.JPG", 
 "Cecilia.JPG", "Claudia.JPG", 
 "Daniela.JPG", "Elisa.JPG", 
 "Evelyn.JPG", "Gabriela.JPG", 
 "Grissel.JPG", "Guadalupe.JPG", 
 "Johana.JPG", "Joyce.JPG", 
 "Ofelia.JPG", "Patricia.JPG", 
 "Sharon.JPG", "Heredia.JPG", 
 "Karen.JPG", "Monica.JPG",  
 "Karla.JPG", "Leslie.JPG", 
 "Mishel.JPG", "Milca.JPG", 
 "Tayde.JPG", "Naibit.JPG", 
 "Nayeli.JPG", "Nelly.JPG", 
 "Reyna.JPG", "Adriana.JPG", 
 "Ruth-Lopez.JPG","Ruth-Vega.JPG",
 "Sandra-Bollo.JPG","Sandra-Diaz.JPG", 
 "Vianey.JPG", "Zazil.JPG"];


var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];


function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};


function desplegarNuevaJugada(){
var tamanoArreglo = nombres.length;


if(tamanoArreglo > 0){
	numeroAlAzar = enteroRandomEnRango (0,tamanoArreglo);
	var imagen = 'fotos/' + imagenes[numeroAlAzar];
	$('#imagenPersona').attr('src', imagen);
}else{
	alert('¡¡¡¡Triunfaste!!!');
}


};

$(document).ready(function(){
 
	$('#btnComprobar').click(function(){
		var nombre =$('#inputNombre').val();
		console.log('El usuario escribio' + nombre);

		var nombreAdivinar = nombres[numeroAlAzar];
		console.log('El nombre correcto es:' + nombreAdivinar);
  		
		if (nombre === nombreAdivinar){

			//Qitamos el elemento con la función 'splice' que ya no queremos
			nombres.splice(numeroAlAzar,1);
			imagenes.splice(numeroAlAzar,1);
			puntos = puntos + 5;

			desplegarNuevaJugada();
		}else{
			alert('Error 500!')
			puntos = puntos -1;//puntos--;
      intentos = intentos +1//intentos++;
		};
		$('#puntos').text('Puntos' + puntos);

	});

	desplegarNuevaJugada();
});









/*
//document = Es un selector
$(document).ready(function(){
  //Lo que quieras ejecutar al principio lo pones aquí
  console.log("El documento ya esta listo");
$('#inputNombre').val();
$('#imagenPersona').attr('src','fotos/Analy Miranda.JPG');

$('#btnComprobar').click(function(){
  //va hacer esto cuando se haga clic
  
  //Obtener el valor
  var nombre = $('#inputNombre').val();
  console.log(nombre);
  
  });

 });

//puntaje
var nombres = [ "Alma", "Ana"];

var indiceActual = 0;
var puntos = 0;
var intentos = 0;


function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};

function desplegarNuevaJugada() {

  if (nombres.length > 0) {
      indiceActual = enteroRandomEnRango(0, nombres.length);
      var nombre = nombres[indiceActual];

      console.log('Desplegando jugada de: ' + nombre);
      $('#imagenPersona').attr('src','fotos/' + nombre + '.JPG')
  } else {
      $('#contenedorJuego').hide();
      $('#contendorFinal').show();
      $('#headResult').text('Finalizaste con ' + puntos + ' puntos');
  }

};

$('#btnRevisar').click(function() {

    var nombre = $('#inputNombre').val();
    console.log('Nombre: ' + nombre);

    if (nombre == nombres[indiceActual]) {
      console.log('Bien!');
      nombres.splice( indiceActual ,1);
      puntos++;
      intentos = 0;
      desplegarNuevaJugada();
    } else {
      console.log('Mal!');
      puntos--;
      intentos++;
      
      if (intentos == 5) {
        nombres.splice( indiceActual ,1);
        intentos = 0;
        desplegarNuevaJugada();
      }

    }

});


$('#contenedorJuego').show();
$('#contendorFinal').hide();

desplegarNuevaJugada();
*/

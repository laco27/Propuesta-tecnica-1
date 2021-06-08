// Ejercicios propuesta tecnica 1

// Ejercicio 1 ¿Cómo multiplicarías 2 números sin utilizar el signo de multiplicación?
function multiplicacion(num1:number, num2:number): number{
	let resultado:number;
	for (var counter:number = 0, counter < num2, counter++){
		resultado = resultado + num1
	}
	return resultado
}

// Ejercicio 2 Uso de Let y Const, ¿Harías cambios en las siguientes líneas? ¿Y por qué?
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
  nombre: nombre,
  edad: edad
};

// Asumiendo que las variables deben ser globales no haría cambios ya que al declararlas como var tienen un scope total sobre el código
// Las variables las declararía como Let en caso de que solo se utilice en un segmento del código, por ejemplo una función o un bucle
// Las variables const solo se deben usar con valores que son constante en la ejecución del código

// Ejercicio 3 Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

interface batman {
	nombre:string;
	artesMarciales:string[];
}

// Ejercicio 4 Convertir esta función a una función de flecha

// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
var resultado = (a, b) => (a + b) * 2;

// Ejercicio 5 Función con parámetros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"

function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  } else {
     mensaje = nombre + " tiene un " + poder
  }
};

// Ejercicio 6 Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectángulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura
class Rectangulo {
	base:number;
	altura:number;
	calcularArea(base:number, altura:number) {
		return base * altura;
	}
}

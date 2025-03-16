var numero = prompt("Digite o numero que deseja multiplicar");
var multiplicador = prompt("Digite ate quanto deseja multiplicar");

for (var i = 0; i < multiplicador; i++) {
	document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}


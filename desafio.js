// mayor > menor <
alert('Simulador de poliza online.');
alert('A continuación le pediremos los datos de su vehículo para poder darle un valor estimado.');

let valorveh;
let añoveh;

function vehiculo(marca, modelo, valorveh, añoveh) {
	this.marca = marca;
	this.modelo = modelo;
	this.valorveh = valorveh;
	this.añoveh = añoveh;
}

function vehCliente() {
	marca = prompt('Ingrese la marca del vehículo.');
	while (marca.length == 0) {
		alert('Ingrese una marca.');
		marca = prompt('Ingrese la marca del vehículo.');
	}
	modelo = prompt('Ingrese el modelo del vehiculo');
	while (modelo.length == 0) {
		alert('Ingrese un modelo.');
		modelo = prompt('Ingrese el modelo del vehiculo');
	}
	valorveh = parseInt(prompt('Ingrese el valor de su vehículo.'));
	añoveh = parseInt(prompt('Ingrese el año de su vehículo.'));
	v = new vehiculo(marca, modelo, valorveh, añoveh);
	//valor del vehiculo a moneda.
	let valor = v.valorveh;
	let valorPeso = valor.toLocaleString();
	//
	console.log('Los datos ingresados del vehiculo son: ');
	console.log('Marca del vehiculo: ' + v.marca);
	console.log('Modelo del vehiculo: ' + v.modelo);
	console.log('Valor del vehiculo: $' + valorPeso);
	console.log('Año del vehiculo: ' + v.añoveh);
	console.log('');
	// reemplazar texto Marca
	function mostrarDatosPantalla() {
		let marcaVeh = document.getElementById('marca');
		marcaVeh.innerHTML = `${v.marca.toUpperCase()}`;
		// reemplazar texto Modelo
		let modeloVeh = document.getElementById('modelo');
		modeloVeh.innerHTML = `${v.modelo}`;
		// reemplazar texto Valor
		let valorVeh = document.getElementById('valor');
		valorVeh.innerHTML = `$${valorPeso}`;
		// reemplazar texto Año
		let datosVeh = document.getElementById('año');
		datosVeh.innerHTML = `${v.añoveh}`;
		calcularPoliza();
	}
	mostrarDatosPantalla();
}
let contactar = 'Valor no disponible';
function calcularPoliza() {
	// vehiculo del 2000.
	if (añoveh < 2000) {
		alert('Para asegurar este vehículo deberá contactarse con algún representante.');

		let avisar = document.getElementById('montoPoliza');
		avisar.innerHTML = `${contactar}`;
	}
	// Vehiculo mayor a $3.000.000
	if (valorveh > 3000000) {
		alert('Para asegurar este vehículo deberá contactarse con algún representante.');
		let avisar = document.getElementById('montoPoliza');
		avisar.innerHTML = `${contactar}`;
	}
	// vehiculo del 2000 al 2016 menor a $1.000.000
	if (valorveh < 1000000 && añoveh <= 2016 && añoveh >= 2000) {
		let poliza = valorveh * 60 / 100;
		console.log('Su vehículo se asegurará por un valor de: ' + '$' + poliza.toLocaleString());
		let polizaPeso = poliza.toLocaleString();
		let montoPoliza = document.getElementById('montoPoliza');
		montoPoliza.innerHTML = `$${polizaPeso}`;
	}
	// vehiculo del 2016 al año actual menor a $1.000.000
	if (valorveh < 1000000 && añoveh > 2016) {
		let poliza = valorveh * 65 / 100;
		console.log('Su vehículo se asegurará por un valor de: ' + '$' + poliza.toLocaleString());
		let polizaPeso = poliza.toLocaleString();
		let montoPoliza = document.getElementById('montoPoliza');
		montoPoliza.innerHTML = `$${polizaPeso}`;
	}
	// vehiculo del 2000 al 2016 mayor a $1.000.000 y menor a $3.000.000
	if (valorveh > 1000000 && valorveh < 3000000 && añoveh <= 2016 && añoveh >= 2000) {
		let poliza = valorveh * 67 / 100;
		console.log('Su vehículo se asegurará por un valor de: ' + '$' + poliza.toLocaleString());
		let polizaPeso = poliza.toLocaleString();
		let montoPoliza = document.getElementById('montoPoliza');
		montoPoliza.innerHTML = `$${polizaPeso}`;
	}
	// vehiculo del 2016 al año actual mayor a $1.000.000 y menor a $3.000.000
	if (valorveh > 1000000 && valorveh < 3000000 && añoveh > 2016) {
		let poliza = valorveh * 67 / 100;
		console.log('Su vehículo se asegurará por un valor de: ' + '$' + poliza.toLocaleString());
		let polizaPeso = poliza.toLocaleString();
		let montoPoliza = document.getElementById('montoPoliza');
		montoPoliza.innerHTML = `$${polizaPeso}`;
	}
}

vehCliente();

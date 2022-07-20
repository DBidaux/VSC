//Methods -- Creación de métodos

const { symbol } = require("prop-types");

let rabbit = {};
rabbit.speak = function (line) {
	console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");

function speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
}
let wrabbit = { type: "white", speak };
let hrabbit = { type: "hungry", speak };

wrabbit.speak("Vaya por dios, " + "que tarde es!.");
hrabbit.speak("Podría comerme una zanahoria ahora mismo.");

speak.call(wrabbit, "A través del espejo.");
speak.call(wrabbit, "Eructo!.");

// Binding de arrow-functions
function normalize() {
	console.log(this.coords.map((n) => n / this.length));
}
normalize.call({ coords: [0, 2, 4], length: 5 });

//Prototypes

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

//Todo es un objeto en JS, no es sacar una propiedad de un objeto vacío. Object.prototype -> es el prototipo ancestral.

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

//Pueden tener otros prototipos que les dan otro set de propiedades por defecto.

console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // Prototipo de Math.max es función
console.log(Object.getPrototypeOf([]) == Array.prototype); // Prototipo de [] es array

//Se pueden crear objetos con un prototipo concreto

let protoConejo = {
	//Contiene todas las propiedades que vayan a tener los conejos
	speak(line) {
		//Forma sencilla de crear un método mediante una propiedad, dándole como valor una función.
		console.log(`The ${this.type} rabbit says '${line}'`);
	},
};
let killerConejo = Object.create(protoConejo);
killerConejo.type = "killer";
killerConejo.speak("SKREEEEEEE!");

//Classes

//Se definían así antes

function makeRabbit(type) {
	let rabbit = Object.create(protoRabbit);
	rabbit.type = type;
	return rabbit;
}

//Nueva forma de definir clases (instancias de un objeto)

function Rabbit(type) {
	this.type = type;
}
Rabbit.prototype.speak = function (line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("Weird");
weirdRabbit.speak("Hello folks");

//Comprobación de prototipo
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

//Notaciones de clase, nueva forma de escribir los prototipos

//class Rabbit {
//	constructor(type) {
//		this.type = type;
//	}
//	speak(line) {
//		console.log(`The ${this.type} rabbit says '${line}.'`);
//	}
//}
//let rabbitGreen = new rabbit("Green");
//let rabbitBlue = new rabbit("Blue");

//Sobreescribiendo las propiedades derivadas

Rabbit.prototype.teeth = "small";
console.log(killerConejo.teeth);
killerConejo.teeth = "long, sharp and bloody";
console.log(killerConejo.teeth);
console.log(weirdRabbit.teeth);

//No es el mismo método el de array que el de objeto
console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());
//La llamada genera otro string
console.log(Object.prototype.toString.call([1, 2]));

//Maps, estructura que te permite asociar objetos a valores asociados( objeto: valor,)

let ages = {
	Boris: 45,
	Mary: 35,
	Julia: 67,
};

console.log(`Julia is ${ages["Julia"]}`);
console.log("Is Jack's age known?", "Jack" in ages); //no definido
console.log("Is toString's age known?", "toString" in ages); //definido por defecto en el prototipo de objeto
console.log("toString" in Object.create(null));

//Mapa nuevo, deben ser strings.
let agess = new Map();
agess.set("Boris", 29);
agess.set("Angela", 49);
agess.set("Julia", 67);

console.log(`Julia is ${agess["Julia"]}`);
console.log("Is Jack's age known?", "Jack" in agess); //no definido
console.log(agess.has("toString")); //definido por defecto en el prototipo de objeto //Puedes usar el método hasOwnProperty() que ignora el prototipo del objeto

//Polymorphism

Rabbit.prototype.toString = function () {
	//Un mismo método dependiendo de donde lo definas, varía.
	return `a ${this.type} rabbit`;
};
console.log(String(weirdRabbit));

//Symbols

let sym = Symbol("name");
console.log(sym == Symbol("name"));
Rabbit.prototype[sym] = 55;
console.log(weirdRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
	return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

let stringObject = {
	[toStringSymbol]() {
		return "a jute rope";
	},
};
console.log(stringObject[toStringSymbol]());

//The iterator interface

//let okIterator = "OK"[Symbol.iterator]();
//console.log(okIterator.next);
//function next {[código]}

class Matrix {
	constructor(width, height, element = (x, y) => undefined) {
		this.width = width;
		this.height = height;
		this.content = [];

		for (let y = 0; y < height; y++) {
			for (let x = 0; y < width; x++) {
				this.content[y * width + x] = element(x, y);
			}
		}
	}
	get(x, y) {
		return this.content[y * this.width + x];
	}
	set(x, y, value) {
		this.content[y * this.width + x] = value;
	}
}

class MatrixIterator {
	constructor(matrix) {
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;
	}
	next() {
		if (this.y == this.matrix.height) return { done: true };
		let value = {
			x: this.x,
			y: this.y,
			value: this.matrix.get(this.x, this.y),
		};
		this.x++;
		if (this.x == this.matrix.width) {
			this.x = 0;
			this.y++;
		}
		return { value, done: false };
	}
}

Matrix.prototype[Symbol.iterator] = function () {
	return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, {y}`);
for (let { x, y, value } of matrix) {
	console.log(x, y, value);
}

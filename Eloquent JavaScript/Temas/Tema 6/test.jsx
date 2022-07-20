class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}.'`);
	}
}
let rabbitGreen = new rabbit("Green");
let rabbitBlue = new rabbit("Blue");

switch (prompt ("Que tipo de tiempo hace¿?")) {
    case "lluvioso":
        console.log("Llevate un paraguas.");
        break;
    case "soleado":
        console.log("Vistete fresco.");
    case "nublado":
        console.log("Sal afuera.");
        break;
    default:
        console.log("Tiempo desconocido!.");
        break;
}

let arrays = [[1,2,3], [4,5], [6,7]] 
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

//Me complique demasiado, hice una función que no necesitaba ==> esta el método ya definido.
//Perdí 45 minutos por no leer el ejercicio 
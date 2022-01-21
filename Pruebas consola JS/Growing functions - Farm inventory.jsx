function printFarmInventory(vacas, gallinas) {
  
  let vacasString = String(vacas);
  while (vacasString.length < 3) {
    vacasString = "0" + vacasString;
  }
  console.log(`${vacasString} vacas`);
  
  let gallinasString = String(gallinas);
  while (gallinasString.length < 3) {
    gallinasString = "0" + gallinasString;
  }
  console.log(`${gallinasString} gallinas`);
}

printFarmInventory(7, 13);

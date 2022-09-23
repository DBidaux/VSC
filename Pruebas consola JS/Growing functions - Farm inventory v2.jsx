function number_Label (number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
      numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function print_Inventory (cows, chickens, pigs) {
  number_Label(cows, "vacas");
  number_Label(chickens, "gallinas");
  number_Label(pigs, "cerdos");
}

print_Inventory(7, 11, 13);
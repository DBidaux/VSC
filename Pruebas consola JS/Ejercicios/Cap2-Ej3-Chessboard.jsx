let tam = 8;
let tab = " ";
for (let bl = 0; bl < tam; bl++){
  for(let ng = 0; ng < tam; ng++){
    if (( bl + ng) % 2 == 0) {
      tab += " ";
    } else {
      tab += "#";
    }
  }
tab += "\n";
}
console.log(tab);
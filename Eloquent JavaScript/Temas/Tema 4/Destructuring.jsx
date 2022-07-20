//Phi function//
function phi(table){
    return (table[3]*table[0]-table[2]*table[1])/
      Math.sqrt((table[2]+table[3]) *
                (table[0]+table[1]) *
                (table[1]+table[3]) *
                (table[0]+table[2])); 
}

//Destructuring function looking inside the array//
let n00 = table[0]
let n01 = table[1]
let n10 = table[2]
let n11 = table[3]

function phi([n00, n01, n10, n11]) {
    return (n11*n00-n10*n01)/
    Math.sqrt((n10+n11) * (n00+n01) *
              (n01+n11) * (n00+n10));
}
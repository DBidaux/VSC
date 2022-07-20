//Abstracting repetition//
for (let i=0; i<10; i++){
    console.log(i);
}

function repeatLog(n){
    for (let i=0; i<n; i++){
        console.log(i);
    }
}
repeatLog(15);

function repeat(n, action){
    for (let i=0; i<n; i++){
        action(i);
    }
}
repeat(9, console.log);

//Más fácil crear la función a repetir en la misma declaración//

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i+1}`);
});
console.log(labels);


//Crear nuevas funciones//
function greaterThan(n){
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

//Cambio de la función//
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("Called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3,2,1);

//Nuevos tipos de control de flujo//
function unless(test, then) {
    if(!test) then();
}
repeat(3, n=>{
    unless(n%2==1, () => {
        console.log(n, " is even.");
    });
});

//forEach, for/of loop //
["A", "B"].forEach(l => console.log(l));

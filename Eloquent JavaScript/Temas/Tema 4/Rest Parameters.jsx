function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number>result) result = number;
    }
    return result;
}

console.log(max(5,6,9,3,45,3,2,8,94,55,22,236));

let numbers = [5, 1, 7];
console.log(max(...numbers));

let words = ["never", "fully", "arguments"];
console.log(["will", ...words, "understand"]);
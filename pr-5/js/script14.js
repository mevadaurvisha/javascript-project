let func = (input) => input.split(" ");


let input = "Hire the top 1% freelance developer";

let array = func(input);

// console.log(array);

array.pop();
array.pop();

console.log(array);
document.getElementById('method').innerHTML = `[${array}]`;
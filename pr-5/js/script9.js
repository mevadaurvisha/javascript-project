let func = (input) => {

    let char = input.slice(2,3);

    let world3 = 'A New Java Book';

    document.getElementById('method').innerHTML = char;
    document.getElementById('method3').innerHTML = world3.toUpperCase();
    document.getElementById('method4').innerHTML = world3.toLowerCase();
}
let string = "oxoxoxox";
let output = "";

for (let i = 0; i < string.length; i++) {
    if (string[i] === 'x') {
        output += 'X';
    } else {
        output += string[i];
    }
}

console.log("Output:", output);
document.getElementById('method2').innerHTML = output;


let world = 'airplane';
let world3 = 'A New Java Book';

func(world);
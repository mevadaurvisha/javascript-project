let array = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let color = ["Red", "Green", "White", "Black"];


let funcas = (arr) => {
    arr.sort((a, b) => a - b);
    console.log("Ascending order:", arr);
    document.getElementById('method').innerHTML = `Ascending order: ${arr}`;
}


let funcdes = (arr) => {
    arr.sort((a, b) => b - a);
    console.log("Descending order:", arr);
    document.getElementById('method2').innerHTML = `Descending order: ${arr}`;
}


funcas(array);
funcdes(array);
funcas(color);
funcdes(color);
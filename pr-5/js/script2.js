let array = [56, 2, 3, 45, 90, 6];


let sum1 = 0;
for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
}


console.log("Sum using for loop:", sum1);
document.getElementById('method').innerHTML = `sum using for loop: ${sum1}`;

let sum2 = 0;
array.forEach(function(array) {
    sum2 += array;
});


console.log("Sum using forEach loop:", sum2);
document.getElementById('method2').innerHTML = `sum using for-each loop: ${sum1}`;
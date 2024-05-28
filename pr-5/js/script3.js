let array = [-6, 23, 34, 58, 13, 80];

let funcmax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Maximum value:", max);
    document.getElementById('method').innerHTML = `Maximum value : ${max}`;
}

let funcmin = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("Minimum value:", min);
    document.getElementById('method2').innerHTML = `Minimum value : ${min}`;
}

funcmax(array);
funcmin(array);
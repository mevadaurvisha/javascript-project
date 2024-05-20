const func = (c) => {

    let f = (c * 1.8) + 32;
    return f;
}

let ans = func(35);
// console.log("Transformation of celcius to fehrenheit is:",ans);
document.getElementById('function').innerHTML = `Transformation of celcius to fehrenheit is : ${ans}`;
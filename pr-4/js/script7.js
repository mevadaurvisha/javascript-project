const func = (f) => {

    c = (f - 32) / 1.8;
    return c;
}
let ans = func(100);
// console.log("Transformation of fehrenheit to celcius is: ",ans);
document.getElementById('function').innerHTML = `Transformation of fehrenheit to celcius is : ${ans}`;
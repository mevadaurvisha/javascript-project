let func = (l , h) => {

    let area = l * h;
    return area;
}
let ans = func(30 , 20);
// console.log("Area of rectangle is:" ,ans);
document.getElementById('function').innerHTML = `Area of Rectangle is: ${ans}`;
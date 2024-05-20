let func = (a , b, c) => {

    let ans = ((b * b) * (4 * a * c))/(2 * a);
    return ans;
}

let a = func(5 , 6 , 4);
// console.log("Ans of formula is :",a);
document.getElementById('function').innerHTML = `Ans of given formula is : ${a}`;
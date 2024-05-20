let func = (a ,b) => {

    let ans = (a * a) + (2 * a * b) + (b * b);
    return ans;
}
let a = func(5 , 6);
// console.log('Ans of formula is:' ,a);
document.getElementById('function').innerHTML = `Ans of given formula is : ${a}`;
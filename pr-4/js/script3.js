let func = (b, h) => {

    let area = (b * h)/2; 
    return area;
}
 let ans = func(25, 4);
//  console.log("Area of triangle is:" ,ans);
document.getElementById('function').innerHTML = `Area of Triangle is : ${ans}`; 
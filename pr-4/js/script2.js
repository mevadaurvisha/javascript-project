let func = (radius) => {

        let pie = 3.14;
        let area = pie * radius * radius;

        return area;
}

let ans = func(5);
// console.log("Area of circle is:", ans);

document.getElementById('function').innerHTML = ` Area of circle is : ${ans}`
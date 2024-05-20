const func = (a , b) => {

    document.getElementById('function1').innerHTML = `Before swapping : a = ${a}  b = ${b}`;

    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById('function2').innerHTML = `After swapping : a = ${a}  b = ${b}`;
}

func(50 , 40);
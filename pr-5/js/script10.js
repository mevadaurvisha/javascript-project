let func = (input) => {

    let output = input.reverse();

    document.getElementById('method').innerHTML += output;
}

let array = [1,2,3,4,5,6,7,8,9];

func(array);
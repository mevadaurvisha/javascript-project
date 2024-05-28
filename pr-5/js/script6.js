let func = (input) => {

    input.map(element => {

        let square = element * element;

        console.log(square);    
        document.getElementById('method').innerHTML += square;
    })
};

let array = [2,3,4,5];

func(array);
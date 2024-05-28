let func = (input) => {

    let array = [1,2,3,4,5,6,7,8,9];

    if(array.includes(input)){

        document.getElementById('method').innerHTML = `value ${input} is founded in array...`;
    }
    else{

        document.getElementById('method').innerHTML = `value ${input} isn't founded in array...`;
    }
}

func(6);
const func = (no) => {

    if(no % 2 == 0){
        // console.log("Given value is even number...");
        document.getElementById('function').innerHTML = `Given value is even number...`;
    }
    else{
        // console.log("Given value is odd number...");
        document.getElementById('function').innerHTML = `Given value is odd number...`;
    }
}

func(51);
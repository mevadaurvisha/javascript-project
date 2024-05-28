let func = (input) => {

    let output =  input.replaceAll('dog', 'cat');

    // console.log(output);
    document.getElementById('method').innerHTML = `input: ${input} <br> <br/> output: ${output}`;
}


let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

func(input);
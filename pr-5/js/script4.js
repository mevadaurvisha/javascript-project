let array = ['A', 'f', 's', 'h', 'b', 's'];

let func = (arr) => {


    arr.forEach(array => {


        let code = array.charCodeAt();
        console.log(`ASCII value of '${array}': ${code}`);
        document.getElementById('method').innerHTML = `ASCII value of '${array}': ${code}`;
    });
}


func(array);
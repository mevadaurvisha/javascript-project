let func = (name) => {

    console.log('name :', name);
    document.getElementById('method').innerHTML = `Name : ${name}`;

    console.log('name length :', name.length);
    document.getElementById('method2').innerHTML = `Name length : ${name.length}`;
}

func('Urvisha');
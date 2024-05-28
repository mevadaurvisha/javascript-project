let array = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let  func = (value) => {
    
    value = value.filter(array => array >= 0);

    console.log(value);
    document.getElementById('method').innerHTML = value;
}

func(array);
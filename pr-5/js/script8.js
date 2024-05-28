let array = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let length = 8;

let output = array.filter(array => array.length >= length);

// console.log(output);

document.getElementById('method').innerHTML = output;
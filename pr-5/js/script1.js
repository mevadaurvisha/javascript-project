let func = (color) => {

    console.log(color.join(','));

    console.log(color.join('+'));

    console.log(color.slice(0,3).join(','));

    console.log(color[0]);

    console.log(color.slice(1).join(','));

    console.log([color, "orange"].join(','));

}

let color = ["Red", "Green", "White", "Black"];

func(color);

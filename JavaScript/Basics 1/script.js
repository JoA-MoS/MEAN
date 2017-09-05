function Basic1() {
    let x = [];
    console.log(x);
    x.push("One", "Two", "Three");
    console.log(x);
    x.pop();
    console.log(x);
}


function Basic2() {
    const y = [];
    console.log(y);
    y.push(88);
    y.length = 8;
    console.log(y);
    // does not error because you can change the values of a contant array
}

function Basic3() {
    let z = [9, 10, 6, 5, -1, 20, 13, 2];
    for (var i = 0; i < z.length; i++) {
        console.log(z[i]);

    }
    for (var i = 0; i < z.length - 1; i++) {
        console.log(z[i]);

    }
}


function Basic4() {
    let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
    names.forEach(function (element) {
        console.log(element.length)
    }, this);

    console.log("==============================")
    names.filter(function (element) {
        return element.length === 5;
    }).forEach(function (element) {
        console.log(element)
    });
}


function yell(msg) {
    console.log(msg.toUpperCase());
}

//Basic1();

//Basic2();

//Basic3();

// Basic4();

yell("This is a test");



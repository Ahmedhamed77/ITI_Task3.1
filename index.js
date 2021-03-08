let arr = [];

let first_index;
let sec_index;
let third_index;

function run() {
    for (let i = 0; i < 3; i++) {
        arr.push(Number(prompt("enter your number")));
        first_index = arr[0];
        sec_index = arr[1];
        third_index = arr[2];

    }
}

function sum(arr) {

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let res = arr.reduce(reducer);

    document.getElementById('res_sum').innerHTML = first_index + "+" + sec_index + "+" + third_index + "=" + res;
}


function multiply(arr) {
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    let res = arr.reduce(reducer);

    document.getElementById('res_multi').innerHTML = first_index + "*" + sec_index + "*" + third_index + "=" + res;
}

function division(arr) {
    const reducer = (accumulator, currentValue) => accumulator / currentValue;
    let res = arr.reduce(reducer);

    document.getElementById('res_divide').innerHTML = first_index + "/" + sec_index + "/" + third_index + "=" + res.toFixed(3);
}

window.addEventListener('load',function () {
    run();
    sum(arr);
    multiply(arr);
    division(arr);

});




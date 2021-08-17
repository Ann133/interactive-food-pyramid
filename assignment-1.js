let buttonSubtract1 = document.querySelector('#subtract1');
let buttonAdd1 = document.querySelector('#add1');
let input1 = document.querySelector('#center1');

let buttonSubtract2 = document.querySelector('#subtract2');
let buttonAdd2 = document.querySelector('#add2');
let input2 = document.querySelector('#center2');

let buttonSubtract3 = document.querySelector('#subtract3');
let buttonAdd3 = document.querySelector('#add3');
let input3 = document.querySelector('#center3');

let buttonSubtract4 = document.querySelector('#subtract4');
let buttonAdd4 = document.querySelector('#add4');
let input4 = document.querySelector('#center4');

let buttonSubtract5 = document.querySelector('#subtract5');
let buttonAdd5 = document.querySelector('#add5');
let input5 = document.querySelector('#center5');

let buttonSubtract6 = document.querySelector('#subtract6');
let buttonAdd6 = document.querySelector('#add6');
let input6 = document.querySelector('#center6');

/* Purple */
buttonAdd1.addEventListener('click', () => {
    input1.value = parseInt(input1.value) + 1;
});

buttonSubtract1.addEventListener('click', () => {
    if (input1.value > 0)
    {
        input1.value = parseInt(input1.value) - 1;
    }
})

/* Blue */
buttonAdd2.addEventListener('click', () => {
    input2.value = parseInt(input2.value) + 1;
});

buttonSubtract2.addEventListener('click', () => {
    if (input2.value > 0)
    {
        input2.value = parseInt(input2.value) - 1;
    }
})

/* Green */
buttonAdd3.addEventListener('click', () => {
    input3.value = parseInt(input3.value) + 1;
});

buttonSubtract3.addEventListener('click', () => {
    if (input3.value > 0)
    {
        input3.value = parseInt(input3.value) - 1;
    }
})

/* Yellow */
buttonAdd4.addEventListener('click', () => {
    input4.value = parseInt(input4.value) + 1;
});

buttonSubtract4.addEventListener('click', () => {
    if (input4.value > 0)
    {
        input4.value = parseInt(input4.value) - 1;
    }
})

/* Orange */
buttonAdd5.addEventListener('click', () => {
    input5.value = parseInt(input5.value) + 1;
});

buttonSubtract5.addEventListener('click', () => {
    if (input5.value > 0)
    {
        input5.value = parseInt(input5.value) - 1;
    }
})

/* Red */
buttonAdd6.addEventListener('click', () => {
    input6.value = parseInt(input6.value) + 1;
});

buttonSubtract6.addEventListener('click', () => {
    if (input6.value > 0)
    {
        input6.value = parseInt(input6.value) - 1;
    }
})
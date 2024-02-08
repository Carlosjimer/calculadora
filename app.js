'use strict'

const display_top = document.getElementById('display_top');
const display_bottom = document.getElementById('display_bottom');
const save = document.getElementById('m+');
const remove = document.getElementById('m-');
const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.op');
let internal;
let internalClear;
let singClear;




number.forEach(pulsado => {
    pulsado.addEventListener('click', () => {
    const print = pulsado.textContent;
    if(display_bottom.textContent === '0'){
        display_bottom.textContent = print;
    }else{
        display_bottom.textContent += print;
    }
    internal += print;
    internalClear = internal.substring(9);
    console.log(internalClear);
    })
});

operation.forEach(oper => {//cuando se pulsa un operador hacer que solo guarde el ultimo pulsado
    oper.addEventListener('click', () => {
        const sing = oper.textContent;
        singClear = sing.slice(sing.length-1);
        internalClear += singClear;
        console.log(internalClear);
    })
});


save.addEventListener('click', () => {
    console.log('memory save');
    display_top.classList.remove('oculto');
    //queda añadir a la memoria el contenido del display
})
remove.addEventListener('click', () => {
    console.log('memory remove');
    display_top.classList.add('oculto');
    //queda añadir a la memoria el contenido del display
})
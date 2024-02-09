'use strict'

const display_top = document.getElementById('display_top');
const display_bottom = document.getElementById('display_bottom');
const button = document.querySelectorAll('button');
let internal;

button.forEach(buttons => {
    buttons.addEventListener('click', () => {
        const print = buttons.textContent;

        if(buttons.id === "c"){
            display_bottom.textContent = '0';
            return;
        }

        if(buttons.id === "equal"){
            display_bottom.textContent = eval(display_bottom.textContent);
            return;
        }

        //Solucionar 'Undefined y hacer que continue las operaciones en pantalla'

        if(buttons.className === "button op"){
            internal += display_bottom.textContent + print;
            console.log(internal);
        }

        if(display_bottom.textContent === '0'){
            display_bottom.textContent = print;
        }else{
            display_bottom.textContent += print;
        }
    })
})
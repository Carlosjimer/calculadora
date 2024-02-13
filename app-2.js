'use strict'

const display_top = document.getElementById('display_top');
const display_bottom = document.getElementById('display_bottom');
const button = document.querySelectorAll('button');
let internal = '';


button.forEach(buttons => {
    buttons.addEventListener('click', () => {
        const print = buttons.textContent;

        if(buttons.id === "c"){
            display_bottom.textContent = '0';
            return;
        }

        if(buttons.id === "equal"){
            internal += display_bottom.textContent; 
            let internalClear = internal.slice(9);
            display_bottom.textContent = eval(internalClear);
        }

        //Hacer que continue las operaciones en pantalla'

        if(buttons.className === "button op"){
            internal += display_bottom.textContent + print;
            let internalClear = internal.slice(9);
            console.log(internal);
        }


        //no funciona con mas de una operacion o con nuemros de mas de una cifra
        if(buttons.className === "button number" && display_bottom.textContent === '0' && internal.slice(-1) != '+'){
            console.log(internal.slice(-1));
            display_bottom.textContent = print;
        }else if(buttons.className === "button number"){
            if(display_bottom.textContent != '0' || internal.slice(-1) === '+'){
            console.log(internal.slice(-1));
                display_bottom.textContent += print;
                }
        }
    })
})
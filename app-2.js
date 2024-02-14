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
            internal += display_bottom.textContent; 
            let internalClear = internal.slice(9);
            display_bottom.textContent = eval(internalClear);
        }

        //Hacer que continue las operaciones en pantalla'

        if(buttons.className === "button op"){
            internal += print;
            console.log(internal.slice(9));
        }


        //no funciona con mas de una operacion o con nuemros de mas de una cifra
        if(buttons.className === "button number"){
            internal += print;
            console.log(internal.slice(9));

            if(display_bottom.textContent === '0'){
            display_bottom.textContent = print;
            }else if(buttons.className === "button number"){

                if(display_bottom.textContent != '0'){
                display_bottom.textContent += print;
                }
            }
        }
    })
})
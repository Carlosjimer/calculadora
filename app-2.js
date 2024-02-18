'use strict'

const display_top = document.getElementById('display_top');
const display_bottom = document.getElementById('display_bottom');
const button = document.querySelectorAll('button');
const sum = document.getElementById('sum');
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
            if(buttons.id === 'sum'){
                internal += '+';
            }
            console.log(internal.slice(9), internal.slice(-1));
        }


        //no funciona con mas de una operacion o con nuemros de mas de una cifra
        if(buttons.className === "button number"){
            
            //console.log(internal.slice(9), typeof(internal.slice(-1)));
            
            if(display_bottom.textContent === '0' || typeof(internal.slice(-1)) != 'string'){
                display_bottom.textContent = print;
            }else{
                display_bottom.textContent += print;
            }
            internal += print;
        }
    })
})
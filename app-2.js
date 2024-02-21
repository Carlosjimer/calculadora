'use strict'

const display_top = document.getElementById('display_top');
const display_bottom = document.getElementById('display_bottom');
const button = document.querySelectorAll('button');
const sum = document.getElementById('sum');
let internal;

// quitar el guardado en internal de los numeros pulsados, solo guardar al pulsar operaciones o igual.
button.forEach(buttons => {
    buttons.addEventListener('click', () => {
        const print = buttons.textContent;

        if(buttons.id === "ac"){
            display_bottom.textContent = '0';
            internal = '';
            return;
        }

        // solo borrar pantalla para continuar operaciones con internal. borrar todo hasta la op en internal
        if(buttons.id === "c"){
            display_bottom.textContent = '0';
            return;
        }

        if(buttons.id === "equal"){
            if(internal.includes('u')){
                let internalClear = internal.slice(9);
                console.log(internalClear);
                display_bottom.textContent = eval(internalClear);
                internal = display_bottom.textContent;
            }else{
                display_bottom.textContent = eval(internal);
                internal = display_bottom.textContent;
            }
        }

        //que solo quede la ultima operacion pulsada

        if(buttons.className === "button op"){
            if(buttons.id === 'sum'){
                internal += '+';
            }else if(buttons.id === 'subtr'){
                internal += '-';
            }else if(buttons.id === 'multi'){
                internal += '*';
            }else if(buttons.id === 'divi'){
                internal += '/';
            }
            console.log(internal.slice(9), internal.slice(-1));
        }


        if(buttons.className === "button number"){
            
            if(display_bottom.textContent === '0' || internal.slice(-1) === '+' || internal.slice(-1) === '-' || internal.slice(-1) === 'x' || internal.slice(-1) === '+'){
                display_bottom.textContent = print;
            }else{
                display_bottom.textContent += print;
            }
            internal += print;
            console.log(internal.slice(9));
        }
    })
})
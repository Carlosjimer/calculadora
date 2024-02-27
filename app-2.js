'use strict'

const display_top = document.getElementById('display_top');
const display_bottom = document.getElementById('display_bottom');
const button = document.querySelectorAll('button');
const sum = document.getElementById('sum');

//Variante que se utilizará para realizar las operaciones sin que aparezcan en pantalla.
let internal ='';


//Se recorren todos los botones agregando el evento click para su posterior ejecución.
button.forEach(buttons => {
    buttons.addEventListener('click', () => {
        const print = buttons.textContent;

//El boton OFF apaga la pantalla y reinicia la constante internal.
        if(buttons.id === 'off'){
            display_bottom.textContent = ''
            internal = '0';
        }

/*
El boton M+ guarda en localStorage el contenido del display para que continue presente aun apando la calculadora.
Además modificara la clase en CSS del elemento display_top para que aparezca cuando tengamos algún numero guardado.
*/
        if(buttons.id === 'm+'){
            localStorage.setItem('mem', display_bottom.textContent);
            console.log(localStorage.getItem('mem'));
        }

        if(buttons.id === 'm-'){
            localStorage.clear();
            display_bottom.textContent = 0;
        }

        if(buttons.id === 'mrc'){
            if(localStorage.getItem('mem') === null){
                display_bottom.textContent = 0;
            }else{
                display_bottom.textContent = localStorage.getItem('mem');
                internal += display_bottom.textContent;
                console.log(localStorage.getItem('mem'));
            }
        }


        if(buttons.id === "ac"){
            display_bottom.textContent = '0';
            internal = '';
            return;
        }

        if(buttons.id === "c"){
            internal = internal.slice(0, - display_bottom.textContent.length);
            display_bottom.textContent = '0';
            console.log(internal);
            return;
        }

        if(buttons.id === "equal"){
            if(internal === ''){
                /*(internal.includes('u')){
                let internalClear = internal.slice(9);
                console.log(internalClear);
                display_bottom.textContent = eval(internalClear);
                internal = display_bottom.textContent;*/
            }else{
                display_bottom.textContent = eval(internal);
                internal = display_bottom.textContent;
            }
            internal = '';
            console.log(internal);
        }


        if(buttons.className === "button op"){
            if(internal === ''){
                internal = display_bottom.textContent;
                if(buttons.id === 'sum'){
                    internal += '+';
                }else if(buttons.id === 'subtr'){
                    internal += '-';
                }else if(buttons.id === 'multi'){
                    internal += '*';
                }else if(buttons.id === 'divi'){
                    internal += '/';
                }else if(buttons.id === 'porcent'){
                    internal += '/100 *';
                }else if(buttons.id === 'root'){
                    display_bottom.textContent = Math.sqrt(display_bottom.textContent);
                }
            }else if(internal.slice(-1) === '+' || internal.slice(-1) === '-' || internal.slice(-1) === '*' || internal.slice(-1) === '/'){
                internal = internal.substring(0, internal.length - 1);
                if(buttons.id === 'sum'){
                    internal += '+';
                }else if(buttons.id === 'subtr'){
                    internal += '-';
                }else if(buttons.id === 'multi'){
                    internal += '*';
                }else if(buttons.id === 'divi'){
                    internal += '/';
                }else if(buttons.id === 'porcent'){
                    internal += '/100 *';
                }else if(buttons.id === 'root'){
                    display_bottom.textContent = Math.sqrt(display_bottom.textContent);
                }
            }else{
                if(buttons.id === 'sum'){
                    internal += '+';
                }else if(buttons.id === 'subtr'){
                    internal += '-';
                }else if(buttons.id === 'multi'){
                    internal += '*';
                }else if(buttons.id === 'divi'){
                    internal += '/';
                }else if(buttons.id === 'porcent'){
                    internal += '/100 *';
                }else if(buttons.id === 'root'){
                    display_bottom.textContent = Math.sqrt(display_bottom.textContent);
                }
            console.log(internal);
            }
        }


        if(buttons.className === "button number"){
            
            if(display_bottom.textContent === '0' || internal.slice(-1) === '+' || internal.slice(-1) === '-' || internal.slice(-1) === '*' || internal.slice(-1) === '/'){
                display_bottom.textContent = print;
                internal += print;
            }else if(internal === '' && display_bottom.textContent != '0'){
                display_bottom.textContent = print;
            }else{
                display_bottom.textContent += print;
                if(internal === '0'){
                    internal = print;
                }else{
                internal += print;
                }
            }
            console.log(internal);
        }
    })
})
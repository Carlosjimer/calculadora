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
El botón M+ guarda en localStorage el contenido del display para que continue presente aun apando la calculadora.
Además modificara la clase en CSS del elemento display_top para que aparezca cuando tengamos algún numero guardado.
*/
        if(buttons.id === 'm+'){
            localStorage.setItem('mem', display_bottom.textContent);
            display_top.classList.remove('oculto');
            console.log(localStorage.getItem('mem'));
        }

// El botón M- borra el localStorage
        if(buttons.id === 'm-'){
            localStorage.clear();
            display_top.classList.add('oculto');
        }

// El botón MRC mostrará la cifra guardada en la memoria, en caso de no tener nada guardado mostrará el valor de 0.
        if(buttons.id === 'mrc'){
            if(localStorage.getItem('mem') === null){
                display_bottom.textContent = 0;
            }else{
                display_bottom.textContent = localStorage.getItem('mem');
                internal += display_bottom.textContent;
                console.log(localStorage.getItem('mem'));
            }
        }

//El botón AC devuelve a 0 el display, además elimina los valores de operaciones anteriores.
        if(buttons.id === "ac"){
            display_bottom.textContent = '0';
            internal = '';
            return;
        }

//El botón C elimina el contenido del display, además lo borra de la memoria interna para que las operaciones puedan continuarse.
        if(buttons.id === "c"){
            internal = internal.slice(0, - display_bottom.textContent.length);
            display_bottom.textContent = '0';
            console.log(internal);
            return;
        }

//El botón = evalúa la memoria interna y la muestra en display. El valor queda almacenado por si se quiere continuar operando.
        if(buttons.id === "equal"){
            display_bottom.textContent = eval(internal);
            internal = display_bottom.textContent;
            console.log(internal);
        }

//Se recorren los botones de la clase op y en función de la operación que representan se trabaja en la memoria interna.
        if(buttons.className === "button op"){
            /*if(internal === ''){
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
            }else*/ if(internal.slice(-1) === '+' || internal.slice(-1) === '-' || internal.slice(-1) === '*' || internal.slice(-1) === '/'){
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
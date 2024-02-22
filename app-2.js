'use strict'

const display_top = document.getElementById('display_top');
const display_bottom = document.getElementById('display_bottom');
const button = document.querySelectorAll('button');
const sum = document.getElementById('sum');
let internal ='';

button.forEach(buttons => {
    buttons.addEventListener('click', () => {
        const print = buttons.textContent;

        if(buttons.id === "ac"){
            display_bottom.textContent = '0';
            internal = '';
            return;
        }

        if(buttons.id === "c"){
            display_bottom.textContent = '0';
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
                internal += print;
            }
            console.log(internal);
        }
    })
})
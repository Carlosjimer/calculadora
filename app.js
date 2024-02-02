'use strict'

const display_top = document.getElementById('display_top');
const display_bottom = document.getElementById('display_bottom');
const save = document.getElementById('m+');
const remove = document.getElementById('m-');
const memory = 'MEMORY';

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
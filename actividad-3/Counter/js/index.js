
const valor = document.getElementById('valor'); 
const btnIncrementar = document.getElementById('incrementar');
const btnDecrementar = document.getElementById('decrementar');
const btnResetear = document.getElementById('resetear');

btnIncrementar.addEventListener('click', () => {
    console.log(valor.innerHTML)
    let contador = valor.innerHTML;
    contador ++;
    valor.innerText = contador;
    
})

btnDecrementar.addEventListener('click', () => {
    console.log('hola' +valor.innerHTML)
    let contador = valor.innerHTML;
    contador --;
    valor.innerText = contador; 
})

btnResetear.addEventListener('click', () => {
    console.log('valor' +valor.innerHTML)
    valor.innerText = 0;
})


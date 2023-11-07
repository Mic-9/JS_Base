let corpo = document.querySelector('main');

let restrat = document.createElement('button');
restrat.innerHTML = '↻';
restrat.setAttribute('id', 'res')
corpo.appendChild(restrat);

let counter = document.createElement('p');
counter.textContent = '0';
corpo.appendChild(counter);

let plus = document.createElement('button');
plus.textContent = '+';
plus.setAttribute('class', 'segni')
plus.setAttribute('id', 'plu')
corpo.appendChild(plus);

let minus = document.createElement('button');
minus.textContent = '-';
minus.setAttribute('class', 'segni')
minus.setAttribute('id', 'min')
corpo.appendChild(minus);

corpo.addEventListener('click', event=>{
    if (event.target.id ==='plu'){
        increase();
    } if (event.target.id === 'min'){
        decrease();
    } if (event.target.id === 'res'){
        toZero();
    }
})

function increase(){
    let num = (+counter.textContent);
    num++;
    counter.textContent = num;
};

function decrease(){
    let num = (+counter.textContent);
    num--;
    counter.textContent = num;
};

function toZero(){
    counter.textContent = '0';
}

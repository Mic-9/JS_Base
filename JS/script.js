let corpo = document.querySelector('main');

let restrat = document.createElement('button');
restrat.innerHTML = '↻';
corpo.appendChild(restrat);

let counter = document.createElement('p');
counter.textContent = '0';
corpo.appendChild(counter);

let plus = document.createElement('button');
plus.textContent = '+';
plus.setAttribute('class', 'segni')
corpo.appendChild(plus);

let minus = document.createElement('button');
minus.textContent = '-';
minus.setAttribute('class', 'segni')
corpo.appendChild(minus);



function increase(){
    let num = (+counter.textContent);
    num++;
    counter.textContent = num;
};
plus.addEventListener( 'click', ()=>{
    increase();
})

function decrease(){
    let num = (+counter.textContent);
    num--;
    counter.textContent = num;
};
minus.addEventListener( 'click', ()=>{
    decrease();
})

function toZero(){
    counter.textContent = '0';
}
restrat.addEventListener( 'click', ()=>{
    toZero();
})
let corpo = document.querySelector('main');
corpo.setAttribute('id', 'corpo')


function addBtn (corpo, classe, id, innerHTML){
    let btn = document.createElement('button');
    btn.className = classe;
    btn.id = id;
    btn.innerHTML = innerHTML
    corpo.appendChild(btn)
}


addBtn(document.getElementById('corpo'), '', 'res', '↻');

let counter = document.createElement('p');
counter.textContent = '0';
corpo.appendChild(counter);

addBtn(document.getElementById('corpo'), 'segni', 'plu', '+');

addBtn(document.getElementById('corpo'), 'segni', 'min', '-');

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
    let num = (counter.innerHTML);
    num++;
    counter.innerHTML = num;
};

function decrease(){
    let num = (counter.innerHTML);
    num--;
    counter.innerHTML = num;
};

function toZero(){
    counter.innerHTML = '0';
}

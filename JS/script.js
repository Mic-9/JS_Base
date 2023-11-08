let corpo = document.querySelector('main');
corpo.setAttribute('id', 'corpo')


function addElem(corpo, typeElem, classe, id, innerHTML){
    let Elem = document.createElement(typeElem);
    Elem.className = classe;
    Elem.id = id;
    Elem.innerHTML = innerHTML
    corpo.appendChild(Elem)
}


addElem(document.getElementById('corpo'), 'button', '', 'res', '↻');

let counter = document.createElement('p');
counter.textContent = '0';
corpo.appendChild(counter);

addElem(document.getElementById('corpo'), 'button', 'segni', 'plu', '+');

addElem(document.getElementById('corpo'), 'button', 'segni', 'min', '-');

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

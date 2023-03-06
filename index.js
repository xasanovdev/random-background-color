const title = document.querySelector('.background__color-title');
const button = document.querySelector('.random__button');
const text__copy = document.querySelector('.copy__text');
const tooltip = document.querySelector('.tooltip');
const modal = document.querySelector('.modal')
const modal__btn = document.querySelector('.modal__btn')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

button.addEventListener('click',() => {
    title.value = `rgb(${getRndInteger(0,255)},${getRndInteger(0,255)},${getRndInteger(0,255)})`
    document.body.style.backgroundColor = `${title.value}`;
})

text__copy.addEventListener('click',() => {
    title.select();
    title.setSelectionRange(0,99999);
    navigator.clipboard.writeText(title.value);

    if (title.value == 'rgb(red,green,blue)'){
        modal.classList.add('active');
        document.body.style.backgroundColor = '#444';
    }else {
        tooltip.classList.add('active');
        setTimeout(()=> {
            tooltip.classList.remove('active');
        },600)
    }
})
modal__btn.addEventListener('click',() => {
    modal.classList.remove('active');
    document.body.style.backgroundColor = '#fff';
})


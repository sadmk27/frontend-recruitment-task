const btn = document.querySelector('button');
const popupDiv = document.querySelector('.popup');
const module = document.querySelector('.module');
const closeBtn = document.querySelector('.close');
const span = document.querySelector('.clicks');
const body = document.querySelector('body');
let x=0;

const popup = () => {
    if(!popupDiv.classList.contains('show')){
        popupDiv.classList.add('show');
        module.style.opacity='0.5';
        body.style.background='#121212';
        x++;
        span.textContent=x;
    }
}
const popupClose =() =>{
    popupDiv.classList.remove('show');
    module.style.opacity='1';
    body.style.background='#FFFFFF';
}

const clickOver = () => {
    if(!popupDiv.classList.contains('show')){
        popupDiv.classList.remove('show');
    }
}

btn.addEventListener('click',popup);
document.addEventListener('keyup',(e)=>{
    if(e.key==='Escape'){
        popupDiv.classList.remove('show');
        module.style.opacity='1';
        body.style.background='#FFFFFF';
    }
});
closeBtn.addEventListener('click',popupClose);
/*document.addEventListener('click',(e)=>{
    if(!e.contains(e.target)){
        
    }
});*/


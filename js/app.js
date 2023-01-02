const button_open = document.querySelector('.header__toggle');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');

if(button_open){
    button_open.addEventListener('click', () =>{
        nav.classList.toggle('activo');
    });
}

const linkAction = () =>{
    nav.classList.remove('activo');
}
navLink.forEach(n => n.addEventListener('click', linkAction))
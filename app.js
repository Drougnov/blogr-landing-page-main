const nav = document.querySelector('nav');
const toggleHamMenu = document.querySelector('.nav__menu');
toggleHamMenu.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})
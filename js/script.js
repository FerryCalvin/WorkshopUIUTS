let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let titan = document.getElementById('titan');
let mikasa = document.getElementById('mikasa');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    titan.style.top = value * -0.25 + 'px';
    mikasa.style.top = value * -0.25 + 'px';
});
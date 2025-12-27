let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

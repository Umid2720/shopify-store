const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('burger-menu');

menuBtn.addEventListener('click', () => {
    navbar.style.display = 'flex'
    navbar.classList.add('navbar-mobile')
    console.log(navbar.classList);
})


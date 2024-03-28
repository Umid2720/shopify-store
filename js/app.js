const menu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('burger-menu');
const spans = document.querySelectorAll('#burger-menu span');

menuBtn.addEventListener('click', () => {

    if (menu.classList.contains('down')) {
        spans[1].classList.remove('hidden');
        menu.classList.remove('down');
        menuBtn.style.position = 'absolute'


        spans.forEach(span => {
            span.style.transform = "rotate(0)";
            span.style.backgroundColor = "#000";
        });

        spans[2].style.top = '0';

        return 0;
    }

    spans[0].style.transform = "rotate(-45deg)";
    spans[1].classList.add('hidden');
    spans[2].style.transform = "rotate(45deg)";
    spans[2].style.top = "-6px";

    spans.forEach(span => {
        span.style.backgroundColor = "#fff"
    });

    menu.classList.add('down')
    menuBtn.style.position = 'fixed'

})


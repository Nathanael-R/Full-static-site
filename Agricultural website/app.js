const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.left-side')
    const navLinks = document.querySelectorAll('.left-side li');
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('left-side-active')

        navLinks.forEach((link, index) => {
            burger.classList.toggle('toggle')
        });

    });
}

navSlide();
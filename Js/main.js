let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-item');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-item[href*=' + id + ']').classList.add('active');
            });
        };
    })
}

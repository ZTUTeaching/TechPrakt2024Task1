const header = document.querySelector('header');
window.onscroll = function () {
    if (window.scrollY > header.offsetTop)
        header.classList.add('sticky');
    else
        header.classList.remove('sticky');
};

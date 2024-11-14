// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.querySelector('.scrollbutton');
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


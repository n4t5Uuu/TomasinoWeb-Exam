// Select the hamburger and the navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle the 'show' class on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

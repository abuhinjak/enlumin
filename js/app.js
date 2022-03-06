// Mobile Menu 
const navSlide = () => {
  const mobileMenu = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav-links-wrapper");
  const navWrapper = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

    // Toggle Nav
  mobileMenu.addEventListener("click", () => {
    // Hamburger Animation
    mobileMenu.classList.toggle("is-active");
    navWrapper.classList.toggle("mobile-active");
  });
}
navSlide();
// End Mobile Menu
// Docs Menu
const docs = document.querySelector('.docs-main');
const tabs = document.querySelectorAll('.tab-item');
const cards = document.querySelectorAll('.card');

docs.addEventListener('click', function(e) {
  	e.preventDefault();
    const id = e.target.dataset.id;

    if(id) {
      tabs.forEach(function(tab){
        tab.classList.remove('text-primary');
        e.target.classList.add('text-primary');
      });

      cards.forEach(function(card){
        card.classList.remove('active');
      });

      const card = document.getElementById(id);
      card.classList.add('active');
    }
});
// End Docs Menu


// Sticky Navbar
window.addEventListener('scroll', function() {
  let nav = document.querySelector('.navbar');
  nav.classList.toggle('sticky', window.scrollY > 0);
});
// End Sticky Navbar


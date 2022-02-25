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
    // Animate Links
  // navLinks.forEach((link, index) => {
  //   if(link.style.animation) {
  //     link.style.animation = "";
  //   } else {
  //     link.style.animation = `navLinkFade .7s ease forwards ${index / 7 + 1.4}s`;
  //   }
  // });
  });

  // Close menu when clicking outside

 document.addEventListener('click', function(event) {
  if (event.target !== headerNav && !headerNav.contains(event.target)) {
      // hide the menu
    nav.classList.remove("mobile-active");
    mobileMenu.classList.remove("toggle");
  }

  document.onclick = function(e) {
    if(e.target !== mobileMenu && e.target !== navLinks) 
  {
    mobileMenu.classList.remove('toggle');
    nav.classList.remove('mobile-active')
  } 
  }
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


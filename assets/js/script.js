// hamburger button logic start

  // Wait until the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    menu.addEventListener('click', function () {
      // Toggle the class to show or hide the navbar
      navbar.classList.toggle('active');

      // Toggle the icon between bars and times (optional)
      menu.classList.toggle('fa-bars');
      menu.classList.toggle('fa-times');
    });
  });


 
 
 
 
 // Typing effect for hero section
var typeEffect = document.getElementById("typing"); // typing should be in quotes
var typed = new Typed(typeEffect, {
  strings: [
    '<strong>Software Development.</strong>',
    '<strong>Frontend Development.</strong>',
    '<strong>Backend Development.</strong>'
  ],
  typeSpeed: 50,
  backSpeed: 60,
  loop: true,
  showCursor: false
});








//  script fot bottom to top button
 const scrollTopBtn = document.getElementById("scroll-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("active");
    } else {
      scrollTopBtn.classList.remove("active");
    }
  });
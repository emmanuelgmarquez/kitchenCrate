"use strict";

/* page change animation */
barba.init({
  sync: true,
  transitions: [{
    leave: function leave(data) {
      return regeneratorRuntime.async(function leave$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('leaving page animation');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    enter: function enter(data) {
      return regeneratorRuntime.async(function enter$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('entering page animation');

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]
});
/* testimonial slider */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
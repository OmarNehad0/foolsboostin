jQuery(document).ready(function ($) {
  
 // mmmenu
 $('#menu').mmenu();
 // sticky





  var $carousel = $('.brtpmj_grid_containers');
  
  // Wait a bit to let plugin initialize slick
  setTimeout(function(){
    if ($carousel.hasClass('slick-initialized')) {
      $carousel.slick('unslick');
    }

    $carousel.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }, 1000);




});


document.addEventListener("DOMContentLoaded", () => {
  // Fade-in bij pageload
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

  // IntersectionObserver voor elementen
  const targets = document.querySelectorAll(  ".service_card, .tio_title, .about_sec, .footer, ul.products li.product");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // één keer laten animeren
      }
    });
  }, { threshold: 0.2 });

  targets.forEach(el => observer.observe(el));
});


document.addEventListener('DOMContentLoaded', function() {
  jQuery(document.body).on('added_to_cart', function() {
    const target = document.querySelector('.mini-cart-box');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


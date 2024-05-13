$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  const clickableDiv = document.getElementById('new-1');

clickableDiv.addEventListener('click', () => {
  window.open('https://ranjithvettayan.github.io/new-india-expert-tailoring/new%20project/index.html', '_blank');
});
const clickableDiv_1 = document.getElementById('new-2');

clickableDiv_1.addEventListener('click', () => {
  window.open('https://ranjithvettayan.github.io/Cookie-House/', '_blank');
});
const clickableDiv_2 = document.getElementById('new-3');

clickableDiv_2.addEventListener('click', () => {
  window.open('https://ranjithvettayan.github.io/calculator', '_blank');
});
const clickableDiv_3 = document.getElementById('new-4');

clickableDiv_3.addEventListener('click', () => {
  window.open('https://ranjithvettayan.github.io/Food_Recipe/', '_blank');
});

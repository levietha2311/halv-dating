window.onscroll = function () { myFunction() };

var headermenu = document.getElementById("headermenu");
var sticky = headermenu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 2.5 * sticky) {
    headermenu.classList.add("sticky");
    headermenu.classList.add("w3-animate-opacity");
  } else {
    headermenu.classList.remove("w3-animate-opacity");
  }
  if (window.pageYOffset <= sticky) {
    headermenu.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $('.last-added-profiles-carolsel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  $('.story-carosel').owlCarousel({
    loop: true,
    margin: 10,
    // nav: true,
    dots: true,
    // dotsData: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
});


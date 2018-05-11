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

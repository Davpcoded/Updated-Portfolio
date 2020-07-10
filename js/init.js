$(document).ready(function () {
  $(".carousel").carousel();

  setInterval(function () {
    $(".carousel").carousel("next");
  }, 4000);

  $(".carousel.carousel-slider").carousel({
    indicators: true,
  });

  $(".sidenav").sidenav();

  $(".parallax").parallax();
});

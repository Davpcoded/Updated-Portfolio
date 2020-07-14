$(document).ready(function () {
  $(".carousel").carousel();

  setInterval(function () {
    $(".carousel").carousel("next");
  }, 4000);

  $(".sidenav").sidenav();

  $(".parallax").parallax();

  $(".modal").modal();
});

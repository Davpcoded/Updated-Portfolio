$(document).ready(function () {
  function openLink(e) {
    e.preventDefault();
    window.open(this.href);
  }

  $(".follow-href").on("click", openLink);
});

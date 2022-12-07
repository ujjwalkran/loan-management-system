$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navjs").css("background", "blue");
    } else {
      $(".navjs").css("background", "#333");
    }
  });
});

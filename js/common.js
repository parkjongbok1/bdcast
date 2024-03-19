$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});

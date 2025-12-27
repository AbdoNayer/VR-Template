// Window Load screen
$(window).on("load", function () {
  // Loading Page
  $(".loading").fadeOut(500, function () {
    $(".loading-wave").delay(1000).fadeOut(500);
  });
  $("body").css("overflow-y", "auto");
});

$(document).ready(function () {

  // Active Item On Click In Nav
  $(document).on("click", "nav ul li", function (e) {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

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
  // Active Item On Click In Nav
  $(document).on("click", "nav ul li a", function (e) {
    // Remove active class from all links
    $("nav ul li a").removeClass("active gradient-link");
    // Add active class to clicked link
    $(this).addClass("active gradient-link");
  });

  // Animation Trigger
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-animation");
      }
    });
  }, observerOptions);

  document.querySelectorAll('[class^="content-"]').forEach((section) => {
    observer.observe(section);
  });

  // Scrollspy for Nav
  const navObserverOptions = {
    threshold: 0.5,
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        if (id) {
          $("nav ul li a").removeClass("active gradient-link");
          $(`nav ul li a[href="#${id}"]`).addClass("active gradient-link");
        }
      }
    });
  }, navObserverOptions);

  document.querySelectorAll(".scroll-content").forEach((section) => {
    navObserver.observe(section);
  });
});

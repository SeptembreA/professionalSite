// Scroll to top
$(window).scroll(function() {
  const height = $(window).scrollTop();
  if (height > 100) {
    $('#scrollToTop').fadeIn();
  } else {
    $('#scrollToTop').fadeOut();
  }
});

$(document).ready(function() {
  // Scroll to top
  $('#scrollToTop').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  // Smooth scroll
  $('a').on('click', function(e) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      e.preventDefault();
      // eslint-disable-next-line prefer-destructuring
      const hash = this.hash;
      $('html, body').animate({
          scrollTop: $(hash).offset().top,
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

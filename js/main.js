/* Landing Page - Scroll Show/Hide */
$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    // get current distance from top of viewport
    var currentTop = $(window).scrollTop();
    // define the header height here
    var headerHeight = 50;
    // if user has scrolled past header, initiate the scroll up/scroll down hide show effect
    if( $(window).scrollTop() > headerHeight ) {
      if (currentTop < this.previousTop) {
        $(".masthead").removeClass("hide");
        $(".masthead").addClass("show");
        $(".header").removeClass("hide");
        $(".header").addClass("show");
      } else {
        $(".masthead").removeClass("show");
        $(".masthead").addClass("hide");
        $(".header").removeClass("show");
        $(".header").addClass("hide");
      }
    }
    this.previousTop = currentTop;
});


$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });

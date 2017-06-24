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
        //$(".sidebar em").text("Up");
        $(".header").removeClass("hide");
        $(".header").addClass("show");
      } else {
       // $(".sidebar em").text("Down");
        $(".header").removeClass("show");
        $(".header").addClass("hide");
      }
    }
    this.previousTop = currentTop;
});
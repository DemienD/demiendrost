/* Een beetje van mezelf, een een beetje van Maggi*.
  *Martijn en Queen   */
$(document).ready(function () {
    $(window).scroll(function() {
        var homeLink = $('#header');
        var height = $(window).height();
        var scroll = $(window).scrollTop();
      
        if (scroll > height) {
            homeLink.css("position", 'fixed').css("top", 0).css("background-color", 'rgba( 255, 255, 255, 0.8)');
          
        } else {
            homeLink.css("position", '').css("top", '').css("background-color", '')
        }
    });
});
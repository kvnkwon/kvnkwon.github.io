$(document).ready(function() {

   window.setHashLink = 0;

   $(".home-body-image").mouseover(function () {
      $(this).attr('src', $(this).data("hover"));
    }).mouseout(function () {
      $(this).attr('src', $(this).data("src"));
    });

});

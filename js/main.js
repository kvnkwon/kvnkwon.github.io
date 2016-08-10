$(document).ready(function() {

  $(".identity").typed({
    strings: ["a developer", "a filmmaker", "an artist", "a designer", "a creative thinker", "a tech enthusiast", "an avid gamer", "a basketball lover", "a big dream chaser", "building the next big thing"],
    typeSpeed: 1
  });

   window.setHashLink = 0;

  $(".project-tab").hover(
    function() {
      $(this).css('color', '#333');
      $(this).parent().css('background-color', '#fff');
    }, function () {
      $(this).css('color', '#fff');
      $(this).parent().css('background-color', 'transparent');
    }

  );

});
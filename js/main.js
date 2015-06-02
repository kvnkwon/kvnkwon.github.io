$(document).ready(function() {

  $('.vidstock-img').hover(
    function () {
    $(".vidstock-title").show();
    },
    function () {
      $(".vidstock-title").hide();
    }
  );

  $('.reso-img').hover(
    function () {
    $(".reso-title").show();
    },
    function () {
      $(".reso-title").hide();
    }
  );

  $('.pulsar-img').hover(
    function () {
    $(".pulsar-title").show();
    },
    function () {
      $(".pulsar-title").hide();
    }
  );

  $('.coach-img').hover(
    function () {
    $(".coach-title").show();
    },
    function () {
      $(".coach-title").hide();
    }
  );

  $('a[href*=#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });


});
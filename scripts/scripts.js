

$(function() {
    $('.card0').hover(function() {
      $('.card0').css('cursor', 'pointer');  
      $('.btn0').css('background-color', '#f08080');
      $('.btn0').css('color', '#FFF');
    }, function() {
      // on mouseout, reset the background colour
      $('.btn0').css('background-color', 'inherit');
      $('.btn0').css('color', '#f08080');
    });

    $('.card1').hover(function() {
        $('.card1').css('cursor', 'pointer');  
        $('.btn1').css('background-color', '#f08080');
        $('.btn1').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn1').css('background-color', 'inherit');
        $('.btn1').css('color', '#f08080');
      });

      $('.card1').hover(function() {
        $('.card1').css('cursor', 'pointer');  
        $('.btn1').css('background-color', '#f08080');
        $('.btn1').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn1').css('background-color', 'inherit');
        $('.btn1').css('color', '#f08080');
      });

      $('.card2').hover(function() {
        $('.card2').css('cursor', 'pointer');  
        $('.btn2').css('background-color', '#f08080');
        $('.btn2').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn2').css('background-color', 'inherit');
        $('.btn2').css('color', '#f08080');
      });

      $('.card3').hover(function() {
        $('.card3').css('cursor', 'pointer');  
        $('.btn3').css('background-color', '#f08080');
        $('.btn3').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn3').css('background-color', 'inherit');
        $('.btn3').css('color', '#f08080');
      });
    

      $(function() {
        var path = window.location.pathname.substring(1);
        $('.nav>li>a[href="' + path + '"]').parent().addClass('active');

    });

    


  });


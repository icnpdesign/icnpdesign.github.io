const primaryColor = '#db6565';

$(function() {
    $('.card0').hover(function() {
      $('.card0').css('cursor', 'pointer');  
      $('.btn0').css('background-color', primaryColor);
      $('.btn0').css('color', '#FFF');
    }, function() {
      // on mouseout, reset the background colour
      $('.btn0').css('background-color', 'inherit');
      $('.btn0').css('color', primaryColor);
    });

    $('.card1').hover(function() {
        $('.card1').css('cursor', 'pointer');  
        $('.btn1').css('background-color', primaryColor);
        $('.btn1').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn1').css('background-color', 'inherit');
        $('.btn1').css('color', primaryColor);
      });

      $('.card1').hover(function() {
        $('.card1').css('cursor', 'pointer');  
        $('.btn1').css('background-color', primaryColor);
        $('.btn1').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn1').css('background-color', 'inherit');
        $('.btn1').css('color', primaryColor);
      });

      $('.card2').hover(function() {
        $('.card2').css('cursor', 'pointer');  
        $('.btn2').css('background-color', primaryColor);
        $('.btn2').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn2').css('background-color', 'inherit');
        $('.btn2').css('color', primaryColor);
      });

      $('.card3').hover(function() {
        $('.card3').css('cursor', 'pointer');  
        $('.btn3').css('background-color', primaryColor);
        $('.btn3').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn3').css('background-color', 'inherit');
        $('.btn3').css('color', primaryColor);
      });
    

      $(function() {
        var path = window.location.pathname.substring(1);
        $('.nav>li>a[href="' + path + '"]').parent().addClass('active');

    });

    


  });


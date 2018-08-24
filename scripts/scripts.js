$(function() {
    $('.card0').hover(function() {
      $('.card0').css('cursor', 'pointer');  
      $('.btn0').css('background-color', '#E6ADAD');
      $('.btn0').css('color', '#FFF');
    }, function() {
      // on mouseout, reset the background colour
      $('.btn0').css('background-color', 'inherit');
      $('.btn0').css('color', '#E6ADAD');
    });

    $('.card1').hover(function() {
        $('.card1').css('cursor', 'pointer');  
        $('.btn1').css('background-color', '#E6ADAD');
        $('.btn1').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn1').css('background-color', 'inherit');
        $('.btn1').css('color', '#E6ADAD');
      });

      $('.card1').hover(function() {
        $('.card1').css('cursor', 'pointer');  
        $('.btn1').css('background-color', '#E6ADAD');
        $('.btn1').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn1').css('background-color', 'inherit');
        $('.btn1').css('color', '#E6ADAD');
      });

      $('.card2').hover(function() {
        $('.card2').css('cursor', 'pointer');  
        $('.btn2').css('background-color', '#E6ADAD');
        $('.btn2').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn2').css('background-color', 'inherit');
        $('.btn2').css('color', '#E6ADAD');
      });

      $('.card3').hover(function() {
        $('.card3').css('cursor', 'pointer');  
        $('.btn3').css('background-color', '#E6ADAD');
        $('.btn3').css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $('.btn3').css('background-color', 'inherit');
        $('.btn3').css('color', '#E6ADAD');
      });
    

      $(function() {
        var path = window.location.pathname.substring(1);
        $('.nav>li>a[href="' + path + '"]').parent().addClass('active');

    });

    


  });


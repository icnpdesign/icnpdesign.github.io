const primaryColor = '#db6565';
let buttons = ['.btn0', '.btn1', '.btn2', '.btn3', '.btn4', '.btn5'];

 $(document).ready(function(){
/*   let cards = ['.card0', '.card1', '.card2', '.card3', '.card4', '.card5'];

  for (i = 0; i < cards.length; i++) {
    console.log('running');
    console.log(cards[i]);

    $(function() {
      $(cards[i]).hover(function() {
        console.log('test');
        $(cards[i]).css('cursor', 'pointer');  
        $(buttons[i]).css('background-color', primaryColor);
        $(buttons[i]).css('color', '#FFF');
      }, function() {
        // on mouseout, reset the background colour
        $(buttons[i]).css('background-color', 'inherit');
        $(buttons[i]).css('color', primaryColor);
      });
  }) */

  $(function() {
    $('.card0').hover(function() {
      $('.card0').css('cursor', 'pointer');  
      $('.btn0').css('background-color', primaryColor);
      $('.btn0').css('color', '#FFF');
    }, function() {
      //on mouseout, reset the background colour
      $('.btn0').css('background-color', 'inherit');
      $('.btn0').css('color', primaryColor);
    });

    $('.card1').hover(function() {
        $('.card1').css('cursor', 'pointer');  
        $('.btn1').css('background-color', primaryColor);
        $('.btn1').css('color', '#FFF');
      }, function() {
        //on mouseout, reset the background colour
        $('.btn1').css('background-color', 'inherit');
        $('.btn1').css('color', primaryColor);
      });

      $('.card1').hover(function() {
        $('.card1').css('cursor', 'pointer');  
        $('.btn1').css('background-color', primaryColor);
        $('.btn1').css('color', '#FFF');
      }, function() {
        //on mouseout, reset the background colour
        $('.btn1').css('background-color', 'inherit');
        $('.btn1').css('color', primaryColor);
      });

      $('.card2').hover(function() {
        $('.card2').css('cursor', 'pointer');  
        $('.btn2').css('background-color', primaryColor);
        $('.btn2').css('color', '#FFF');
      }, function() {
        //on mouseout, reset the background colour
        $('.btn2').css('background-color', 'inherit');
        $('.btn2').css('color', primaryColor);
      });

      $('.card3').hover(function() {
        $('.card3').css('cursor', 'pointer');  
        $('.btn3').css('background-color', primaryColor);
        $('.btn3').css('color', '#FFF');
      }, function() {
        //on mouseout, reset the background colour
        $('.btn3').css('background-color', 'inherit');
        $('.btn3').css('color', primaryColor);
      });

      $('.card4').hover(function() {
        $('.card4').css('cursor', 'pointer');  
        $('.btn4').css('background-color', primaryColor);
        $('.btn4').css('color', '#FFF');
      }, function() {
        //on mouseout, reset the background colour
        $('.btn4').css('background-color', 'inherit');
        $('.btn4').css('color', primaryColor);
      });
    
      $('.card5').hover(function() {
        $('.card5').css('cursor', 'pointer');  
        $('.btn5').css('background-color', primaryColor);
        $('.btn5').css('color', '#FFF');
      }, function() {
        //on mouseout, reset the background colour
        $('.btn5').css('background-color', 'inherit');
        $('.btn5').css('color', primaryColor);
      });

      $('.card6').hover(function() {
        $('.card6').css('cursor', 'pointer');  
        $('.btn6').css('background-color', primaryColor);
        $('.btn6').css('color', '#FFF');
      }, function() {
        //on mouseout, reset the background colour
        $('.btn6').css('background-color', 'inherit');
        $('.btn6').css('color', primaryColor);
      });
    });
    
    var getMax = function(){
        return $(document).height() - $(window).height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
}) ;





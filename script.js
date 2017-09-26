function main() {
    $('.content2').hide();
    $('.content3').hide();
  var setHeight = $('.content1').outerHeight(); 
 $('.absolutefix').css({'height': setHeight+"px" });
  
    $('.tab1').on('click', function() {
      var setHeight = $('.content1').outerHeight(); 
 $('.absolutefix').css({'height': setHeight+"px" });
      
       $('.content1').show();
       $('.content2').hide();
       $('.content3').hide();
    });
  
  $('.tab2').on('click', function() {
    var setHeight = $('.content2').outerHeight(); 
 $('.absolutefix').css({'height': setHeight+"px" });
    
       $('.content2').show();
       $('.content1').hide();
       $('.content3').hide();
    });
 
  $('.tab3').on('click', function() {
    var setHeight = $('.content3').outerHeight(); 
 $('.absolutefix').css({'height': setHeight+"px" });
    
       $('.content3').show();
       $('.content1').hide();
       $('.content2').hide();
    });
  
}

$(document).ready(main); 

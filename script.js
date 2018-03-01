function main() {
//Only display first section
    $('.content2').hide();
    $('.content3').hide();
  var setHeight = $('.content1').outerHeight(); 
 $('.absolutefix').css({'height': setHeight+"px" });
    
//On click of tab, hide all tabs and then only show the clicked tab 
    $('.tab').on('click', function() {
      var setHeight = $(this).outerHeight(); 
 $('.absolutefix').css({'height': setHeight+"px" });
      
       $('.content1').hide();
       $('.content2').hide();
       $('.content3').hide();
       $(this).show();
    });

  
}

$(document).ready(main); 

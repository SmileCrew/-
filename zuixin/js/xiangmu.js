
$(function(){
    
  var li = $(' ul#nav_3>li');
  var list = $('ul>li ul.nav_4');

  $.each(li,function(index,value){
      
    $(this).hover(function(){

        list.eq(index).slideDown();
    },function(){
        list.eq(index).slideUp();
    });  

  });

});
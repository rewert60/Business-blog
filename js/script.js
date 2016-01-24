$(document).ready(function() {
    
    $('#nav-icon').toggle (
  function() {
    $("#block-content-right").fadeIn(200);
  },
  function() {
    $("#block-content-right").fadeOut(200);
  });
  
 $("#blog-categories").click(function(){
        
        $("#category-list").slideToggle(200);               
        
    });    

 $("#blog-archives").click(function(){
        
        $("#archives-list").slideToggle(200);               
        
    }); 
       
});
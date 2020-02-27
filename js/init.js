(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function openNav() {
  $("#myNav").css("width","100%");
}

function closeNav(){
  $("#myNav").css("width","0%");
}


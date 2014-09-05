document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });
  $(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
    navigation : true,
    singleItem : true,
    transitionStyle : "fade"
  });
 
});
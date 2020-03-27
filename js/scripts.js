$(document).ready(function() {
  $("form#main").submit(function(event) {
    var choice = $("select#choice").val();
    if (choice === 'yes') {
      $("#interest").show();
    } else  {
      $("#nointerest").show();
    }

    event.preventDefault();
    
  });
});


  //$("form#quiz").submit(function(event) {
    //event.preventDefault()
    //var name = $("input#name").val();
    //var age = parseInt($("input#age").val());
   // var gender = $("select#gender").val();
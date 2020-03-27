$(document).ready(function() {
  $("form#main").submit(function(event) {
    event.preventDefault();
    var choice = $("select#choice").val();
    if (choice === 'yes') {
      $("#interest").show();
      $("#main").hide();
      } else {
      $("#nointerest").show();
      $("#main").hide();
      return;
    }
    
    
  });

  $("form#quiz").submit(function(event) {
    event.preventDefault()
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var day = $("input:radio[name=day]:checked").val();
    var todo = $("input:radio[name=todo]:checked").val();
    var purpose = $("input:radio[name=purpose]:checked").val();

    console.log(name, age, gender, day, todo, purpose)
    //if (age <= 7){
      //alert("You must be over 7 years old")
      //return;
    //}
    if ($("#prefer").val() === "website") {
    $("#javascript").removeClass("hidden");
  } else if ($("#prefer").val() === "apple") {
    $("#swift").removeClass("hidden");
  } else {
    $("#python").removeClass("hidden");
    
  }

    
    




    
    
  });
  
});

$(document).ready(function() {
  $("form#first").click(function(event) {
    event.preventDefault();
    var choice = $("select#choice").val();
    if (choice === 'yes') {
      $("#interest").show();
      $("#first").hide();
      } else {
      $("#nointerest").show();
      $("#first").hide();
      return;
    }
    
    
  });

  $("form#quiz").submit(function(event) {
    event.preventDefault()
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var day = $("input:radio[name=day]:checked").val();
    var purpose = $("input:radio[name=purpose]:checked").val();
      if (age <= 7) {
        alert("You must be over 7 years old")
        return;
      } else if ($("#age").val() == "") {
        alert("Enter you age, please");
        return;
      } else if ($("#name").val() == "") {
        alert("Enter you name, please");
        return;
      }
      

    console.log(name, age, gender, day, purpose)
    
    if ($("#prefer").val() === "website") {
      $("#javascript").removeClass("hidden");
      $("form#quiz").hide();

    } else if ($("#prefer").val() === "apple") {
      $("#swift").removeClass("hidden");
      $("form#quiz").hide();

    } else {
      $("#python").removeClass("hidden");
      $("form#quiz").hide();
    }

    


  


  

    
    




    
    
  });
  
});

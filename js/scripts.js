$(document).ready(function() {
  $("form#main").submit(function(event) {
    var choice = $("select#choice").val();
    if (choice === 'yes') {
      $("#interest").show();
      $("#main").hide();
      } else {
      $("#nointerest").show();
      $("#main").hide();
    }

    event.preventDefault();
    return;
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
  });
});

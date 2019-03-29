$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var animal = $('input[name=animal]:checked').val();

    if(animal === "Seals") {
      $("#Eagles").hide();
      $("#Monkeys").hide();
      $("#infoSeals").show();
    } else if(animal === "Eagles") {
      $("#Monkeys").hide();
      $("#infoSeals").hide();
      $("#Eagles").show();
    } else if(animal === "Monkeys") {
      $("#Eagles").hide();
      $("#infoSeals").hide();
      $("#Monkeys").show();
    } else {

    };

  });
  });

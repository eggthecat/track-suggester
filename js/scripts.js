// $(document).ready(function() {
//   $("#form").submit(function(event) {
//     event.preventDefault();
//     var animal = $('input[name=animal]:checked').val();
//
//     if(animal === "Seals") {
//       $("#Eagles").hide();
//       $("#Monkeys").hide();
//       $("#infoSeals").show();
//     } else if(animal === "Eagles") {
//       $("#Monkeys").hide();
//       $("#infoSeals").hide();
//       $("#Eagles").show();
//     } else if(animal === "Monkeys") {
//       $("#Eagles").hide();
//       $("#infoSeals").hide();
//       $("#Monkeys").show();
//     } else {
//
//     };
//
//   });
//   });

$(function() {

  $("form#politics").submit(function(event) {
    event.preventDefault();
    var qOne = parseInt($("#qOne").val());
    var qTwo = parseInt($("#qTwo").val());
    var qThree = parseInt($("#qThree").val());

    if(qOne === 1 && qTwo === 1 && qThree === 1) {
      $("#Liberal").show();
      $("#Conservative").hide();
      $("#Moderate").hide();
    } else if (qOne === 2 && qTwo === 2 && qThree === 2) {
      $("#Conservative").show();
      $("#Liberal").hide();
      $("#Moderate").hide();
    } else {
      $("#Moderate").show();
      $("#Liberal").hide();
      $("#Conservative").hide();

    };

  });




});

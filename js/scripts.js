$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var coder = $('input[name=coder]:checked').val();

    if(coder === "Young") {
      $("#Error").hide();
      $("#Apple").hide();
      $("#Young").show();
      $("#Micro").hide();
      $("#Android").hide();
    } else if(coder === "Error") {
      $("#Apple").hide();
      $("#Young").hide();
      $("#Error").show();
      $("#Micro").hide();
      $("#Android").hide();
    } else if(coder === "Apple") {
      $("#Error").hide();
      $("#Young").hide();
      $("#Apple").show();
      $("#Mirco").hide();
      $("#Android").hide();
    } else if(coder === "Micro") {
      $("#Error").hide();
      $("#Young").hide();
      $("#Apple").show();
      $("#Micro").show();
      $("#Android").hide();
    } else if (coder === "Android") {
      $("#Error").hide();
      $("#Young").hide();
      $("#Apple").show();
      $("#Micro").hide();
      $("#Android").hide();
};
    });
  });

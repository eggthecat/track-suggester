$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var coder = $('input[name=animal]:checked').val();

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
    } else (coder === "Android") {
      $("#Error").hide();
      $("#Young").hide();
      $("#Apple").show();
      $("#Micro").hide();
      $("#Android").hide();
    }

    };

  });
  });

  // <form id="coderForm">
  //       <div class="buttons">
  //         <div class="radio">
  //           <label>
  //             <input type="radio" name="coder" value="Young" > I'm under 16
  //           </label>
  //         </div>
  //         <div class="radio">
  //           <label>
  //             <input type="radio" name="coder" value="Error"> I beleive the earth is flat
  //           </label>
  //         </div>
  //         <div class="radio">
  //           <label>
  //             <input type="radio" name="coder" value="Apple"> Apple is superior
  //           </label>
  //         </div>
  //         <div class="radio">
  //          <label>
  //            <input type="radio" name="coder" value="Micro" > Born and raised on Microsoft
  //          </label>
  //        </div>
  //        <div class="radio">
  //          <label>
  //            <input type="radio" name="coder" value="Android"> Android is King
  //          </label>
  //        </div>
  //           <br>
  //           <hr>
  //           <button type="submit" name="button">Explore</button>
  //           <!-- <p><input type="button" id="btncode" value="Präsentiere Die Antwort"></p> -->
  //         <hr>
  //         </div>
  //       </div>
  //     </form>
// $(function() {
//
//   $("form#programs").submit(function(event) {
//     event.preventDefault();
//     var qOne = parseInt($("#qOne").val());
//     var qTwo = parseInt($("#qTwo").val());
//     var qThree = parseInt($("#qThree").val());
//     var qFour = parseInt($("#qFour").val());
//     var qFive = parseInt($("#qFive").val());
//
//     if(qOne ===1) {
//       $("#Scratch").show();
//       $("#Swift").hide();
//       $("#Cscharp").hide();
//       $("#Android").hide();
//     } else if (qTwo === 1 || qTwo === 2) {
//       $("#Scratch").show();
//       $("#Swift").hide();
//       $("#Cscharp").hide();
//       $("#Android").hide();
//     } else if(qThree ===1) {
//       $("#Scratch").hide();
//       $("#Swift").show();
//       $("#Cscharp").hide();
//       $("#Android").hide();
//     } else if(qFour ===1) {
//       $("#Scratch").hide();
//       $("#Swift").hide();
//       $("#Cscharp").show();
//       $("#Android").hide();
//     } else(qFive ===1) {
//       $("#Scratch").hide();
//       $("#Swift").hide();
//       $("#Cscharp").hide();
//       $("#Android").show();
//     };
//   });

  //   if(qOne === 1 && qTwo === 1 && qThree === 1) {
  //     $("#Liberal").show();
  //     $("#Conservative").hide();
  //     $("#Moderate").hide();
  //   } else if (qOne === 2 && qTwo === 2 && qThree === 2) {
  //     $("#Conservative").show();
  //     $("#Liberal").hide();
  //     $("#Moderate").hide();
  //   } else {
  //     $("#Moderate").show();
  //     $("#Liberal").hide();
  //     $("#Conservative").hide();
  //
  //   };
  //
  // });




});

//<div class="results">
//   <div id="IOS">
//     <p>Your results indicate you might be interested in Scratch.</p>
//   </div>
//
//   <div id="IOS">
//     <p>It appears you might be interested in Swift.</p>
//   </div>
//
//   <div id="MOS">
//     <p>You should consider C#.</p>
//   </div>
//
//   <div id="AOS">
//     <p>It might benefit you to check out Koitlin.</p>
//   </div>
// </div>

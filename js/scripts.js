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
      $("#Apple").hide();
      $("#Micro").show();
      $("#Android").hide();
    } else if (coder === "Android") {
      $("#Error").hide();
      $("#Young").hide();
      $("#Apple").hide();
      $("#Micro").hide();
      $("#Android").show();
};
    });
  });

  <main class="container">
        <div class="survey">
        <h2>Which track is right for you?</h2>
  <!-- first question -->
        <form id="survey">
        <div class="form-group" id=qOne>
          1. What makes you the most curious?
          <div class="radio1">
            <label for="qOne">
              <input type="radio" name="qOne" value="pd1">
              How this website collects and stores data
            </label>
          </div>
          <div class="radio1">
            <label for="qOne">
              <input type="radio" name="qOne" value="cd1">
              How this website was made to look so sleek and beautiful
            </label>
          </div>
          <div class="radio1">
            <label for="qOne">
              <input type="radio" name="qOne" value="ja1">
              Neither--I just want to know if there's an app for this website that I can use on my phone
            </label>
          </div>
        </div>
        <br>
    <!-- second question -->
          <div class="form-group" id=qTwo>
            2. What do you want to do as a programmer?
            <div class="radio2">
              <label>
                <input type="radio" name="qTwo" value="cd2">
                I want to make websites look pretty
              </label>
            </div>
            <div class="radio2">
              <label>
                <input type="radio" name="qTwo" value="pd2">
                I want to do behind-the-scenes work, such as program databases
              </label>
            </div>
            <div class="radio2">
              <label>
                <input type="radio" name="qTwo" value="ja2">
                I want to make phone apps so I can sell them and become rich!
              </label>
            </div>
          </div>
            <br>
  <!-- third question -->
          <div class="form-group" id=qThree>
            3. Do you plan to or are you ok with relocating for your job?
            <div class="radio3">
              <label>
                <input type="radio" name="qThree" value="cd3">
                I would like to stay in Portland
              </label>
            </div>
            <div class="radio3">
              <label>
                <input type="radio" name="qThree" value="pd3">
                I plan on relocating after I graduate to chase the jobs
              </label>
            </div>
            <div class="radio3">
              <label>
                <input type="radio" name="qThree" value="ja3">
                I am open to it, but would prefer to stay put
              </label>
            </div>
          </div>
          <br>
  <!-- fourth question -->
          <div class="form-group" id=qFour>
            4. What is your preferred plaform?
            <div class="radio4">
              <label>
                <input type="radio" name="qFour" value="cd4">
                Computers
              </label>
            </div>
            <div class="radio4">
              <label>
                <input type="radio" name="qFour" value="ja4">
                Phones
              </label>
            </div>
            <div class="radio4">
              <label>
                <input type="radio" name="qFour" value="none">
                Typewriters
              </label>
          </div>
          </div>
            <br>
  <!-- fifth question -->
          <div class="form-group" id=qFive>
              5. How do you like to work?
              <div class="radio5">
                <label>
                  <input type="radio" name="qFive" value="cd5">
                  In teams! "Teamwork makes the dream work."
                </label>
              </div>
              <div class="radio5">
                <label>
                  <input type="radio" name="qFive" value="pd5">
                  I like to fly solo
                </label>
              </div>
              <div class="radio5">
                <label>
                  <input type="radio" name="qFive" value="ja5">
                  I am good in teams and working by myself
                </label>
              </div>
          </div>


        <button type="submit" class ="btn" name="button">Which track is right for me?</button>
        </form>
        </div>

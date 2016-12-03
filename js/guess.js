/** Shows results section */
function addResult() {
  addContent("noevent")
  var el = document.getElementById('nav-result');
  el.style.display = "block";
  el.style.animation = "slide-in 1s 1 forwards";
  el.style.WebkitAnimation = "slide-in 1s 1 forwards";

  var el = document.getElementById('results-section');
  el.style.display = "block";
  el.style.animation = "slide-in 3s 1 forwards";
  el.style.WebkitAnimation = "slide-in 3s 1 forwards";

  setTimeout(
    function(){
      var el = document.getElementById('nav-result');
      el.style.animation = "";
      el.style.transform = "";
      el.style.WebkitTransform = "";
    }
    , 1050);

}

function cleanQuizbox() {
  var myNode = document.getElementById("game-wrapper");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  };
};

function drawFixed() {

  var myNode = document.getElementById("game-wrapper");

  var t = document.createTextNode("Choose your interval to guess between");
  var p = document.createElement("p");
  p.appendChild(t);
  myNode.appendChild(p);

  var x = 1;
  var input = [];
  for (var i = 0; i < 2; i++) {
    input[i] = document.createElement("input");
    input[i].placeholder = x;
    x = x + 9;
    input[i].id = "gameinterval-" + i;
    input[i].style.margin = "10px"
    myNode.appendChild(input[i]);
    if (i == 0) {
      var t = document.createTextNode("-");
      var span = document.createElement("span");
      span.appendChild(t);
      myNode.appendChild(span);
    };
  };

  var t = document.createTextNode("START");
  var button = document.createElement("button");
  button.appendChild(t);
  button.style.fontSize = "1.85em";
  button.style.letterSpacing = "7px";
  button.style.fontWeight = "bold";
  button.style.display = "block";
  button.style.margin = "20px auto";
  button.id = "game-start-button";
  myNode.appendChild(button);





}


function playGame(type) {

  var gametypes = {
    'fixed': function () {
      cleanQuizbox();
      drawFixed();
    },
    'fluid': function () {
      cleanQuizbox();
      drawFluid();
    },
    'random': function () {
      cleanQuizbox();
      drawRandom();
    },
    'default': function () {
      alert("Opps!");
    }
  };

  (gametypes[type] || gametypes['default'])();

}

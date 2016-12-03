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


function playGame(type) {
  alert("hi")
}

/** TEST FUNCTION */
function iPlayedAGame() {
  addContent("noevent")
  document.getElementById('nav-result').style.display = "block";
  document.getElementById('nav-result').style.animation = "slide-in 1s 1 forwards";
  document.getElementById('nav-result').style.WebkitAnimation = "slide-in 1s 1 forwards";

  document.getElementById('results-section').style.display = "block";
  document.getElementById('results-section').style.animation = "slide-in 3s 1 forwards";
  document.getElementById('results-section').style.WebkitAnimation = "slide-in 3s 1 forwards";

  setTimeout(
    function(){
      document.getElementById('nav-result').style.animation = "";
      document.getElementById('nav-result').style.transform = "";
      document.getElementById('nav-result').style.WebkitTransform = "";
    }
    , 1001);

}

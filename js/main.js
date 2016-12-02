/** Main listeners */

window.onload = function() {
  var e = document.getElementsByClassName('wake-content');
  for (var i = 0; i < e.length; i++) {
    e[i].addEventListener('click', addContent);
  };

  var e = document.getElementsByTagName('button');
  for (var i = 0; i < e.length; i++) {
    e[i].addEventListener('click', iPlayedAGame);
  };
};



/* Functions */
function addContent(e) {
  console.log(e);
  if (e != "noevent") {
    var url = e.target.href;
    if (url === undefined) {
      url = e.target.baseURI;
    };
    e.preventDefault();
  };
  document.getElementById('about-section').style.display = "block";
  document.getElementById('about-section').style.animation = "slide-in 1s 1 forwards";
  document.getElementById('about-section').style.WebkitAnimation = "slide-in 1s 1 forwards";
  document.getElementById('main-footer').style.display = "block";
  document.getElementById('main-footer').style.animation = "slide-in 1s 1 forwards";
  document.getElementById('main-footer').style.WebkitAnimation = "slide-in 1s 1 forwards";
  /*
  document.getElementById('results-section').style.display = "block";
  document.getElementById('results-section').style.animation = "slide-in 4s 1 forwards";
  document.getElementById('results-section').style.WebkitAnimation = "slide-in 4s 1 forwards";
  */
  if (e != "noevent") {
    setTimeout(function(){window.location = url;}, 1001);
  };



}

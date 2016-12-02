/* -START LISTENERS- */

window.onload = function() {

  /** Hide the result button, the reason for doing it via js is we need to
  be able to remove and not just overwrite this rule or it will overwrite the hover transform */
  var el = document.getElementById('nav-result');
  el.style.transform = "translateY(-200%)";
  el.style.WebkitTransform = "translateY(-200%)";

  var el = document.getElementsByClassName('wake-content');
  for (var i = 0; i < el.length; i++) {
    el[i].addEventListener('click', addContent);
  };

  var el = document.getElementById('game-wrapper').getElementsByTagName('button');
  for (var i = 0; i < el.length; i++) {
    el[i].addEventListener('click', iPlayedAGame);
  };
};



/* -FUNCTIONS- */

function addContent(e) {
  if (e != "noevent") {
    var url = e.target.href;
    if (url === undefined) {
      url = e.target.baseURI;
    };
    e.preventDefault();
  };
  var el = document.getElementById('about-section');
  el.style.display = "block";
  el.style.animation = "slide-in 1s 1 forwards";
  el.style.WebkitAnimation = "slide-in 1s 1 forwards";
  var el = document.getElementById('main-footer');
  el.style.display = "block";
  el.style.animation = "slide-in 1s 1 forwards";
  el.style.WebkitAnimation = "slide-in 1s 1 forwards";

  if (e != "noevent") {
    var timer = setInterval(
        function(){
          console.log("scrolling");
          window.scrollBy(0,15);
        }
        , 1);


      console.log("done");
    setTimeout(
      function(){
      clearTimeout(timer);
      window.location = url;
      }
    , 1005);
  };



}

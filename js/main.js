/* -LAGUAGE DETECTION TO GET LINK TO SWEDISH LINKEDIN PROFILE IF APPLICABLE- */

/** This function is called like callLanguagecheck(function(data){});
    So we are sending a function along that will be executed after the ajax request
    on the event handlers .done or .fail
    */
function callLanguagecheck(callback) {
  var temp =$.getJSON('php/lang.php', function() {
  })
  .done(function(data) {
    callback(data);
  })
  .fail(function() {
    callback("failed");
  });
};

callLanguagecheck(function(data){
  var language = "";
  if (data != "failed") {
    if (data.substr(0,2) === "sv") {
      language = "/sv";
    };
  };
  document.getElementById('linkedin-anchor').href = "https://www.linkedin.com/in/arnoldson" + language;
});


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
    el[0].addEventListener('click', function(){playGame("fixed");});
    el[1].addEventListener('click', function(){playGame("fluid");});
    el[2].addEventListener('click', function(){playGame("random");});
};



/* -FUNCTIONS- */

function addContent(e) {
  if (window.getComputedStyle(document.getElementById('about-section')).getPropertyValue("display") == "none" ) {
    if (e != "noevent") {
      var url = e.target.href;
      if (url === undefined) {
        var url = e.target.parentNode.href;
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
            window.scrollBy(0,15);
          }
          , 1);

      setTimeout(
        function(){
        clearTimeout(timer);
        window.location = url;
        }
      , 1300); //Safari takes longer to render the elements in new positon
    };
  };
};

window.addEventListener('load', () => {
  let delayer = document.getElementById('delay-script-load');
  delayer.parentElement.removeChild(delayer);
	let icons = document.querySelector("#game-wrapper .icons");
  let techs = ["angularjs", "apache", "bootstrap", "bower", "c", "cplusplus", "csharp", "css3", "d3js", "debian", "docker", "dot-net", "html5", "jasmine", "javascript", "jquery", "mongodb", "mysql", "nginx", "php-flat", "react", "typescript", "ubuntu", "wordpress"];

  let divRow;

  techs.forEach((tech, index) => {

    if (index % parseInt(techs.length/3) === 0 || index === 0) {
      divRow = document.createElement("br");
      icons.appendChild(divRow);
    }

    let image = document.createElement("img");
    let iconWrap = document.createElement("div");
    iconWrap.className = "icon";
    image.title = tech;
    image.src = "assets/images/" + tech + ".svg";
    iconWrap.dataset.name = tech;

    iconWrap.appendChild(image);
    icons.appendChild(iconWrap);
  });

  let awesomeGame = new Game();
}, false);

window.addEventListener("resize", () => {
  resizeHomeSection();
});

/* ---------------------------------------------- /*
 * Smooth scroll / Scroll To Top
 /* ---------------------------------------------- */

/*$('a[href*=#]').bind("click", function(e){

  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
  }, 1000);
  e.preventDefault();
});*/

/*$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.scroll-up').fadeIn();
  } else {
    $('.scroll-up').fadeOut();
  }
});*/

/* ---------------------------------------------- /*
 * Smooth scroll / Scroll To Top
 /* ---------------------------------------------- */
/*$('a').click(function() {
  ga('send', 'event', 'portfolio', 'click', $(this).attr('href'));
});*/

/* ---------------------------------------------- /*
 * Navbar
 /* ---------------------------------------------- */

/*$('body').scrollspy({
  target: '.navbar-custom',
  offset: 70
})*/


/* ---------------------------------------------- /*
 * Home BG
 /* ---------------------------------------------- */

/*$(".screen-height").height($(window).height());

$(window).resize(function(){
  $(".screen-height").height($(window).height());
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  $('#home').css({'background-attachment': 'scroll'});
} else {
  $('#home').parallax('50%', 0.1);
}*/


/* ---------------------------------------------- /*
 * WOW Animation When You Scroll
 /* ---------------------------------------------- */

/*wow = new WOW({
  mobile: false
});
wow.init();*/


/* ---------------------------------------------- /*
 * E-mail validation
 /* ---------------------------------------------- */

/*function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(emailAddress);
};*/

/* ---------------------------------------------- /*
 * Contact form ajax
 /* ---------------------------------------------- */
/*
$('#contact-form').submit(function(e) {

  e.preventDefault();

  var c_name = $('#c_name').val();
  var c_email = $('#c_email').val();
  var c_message = $('#c_message ').val();
  var response = $('#contact-form .ajax-response');

  if (( c_name== '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
    response.fadeIn(500);
    response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
  }

  else {

    var url = "assets/php/handleFormSubmit.php";
    $.ajax({
      type: "POST",
      url: url,
      dataType: 'json',
      data: $("#contact-form").serialize(),

      success: function(data)
      {
        $('#contact-form .ajax-hidden').fadeOut(500);
        response.html(data.message).fadeIn(500);
      }
    });

    return false;

  }

  return false;
});*/

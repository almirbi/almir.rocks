

window.addEventListener('load', () => {

  function startGame() {
    window.removeEventListener('scroll', startGame);
    
    let icons = document.querySelector("#game-wrapper .icons");
    let techs = ["angularjs", "apache", "bootstrap", "bower", "c", "cplusplus", "csharp", "css3", "vagrant", "debian", "docker", "dot-net", "html5", "jasmine", "javascript", "jquery", "mongodb", "mysql", "nginx", "php-flat", "react", "typescript", "ubuntu", "wordpress"];
    if (mobilecheck()) {
      techs.splice(14);
    }
  
    let divRow;
  
    techs.forEach((tech, index) => {
  
      if (index % parseInt(techs.length/3) === 0 || index === 0) {
        divRow = document.createElement("br");
        icons.appendChild(divRow);
      }
  
      let image = document.createElement("img");
      let iconWrap = document.createElement("div");
      iconWrap.className = "icon alive";
      image.alt = tech;
      image.title = tech;
      image.src = "assets/images/" + tech + ".svg";
      iconWrap.dataset.name = tech;
  
      iconWrap.appendChild(image);
      icons.appendChild(iconWrap);
    });
  
    let awesomeGame = new Game();
  }

  let objectToQueryString = function(obj) {
    var str = [];
    for(var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  let contactForm = document.getElementById("contact-form");
  let loader = document.querySelector(".spinner");
  contactForm.addEventListener("submit", (event) => {
    
    event.preventDefault();
    var http = new XMLHttpRequest();
    var url = "/assets/php/handleFormSubmit.php";
    let post = {
      c_name : event.target.c_name.value,
      c_message: event.target.c_message.value,
      c_email: event.target.c_email.value
    };
    var params = objectToQueryString(post);
    http.open("POST", url, true);
    
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
          let response = document.querySelector(".ajax-response");
          response.innerHTML = JSON.parse(http.responseText).message;
          response.classList.add('active');
        }
        loader.classList.remove('active');
    }
    http.send(params);
    
    loader.classList.add('active');
    document.querySelector('#contact > .container').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    return false;
  });

  window.addEventListener('scroll', startGame);

  let images = [...document.querySelectorAll('img')];
  images.forEach((image) => {
    if (image.dataset.src) {
      image.src = image.dataset.src;
    }
  });
	
}, false);

window.addEventListener("resize", () => {
  requestAnimationFrame(resizeHomeSection);
});

let links = [...document.querySelectorAll("a[href^='#'")];
links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    return false;
  });
});

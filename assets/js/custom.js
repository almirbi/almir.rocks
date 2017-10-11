

window.addEventListener('load', () => {

  function startGame() {
    window.removeEventListener('scroll', startGame);
    
    let icons = document.querySelector("#game-wrapper .icons");
    let techs = ["angularjs", "apache", "bootstrap", "bower", "c", "cplusplus", "csharp", "css3", "vagrant", "debian", "docker", "dot-net", "html5", "jasmine", "javascript", "jquery", "mongodb", "mysql", "nginx", "php-flat", "react", "typescript", "ubuntu", "wordpress"];
  
    let divRow;
  
    techs.forEach((tech, index) => {
  
      if (index % parseInt(techs.length/3) === 0 || index === 0) {
        divRow = document.createElement("br");
        icons.appendChild(divRow);
      }
  
      let image = document.createElement("img");
      let iconWrap = document.createElement("div");
      iconWrap.className = "icon";
      image.alt = tech;
      image.title = tech;
      image.src = "assets/images/" + tech + ".svg";
      iconWrap.dataset.name = tech;
  
      iconWrap.appendChild(image);
      icons.appendChild(iconWrap);
    });
  
    let awesomeGame = new Game();
  }

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
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: "smooth"});
    return false;
  });
});
const State = {
  PAUSED: 'paused',
  VIRGIN: 'virgin',
  RUNNING: 'running',
  LOST: 'lost'
};
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

const DEFAULT_SPEED = mobilecheck() ? 4 : 6;

class Game {
  constructor() {
    this.ball = document.getElementById("ball");
    this.pad = document.getElementById("pad");
    this.gameWindow = document.getElementById("game-wrapper");
    this.bricks = Array.prototype.slice.call(document.querySelectorAll("#game-wrapper .icons > .icon"));
    this.isDragging = false;
    this.direction = {
      x: 1,
      y: 1
    };
    this.state = State.VIRGIN;
    this.settings = {
      ballSpeed: DEFAULT_SPEED
    };
    this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    

    this.pad.addEventListener("touchstart", this.handleStart.bind(this), false);
    this.pad.addEventListener("mousedown", this.handleStart.bind(this), false);

    document.addEventListener("touchend", this.handleEnd.bind(this), false);
    document.addEventListener("touchcancel", this.handleEnd.bind(this), false);
    document.addEventListener("mouseup", this.handleEnd.bind(this), false);

    document.addEventListener("touchmove", this.handleMove.bind(this), false);
    document.addEventListener("mousemove", this.handleMove.bind(this), false);
  }

  handleMove(event) {
    
    
    if (this.isDragging) {
        if(event.stopPropagation) {
            event.stopPropagation();
        }
        if(event.preventDefault) {
            event.preventDefault();
        }
        event.cancelBubble = true;
        event.returnValue = false;
      let {x, y} = this.getWindowDimensions(),
        left = "", clientX = event.clientX || event.touches[0].clientX;
      left = (clientX - ((x - this.gameWindow.offsetWidth)/2)) + "px"
      this.pad.style.setProperty("left", left);
    }
    return false;
  }

  handleEnd(event) {
    if (event.button == 0 || event.button === undefined) {
      this.isDragging = false;
      enableScroll();
      this.gameWindow.classList.add("paused");
      this.slowBallDown(() => {
        if ( ! this.isDragging ) {
          this.pauseGame();
        } else {
          this.startMovingSmooth(() => {
            this.play();
          });
        }
      });
    }
    
  }

  handleStart(event) {

    if(event.stopPropagation) {
        event.stopPropagation();
    }
    if(event.preventDefault) {
        event.preventDefault();
    }
    event.cancelBubble = true;
    event.returnValue = false;

    if (event.button == 0 || event.button === undefined) {
      this.isDragging = true;
      disableScroll();

      switch(this.state) {
        case State.VIRGIN:
          this.gameWindow.className = "";
          this.launchBall();
          
          break;
        case State.LOST:
          this.resetGame();
          break;
        case State.PAUSED:
          this.startMovingSmooth(() => {
            this.play();  
          });
          break;
      }
    }

    return false;
  }

  getWindowDimensions() {  
    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {x, y};
  }

  launchBall() {
    this.play();
    this.moveBall();
  }

  getElementOffsetTop(element) {    
    let gameWindowCss = getComputedStyle(this.gameWindow),
        borderWidth = parseInt(gameWindowCss["border-top-width"]);
    return this.isFirefox ? element.offsetTop - borderWidth : element.offsetTop;
  }

  getElementOffsetLeft(element) {    
    let gameWindowCss = getComputedStyle(this.gameWindow),
        borderWidth = parseInt(gameWindowCss["border-left-width"]);
    return this.isFirefox ? element.offsetLeft - borderWidth : element.offsetLeft;
  }

  resetGame() {
    if (this.state == State.LOST) {
      this.gameWindow.classList.remove("lost");
      // change to display = block must bome before ball.offsetHeight
      // because offsetHeight for elements not in the DOM will be 0
      this.ball.style.display = "block";
      this.ball.style.left = this.getElementOffsetLeft(this.pad) + 20 + "px";
      this.ball.style.top = (this.getElementOffsetTop(this.pad.parentElement) - this.ball.offsetHeight) + "px";
      this.state = State.RUNNING;
      this.gameWindow.className = "";

      this.settings.ballSpeed = DEFAULT_SPEED;

      this.direction = {
        x: 1,
        y: 1
      };

      this.launchBall();
    }
  }

  endGame() {
    this.state = State.LOST;
    this.gameWindow.classList.add("lost");
    this.ball.style.display = "none";
  }

  slowBallDown(cb) {

    let interval = setInterval(() => {
      if (this.settings.ballSpeed-- == 0 || this.isDragging) {
        clearInterval(interval);
        cb();
        return;
      }
    }, 100);
  }

  startMovingSmooth(cb) {
    cb();
    if (this.settings.ballSpeed == DEFAULT_SPEED) {
      return;
    }
    let interval = setInterval(() => {
      if (this.settings.ballSpeed++ >= 5) {
        clearInterval(interval);
        // hack for bug resistance B-|
        this.settings.ballSpeed = DEFAULT_SPEED;
        this.gameWindow.classList.remove("paused");
        return;
      }
    }, 100);
  }

  pauseGame() {
    if (this.state == State.RUNNING) {
      this.state = State.PAUSED;
      
    }
  }

  play() {
    this.state = State.RUNNING;
    
  }

  collision($div1, $div2, areNotElements = true) {
    let circle1, circle2;

    if ( areNotElements ) {
      circle1 = {
        radius: $div1.offsetHeight/2, 
        x: this.getElementOffsetLeft($div1) + $div1.offsetHeight/2, 
        y: this.gameWindow.offsetHeight - this.getElementOffsetTop($div1) - 15
      };
      circle2 = {
        radius: $div2.offsetWidth/2,
        x: this.getElementOffsetLeft($div2) + $div2.offsetWidth/2, 
        y: this.gameWindow.offsetHeight - this.getElementOffsetTop($div2) - $div2.offsetWidth/2
      };
    } else {
      circle1 = $div1;
      circle2 = $div2
    }

    var dx = circle1.x - circle2.x;
    var dy = circle1.y - circle2.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    let radiusSum = circle1.radius + circle2.radius;

    let isCollision = distance <= radiusSum;
    circle1.x -= circle2.x;
    circle1.y -= circle2.y;

    if (isCollision) {
      return {
        x: circle1.x / Math.abs(circle1.x),
        y: circle1.y / Math.abs(circle1.y)
      };

    } else {
      return false;
    }
  }

  blinkBorder(side) {
    if (side == "pad") return;
    let sanitzedSide = side.toLowerCase();
    sanitzedSide = sanitzedSide.charAt(0).toUpperCase() + sanitzedSide.slice(1);
    this.gameWindow.style['border' + sanitzedSide + 'Color'] = "grey";
    setTimeout(() => {
      this.gameWindow.style['border' + sanitzedSide + 'Color'] = "transparent";
    }, 1000);
  }

  bounce() {
    let x = this.gameWindow.offsetWidth, 
        y = this.gameWindow.offsetHeight;

    if (this.getElementOffsetLeft(this.ball) <= 0 && this.direction.x === -1) {
        this.ball.style.setProperty("left", 0);
        this.direction.x = 1;
        return 'left';
    }

    if (this.getElementOffsetTop(this.ball) <= 0 && this.direction.y === 1) {
        this.ball.style.setProperty("top", 0);
        this.direction.y = -1;
        return 'top';
    }

    if (this.getElementOffsetLeft(this.ball) >= x - parseInt(this.ball.offsetWidth) && this.direction.x === 1) {
        this.ball.style.setProperty("top", y - parseInt(this.ball.offsetHeight));
        this.direction.x = -1;
        return 'right';
    }

    if (this.getElementOffsetTop(this.ball) + 21 >= y - parseInt(this.ball.offsetHeight) && this.direction.y === -1) {
        if (this.getElementOffsetLeft(this.ball) > this.getElementOffsetLeft(this.pad) - this.ball.offsetWidth - 5 && this.getElementOffsetLeft(this.ball) < this.getElementOffsetLeft(this.pad) + this.pad.offsetWidth) {
            this.direction.y = 1;
            return 'pad';
        } else {
            throw 'Lost';
        }
    }

    return false;
  }

  killBrick($brick) {
    $brick.classList.add("dead");
    let toRemove;
    for (let i = 0; i < this.bricks.length; i++) {
      let tmp = this.bricks[i];
      if (tmp.classList.contains('dead')) {
        toRemove = i;
        break;
      }
    }

    ga('send', {
      hitType: 'event',
      eventCategory: 'Game',
      eventAction: 'broken',
      eventLabel: 'Brick Hits',
      eventValue: $brick.dataset.name
    });

    this.bricks.splice(toRemove, 1);
  }

  moveBall() {
    try {

      if (this.state == State.PAUSED) {
        requestAnimationFrame(() => { this.moveBall(); });
        return;
      }

      for (let i = 0; i < this.settings.ballSpeed; i++) {
        let bounceSide = this.bounce();

        if (bounceSide) {
            // console.log(bounceSide);
            this.blinkBorder(bounceSide);
        }

        let left = (this.getElementOffsetLeft(this.ball) + this.direction.x) + "px",
            a = this.getElementOffsetTop(this.ball),
            b = this.direction.y * -1,
            top = a + b + "px";

        /*if (this.isFirefox) {
            b++;
            top = a + b + "px";
        }*/

        this.ball.style.setProperty("left", left);
        this.ball.style.setProperty("top", top);

        let ballTop = this.getElementOffsetTop(this.ball),
          lastIcon = document.querySelector("div.icons .icon:last-child"),
          topThreshold = this.getElementOffsetTop(lastIcon) + lastIcon.offsetHeight;
        
        if (ballTop < topThreshold) {

          this.bricks.forEach(($brick) => {
            let isCollision = this.collision(this.ball, $brick);


            if (isCollision.x || isCollision.y) {
              if (this.settings.ballSpeed === DEFAULT_SPEED) {
                this.killBrick($brick);
              }
              
              if (isCollision.x) {
                this.direction.x = isCollision.x;
              }
  
              if (isCollision.y) {
                this.direction.y = isCollision.y;
              }
            } 
          });
        }
        
        
      }

      requestAnimationFrame(() => { this.moveBall(); });
    }  catch(e) {
        if (e === "Lost") {
            this.endGame();
        } else {
            this.endGame();
            throw (e);
        }
    }
  }
}


const State = {
  PAUSED: 'paused',
  VIRGIN: 'virgin',
  RUNNING: 'running',
  LOST: 'lost'
};

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
      ballSpeed: 6
    };

    this.pad.addEventListener("touchstart", this.handleStart.bind(this), false);
    this.pad.addEventListener("mousedown", this.handleStart.bind(this), false);

    this.pad.addEventListener("touchend", this.handleEnd.bind(this), false);
    this.pad.addEventListener("touchcancel", this.handleEnd.bind(this), false);
    document.addEventListener("mouseup", this.handleEnd.bind(this), false);

    document.addEventListener("touchmove", this.handleMove.bind(this), false);
    document.addEventListener("mousemove", this.handleMove.bind(this), false);
  }

  handleMove(event) {
    if (this.isDragging) {
      let {x, y} = this.getWindowDimensions();
      this.pad.style.left = event.clientX - ((x - this.gameWindow.offsetWidth)/2) + "px";
    }
  }

  handleEnd(event) {
    if (event.button == 0) {
      this.isDragging = false;
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
    if (event.button == 0) {
      this.isDragging = true;

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

  resetGame() {
    if (this.state == State.LOST) {
      this.gameWindow.classList.remove("lost");
      // change to display = block must bome before ball.offsetHeight
      // because offsetHeight for elements not in the DOM will be 0
      this.ball.style.display = "block";
      this.ball.style.left = this.pad.offsetLeft + 20 + "px";
      this.ball.style.top = (this.pad.parentElement.offsetTop - this.ball.offsetHeight) + "px";
      this.state = State.RUNNING;
      this.gameWindow.className = "";

      this.settings.ballSpeed = 6;

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
    if (this.settings.ballSpeed == 6) {
      return;
    }
    let interval = setInterval(() => {
      if (this.settings.ballSpeed++ >= 5) {
        clearInterval(interval);
        // hack for bug resistance B-|
        this.settings.ballSpeed = 6;
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

  collision($div1, $div2, areElements = true) {
    let circle1, circle2;

    if ( areElements ) {
      circle1 = {
        radius: $div1.offsetHeight/2, 
        x: $div1.offsetLeft + $div1.offsetHeight/2, 
        y: this.gameWindow.offsetHeight - $div1.offsetTop - 15
      };
      circle2 = {
        radius: 45, 
        x: $div2.offsetLeft + 45, 
        y: this.gameWindow.offsetHeight - $div2.offsetTop - 45
      };
    } else {
      circle1 = $div1;
      circle2 = $div2
    }

    var dx = circle1.x - circle2.x;
    var dy = circle1.y - circle2.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    let isCollision = distance < circle1.radius + circle2.radius;

    circle1.x -= circle2.x;
    circle1.y -= circle2.y;

    let result = {
      x: 1,
      y: 1
    };

    if (isCollision) {

      if (circle1.x < 25 && circle1.x > -25 && circle1.y < 0) {
        return {
          y: -1
        };
      } else if (circle1.x < 25 && circle1.x > -25 && circle1.y > 0) {
        return {
          y: 1
        }
      } else if (circle1.y < 25 && circle1.y > -25 && circle1.x < 0) {
        return {
          x: -1
        }
      } else if (circle1.y < 25 && circle1.y > -25 && circle1.x > 0) {
        return {
          x: 1
        }
      }

      return {
        x: circle1.x / Math.abs(circle1.x),
        y: circle1.y / Math.abs(circle1.y)
      };

    } else {
      return false;
    }
  }

  isCollisionWithPad(side) {
    let leftEndOfPad = {
      radius: this.pad.offsetHeight/2, 
      x: this.pad.offsetLeft + this.pad.offsetHeight/2, 
      y: this.gameWindow.offsetHeight - this.pad.offsetHeight/2
    };

    let rightEndOfPad = {
      radius: this.pad.offsetHeight/2, 
      x: this.pad.offsetLeft + this.pad.offsetWidth - this.pad.offsetHeight/2, 
      y: this.gameWindow.offsetHeight - this.pad.offsetHeight/2
    };

    let ball = {
      radius: this.ball.offsetHeight/2, 
      x: this.ball.offsetLeft + this.ball.offsetHeight/2, 
      y: this.gameWindow.offsetHeight - this.ball.offsetTop - 15
    };

    return this.collision(ball, side === 'left' ? leftEndOfPad : rightEndOfPad);
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

    if (this.ball.offsetLeft <= 0 && this.direction.x === -1) {
        this.ball.style.left = 0;
        this.direction.x = 1;
        return 'left';
    }

    if (this.ball.offsetTop <= 0 && this.direction.y === 1) {
        this.ball.style.top = 0;
        this.direction.y = -1;
        return 'top';
    }

    if (this.ball.offsetLeft >= x - parseInt(this.ball.offsetWidth) && this.direction.x === 1) {
        this.ball.style.top = y - parseInt(this.ball.offsetHeight);
        this.direction.x = -1;
        return 'right';
    }

    if (this.ball.offsetTop + 21 >= y - parseInt(this.ball.offsetHeight) && this.direction.y === -1) {
        if (this.ball.offsetLeft > this.pad.offsetLeft - this.ball.offsetWidth - 5 && this.ball.offsetLeft < this.pad.offsetLeft + this.pad.offsetWidth) {
            this.direction.y = 1;
            return 'pad';
        } else {
            throw 'Lost';
        }
    }

    return false;
  }

  killBrick($brick) {
    $brick.style.borderColor = "#1f1f1f";
    $brick.style.opacity = "0";
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
            console.log(bounceSide);
            this.blinkBorder(bounceSide);
        }

        this.ball.style.left = this.ball.offsetLeft + this.direction.x + "px";
        this.ball.style.top = this.ball.offsetTop + this.direction.y * -1 + "px";
        
        this.bricks.forEach(($brick) => {
          let isCollision = this.collision(this.ball, $brick);

          if ($brick.style.opacity !== "0" && isCollision) {
            if (this.settings.ballSpeed === 6) {
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


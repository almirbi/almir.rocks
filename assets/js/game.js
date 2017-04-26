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

    this.settings = {
      ballSpeed: 7
    };

    this.isGameRuninng = false;
    this.lost = false;

    this.pad.addEventListener("mousedown", () => {
      this.isDragging = true;

      if (!this.isGameRuninng) {
        this.launchBall();
        this.isGameRuninng = true;
      }
    });

    document.addEventListener("mouseup", () => {
      this.isDragging = false;
    });

    document.addEventListener("mousemove", (event) => {
      if (this.isDragging) {
        let {x, y} = this.getWindowDimensions();
        this.pad.style.left = event.clientX - ((x - this.gameWindow.offsetWidth)/2) + "px";
      }
    });
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
    this.ball.style.left = this.ball.offsetLeft + "px";
    this.ball.style.top = this.ball.offsetTop + "px";

    this.moveBall();
  }

  collision($div1, $div2) {
    var circle1 = {radius: $div1.offsetHeight/2, x: $div1.offsetLeft + $div1.offsetHeight/2, y: this.gameWindow.offsetHeight - $div1.offsetTop - 15};
    var circle2 = {radius: 45, x: $div2.offsetLeft + 45, y: this.gameWindow.offsetHeight - $div2.offsetTop - 45};

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


  moveBall() {

    for (let i = 0; i < this.settings.ballSpeed; i++) {
      let x = this.gameWindow.offsetWidth,
        y = this.gameWindow.offsetHeight;

      let hasBounced = false;

      if (this.ball.offsetLeft <= 0 && this.direction.x === -1) {
        this.ball.style.left = 0;

        hasBounced = !!(this.direction.x = 1);
        this.gameWindow.style.borderLeftColor = "grey";
        setTimeout(() => {
          this.gameWindow.style.borderLeftColor = "transparent";
        }, 1000);
      }

      if (this.ball.offsetTop <= 0 && this.direction.y === 1) {
        this.ball.style.top = 0;
        hasBounced = !!(this.direction.y = -1);
        this.gameWindow.style.borderTopColor = "grey";
        setTimeout(() => {
          this.gameWindow.style.borderTopColor = "transparent";
        }, 1000);
      }

      if (this.ball.offsetLeft >= x - parseInt(this.ball.offsetWidth) && this.direction.x === 1) {
        this.ball.style.top = y - parseInt(this.ball.offsetHeight);
        hasBounced = !!(this.direction.x = -1);
        this.gameWindow.style.borderRightColor = "grey";
        setTimeout(() => {
          this.gameWindow.style.borderRightColor = "transparent";
        }, 1000);
      }

      if (this.ball.offsetTop + this.pad.offsetHeight + 1 >= y - parseInt(this.ball.offsetHeight) && this.direction.y === -1) {

        if (this.ball.offsetLeft < this.pad.offsetLeft || this.ball.offsetLeft > (this.pad.offsetLeft + this.pad.offsetWidth)) {
          this.lost = true;
          this.ball.style.display = "none";
        } else {
          this.ball.style.top = y - parseInt(this.ball.offsetHeight);
          hasBounced = !!(this.direction.y = 1);
        }
      }

      if (!hasBounced) {
        this.ball.style.left = this.ball.offsetLeft + this.direction.x + "px";
        this.ball.style.top = this.ball.offsetTop + this.direction.y * -1 + "px";
      }

      this.bricks.forEach(($icon) => {
        let isCollision = this.collision(this.ball, $icon);
        if ($icon.style.opacity !== "0" && isCollision) {
          $icon.style.borderColor = "#1f1f1f";
          $icon.style.opacity = "0";

          if (isCollision.x) {
            this.direction.x = isCollision.x;
          }

          if (isCollision.y) {
            this.direction.y = isCollision.y;
          }
        }
      });
    }

    if (!this.lost) {
      requestAnimationFrame(() => { this.moveBall(); });
    }
  }
}

let awesomeGame = new Game();
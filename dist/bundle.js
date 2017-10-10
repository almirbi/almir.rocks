'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.addEventListener('load', function () {

  function startGame() {
    window.removeEventListener('scroll', startGame);

    var icons = document.querySelector("#game-wrapper .icons");
    var techs = ["angularjs", "apache", "bootstrap", "bower", "c", "cplusplus", "csharp", "css3", "d3js", "debian", "docker", "dot-net", "html5", "jasmine", "javascript", "jquery", "mongodb", "mysql", "nginx", "php-flat", "react", "typescript", "ubuntu", "wordpress"];

    var divRow = void 0;

    techs.forEach(function (tech, index) {

      if (index % parseInt(techs.length / 3) === 0 || index === 0) {
        divRow = document.createElement("br");
        icons.appendChild(divRow);
      }

      var image = document.createElement("img");
      var iconWrap = document.createElement("div");
      iconWrap.className = "icon";
      image.title = tech;
      image.src = "assets/images/" + tech + ".svg";
      iconWrap.dataset.name = tech;

      iconWrap.appendChild(image);
      icons.appendChild(iconWrap);
    });

    var awesomeGame = new Game();
  }

  window.addEventListener('scroll', startGame);

  var images = [].concat(_toConsumableArray(document.querySelectorAll('img')));
  images.forEach(function (image) {
    if (image.dataset.src) {
      image.src = image.dataset.src;
    }
  });
}, false);

window.addEventListener("resize", function () {
  resizeHomeSection();
});


'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = {
  PAUSED: 'paused',
  VIRGIN: 'virgin',
  RUNNING: 'running',
  LOST: 'lost'
};
window.mobilecheck = function () {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
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
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

var DEFAULT_SPEED = mobilecheck() ? 4 : 6;

console.log('Speed set to ' + DEFAULT_SPEED);

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

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

  _createClass(Game, [{
    key: 'handleMove',
    value: function handleMove(event) {

      if (this.isDragging) {
        if (event.stopPropagation) {
          event.stopPropagation();
        }
        if (event.preventDefault) {
          event.preventDefault();
        }
        event.cancelBubble = true;
        event.returnValue = false;

        var _getWindowDimensions = this.getWindowDimensions(),
            x = _getWindowDimensions.x,
            y = _getWindowDimensions.y,
            left = "",
            clientX = event.clientX || event.touches[0].clientX;

        left = clientX - (x - this.gameWindow.offsetWidth) / 2 + "px";
        this.pad.style.setProperty("left", left);
      }
      return false;
    }
  }, {
    key: 'handleEnd',
    value: function handleEnd(event) {
      var _this = this;

      if (event.button == 0 || event.button === undefined) {
        this.isDragging = false;
        enableScroll();
        this.gameWindow.classList.add("paused");
        this.slowBallDown(function () {
          if (!_this.isDragging) {
            _this.pauseGame();
          } else {
            _this.startMovingSmooth(function () {
              _this.play();
            });
          }
        });
      }
    }
  }, {
    key: 'handleStart',
    value: function handleStart(event) {
      var _this2 = this;

      if (event.stopPropagation) {
        event.stopPropagation();
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      event.cancelBubble = true;
      event.returnValue = false;

      if (event.button == 0 || event.button === undefined) {
        this.isDragging = true;
        disableScroll();

        switch (this.state) {
          case State.VIRGIN:
            this.gameWindow.className = "";
            this.launchBall();

            break;
          case State.LOST:
            this.resetGame();
            break;
          case State.PAUSED:
            this.startMovingSmooth(function () {
              _this2.play();
            });
            break;
        }
      }

      return false;
    }
  }, {
    key: 'getWindowDimensions',
    value: function getWindowDimensions() {
      var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth,
          y = w.innerHeight || e.clientHeight || g.clientHeight;
      return { x: x, y: y };
    }
  }, {
    key: 'launchBall',
    value: function launchBall() {
      this.play();
      this.moveBall();
    }
  }, {
    key: 'getElementOffsetTop',
    value: function getElementOffsetTop(element) {
      var gameWindowCss = getComputedStyle(this.gameWindow),
          borderWidth = parseInt(gameWindowCss["border-top-width"]);
      return this.isFirefox ? element.offsetTop - borderWidth : element.offsetTop;
    }
  }, {
    key: 'getElementOffsetLeft',
    value: function getElementOffsetLeft(element) {
      var gameWindowCss = getComputedStyle(this.gameWindow),
          borderWidth = parseInt(gameWindowCss["border-left-width"]);
      return this.isFirefox ? element.offsetLeft - borderWidth : element.offsetLeft;
    }
  }, {
    key: 'resetGame',
    value: function resetGame() {
      if (this.state == State.LOST) {
        this.gameWindow.classList.remove("lost");
        // change to display = block must bome before ball.offsetHeight
        // because offsetHeight for elements not in the DOM will be 0
        this.ball.style.display = "block";
        this.ball.style.left = this.getElementOffsetLeft(this.pad) + 20 + "px";
        this.ball.style.top = this.getElementOffsetTop(this.pad.parentElement) - this.ball.offsetHeight + "px";
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
  }, {
    key: 'endGame',
    value: function endGame() {
      this.state = State.LOST;
      this.gameWindow.classList.add("lost");
      this.ball.style.display = "none";
    }
  }, {
    key: 'slowBallDown',
    value: function slowBallDown(cb) {
      var _this3 = this;

      var interval = setInterval(function () {
        if (_this3.settings.ballSpeed-- == 0 || _this3.isDragging) {
          clearInterval(interval);
          cb();
          return;
        }
      }, 100);
    }
  }, {
    key: 'startMovingSmooth',
    value: function startMovingSmooth(cb) {
      var _this4 = this;

      cb();
      if (this.settings.ballSpeed == DEFAULT_SPEED) {
        return;
      }
      var interval = setInterval(function () {
        if (_this4.settings.ballSpeed++ >= 5) {
          clearInterval(interval);
          // hack for bug resistance B-|
          _this4.settings.ballSpeed = DEFAULT_SPEED;
          _this4.gameWindow.classList.remove("paused");
          return;
        }
      }, 100);
    }
  }, {
    key: 'pauseGame',
    value: function pauseGame() {
      if (this.state == State.RUNNING) {
        this.state = State.PAUSED;
      }
    }
  }, {
    key: 'play',
    value: function play() {
      this.state = State.RUNNING;
    }
  }, {
    key: 'collision',
    value: function collision($div1, $div2) {
      var areNotElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var circle1 = void 0,
          circle2 = void 0;

      if (areNotElements) {
        circle1 = {
          radius: $div1.offsetHeight / 2,
          x: this.getElementOffsetLeft($div1) + $div1.offsetHeight / 2,
          y: this.gameWindow.offsetHeight - this.getElementOffsetTop($div1) - 15
        };
        circle2 = {
          radius: $div2.offsetWidth / 2,
          x: this.getElementOffsetLeft($div2) + $div2.offsetWidth / 2,
          y: this.gameWindow.offsetHeight - this.getElementOffsetTop($div2) - $div2.offsetWidth / 2
        };
      } else {
        circle1 = $div1;
        circle2 = $div2;
      }

      var dx = circle1.x - circle2.x;
      var dy = circle1.y - circle2.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      var radiusSum = circle1.radius + circle2.radius;

      var isCollision = distance <= radiusSum;
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
  }, {
    key: 'blinkBorder',
    value: function blinkBorder(side) {
      var _this5 = this;

      if (side == "pad") return;
      var sanitzedSide = side.toLowerCase();
      sanitzedSide = sanitzedSide.charAt(0).toUpperCase() + sanitzedSide.slice(1);
      this.gameWindow.style['border' + sanitzedSide + 'Color'] = "grey";
      setTimeout(function () {
        _this5.gameWindow.style['border' + sanitzedSide + 'Color'] = "transparent";
      }, 1000);
    }
  }, {
    key: 'bounce',
    value: function bounce() {
      var x = this.gameWindow.offsetWidth,
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
  }, {
    key: 'killBrick',
    value: function killBrick($brick) {
      $brick.classList.add("dead");
      var toRemove = void 0;
      for (var i = 0; i < this.bricks.length; i++) {
        var tmp = this.bricks[i];
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
  }, {
    key: 'moveBall',
    value: function moveBall() {
      var _this6 = this;

      try {

        if (this.state == State.PAUSED) {
          requestAnimationFrame(function () {
            _this6.moveBall();
          });
          return;
        }

        for (var i = 0; i < this.settings.ballSpeed; i++) {
          var bounceSide = this.bounce();

          if (bounceSide) {
            // console.log(bounceSide);
            this.blinkBorder(bounceSide);
          }

          var left = this.getElementOffsetLeft(this.ball) + this.direction.x + "px",
              a = this.getElementOffsetTop(this.ball),
              b = this.direction.y * -1,
              top = a + b + "px";

          /*if (this.isFirefox) {
              b++;
              top = a + b + "px";
          }*/

          this.ball.style.setProperty("left", left);
          this.ball.style.setProperty("top", top);

          var ballTop = this.getElementOffsetTop(this.ball),
              lastIcon = document.querySelector("div.icons .icon:last-child"),
              topThreshold = this.getElementOffsetTop(lastIcon) + lastIcon.offsetHeight;

          if (ballTop < topThreshold) {

            this.bricks.forEach(function ($brick) {
              var isCollision = _this6.collision(_this6.ball, $brick);

              if (isCollision.x || isCollision.y) {
                if (_this6.settings.ballSpeed === DEFAULT_SPEED) {
                  _this6.killBrick($brick);
                }

                if (isCollision.x) {
                  _this6.direction.x = isCollision.x;
                }

                if (isCollision.y) {
                  _this6.direction.y = isCollision.y;
                }
              }
            });
          }
        }

        requestAnimationFrame(function () {
          _this6.moveBall();
        });
      } catch (e) {
        if (e === "Lost") {
          this.endGame();
        } else {
          this.endGame();
          throw e;
        }
      }
    }
  }]);

  return Game;
}();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS5qcyIsImdhbWUuanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpY29ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlY2hzIiwiZGl2Um93IiwiZm9yRWFjaCIsInRlY2giLCJpbmRleCIsInBhcnNlSW50IiwibGVuZ3RoIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaW1hZ2UiLCJpY29uV3JhcCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3JjIiwiZGF0YXNldCIsIm5hbWUiLCJhd2Vzb21lR2FtZSIsIkdhbWUiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVzaXplSG9tZVNlY3Rpb24iLCJTdGF0ZSIsIlBBVVNFRCIsIlZJUkdJTiIsIlJVTk5JTkciLCJMT1NUIiwibW9iaWxlY2hlY2siLCJjaGVjayIsImEiLCJ0ZXN0Iiwic3Vic3RyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJrZXlzIiwicHJldmVudERlZmF1bHQiLCJlIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsInByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyIsImtleUNvZGUiLCJkaXNhYmxlU2Nyb2xsIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwiZW5hYmxlU2Nyb2xsIiwiREVGQVVMVF9TUEVFRCIsImNvbnNvbGUiLCJsb2ciLCJiYWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWQiLCJnYW1lV2luZG93IiwiYnJpY2tzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJpc0RyYWdnaW5nIiwiZGlyZWN0aW9uIiwieCIsInkiLCJzdGF0ZSIsInNldHRpbmdzIiwiYmFsbFNwZWVkIiwiaXNGaXJlZm94IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaGFuZGxlU3RhcnQiLCJiaW5kIiwiaGFuZGxlRW5kIiwiaGFuZGxlTW92ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJsZWZ0IiwiY2xpZW50WCIsInRvdWNoZXMiLCJvZmZzZXRXaWR0aCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJidXR0b24iLCJ1bmRlZmluZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzbG93QmFsbERvd24iLCJwYXVzZUdhbWUiLCJzdGFydE1vdmluZ1Ntb290aCIsInBsYXkiLCJsYXVuY2hCYWxsIiwicmVzZXRHYW1lIiwidyIsImQiLCJkb2N1bWVudEVsZW1lbnQiLCJnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsIm1vdmVCYWxsIiwiZWxlbWVudCIsImdhbWVXaW5kb3dDc3MiLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9yZGVyV2lkdGgiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwicmVtb3ZlIiwiZGlzcGxheSIsImdldEVsZW1lbnRPZmZzZXRMZWZ0IiwidG9wIiwiZ2V0RWxlbWVudE9mZnNldFRvcCIsInBhcmVudEVsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJjYiIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiJGRpdjEiLCIkZGl2MiIsImFyZU5vdEVsZW1lbnRzIiwiY2lyY2xlMSIsImNpcmNsZTIiLCJyYWRpdXMiLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInJhZGl1c1N1bSIsImlzQ29sbGlzaW9uIiwiYWJzIiwic2lkZSIsInNhbml0emVkU2lkZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2V0VGltZW91dCIsIiRicmljayIsInRvUmVtb3ZlIiwiaSIsInRtcCIsImNvbnRhaW5zIiwiZ2EiLCJoaXRUeXBlIiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImV2ZW50VmFsdWUiLCJzcGxpY2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJib3VuY2VTaWRlIiwiYm91bmNlIiwiYmxpbmtCb3JkZXIiLCJiIiwiYmFsbFRvcCIsImxhc3RJY29uIiwidG9wVGhyZXNob2xkIiwiY29sbGlzaW9uIiwia2lsbEJyaWNrIiwiZW5kR2FtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUVBQSxPQUFPQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNOztBQUVwQyxXQUFTQyxTQUFULEdBQXFCO0FBQ25CRixXQUFPRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsU0FBckM7O0FBRUEsUUFBSUUsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBWjtBQUNBLFFBQUlDLFFBQVEsQ0FBQyxXQUFELEVBQWMsUUFBZCxFQUF3QixXQUF4QixFQUFxQyxPQUFyQyxFQUE4QyxHQUE5QyxFQUFtRCxXQUFuRCxFQUFnRSxRQUFoRSxFQUEwRSxNQUExRSxFQUFrRixNQUFsRixFQUEwRixRQUExRixFQUFvRyxRQUFwRyxFQUE4RyxTQUE5RyxFQUF5SCxPQUF6SCxFQUFrSSxTQUFsSSxFQUE2SSxZQUE3SSxFQUEySixRQUEzSixFQUFxSyxTQUFySyxFQUFnTCxPQUFoTCxFQUF5TCxPQUF6TCxFQUFrTSxVQUFsTSxFQUE4TSxPQUE5TSxFQUF1TixZQUF2TixFQUFxTyxRQUFyTyxFQUErTyxXQUEvTyxDQUFaOztBQUVBLFFBQUlDLGVBQUo7O0FBRUFELFVBQU1FLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7O0FBRTdCLFVBQUlBLFFBQVFDLFNBQVNMLE1BQU1NLE1BQU4sR0FBYSxDQUF0QixDQUFSLEtBQXFDLENBQXJDLElBQTBDRixVQUFVLENBQXhELEVBQTJEO0FBQ3pESCxpQkFBU0gsU0FBU1MsYUFBVCxDQUF1QixJQUF2QixDQUFUO0FBQ0FWLGNBQU1XLFdBQU4sQ0FBa0JQLE1BQWxCO0FBQ0Q7O0FBRUQsVUFBSVEsUUFBUVgsU0FB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Q0Q7QUFDRjtBQUNGLGFBakJEO0FBa0JEO0FBR0Y7O0FBRUR3Riw4QkFBc0IsWUFBTTtBQUFFLGlCQUFLakQsUUFBTDtBQUFrQixTQUFoRDtBQUNELE9BMURELENBMERHLE9BQU1qRSxDQUFOLEVBQVM7QUFDUixZQUFJQSxNQUFNLE1BQVYsRUFBa0I7QUFDZCxlQUFLNEgsT0FBTDtBQUNILFNBRkQsTUFFTztBQUNILGVBQUtBLE9BQUw7QUFDQSxnQkFBTzVILENBQVA7QUFDSDtBQUNKO0FBQ0YiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhcnRHYW1lKTtcbiAgICBcbiAgICBsZXQgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWUtd3JhcHBlciAuaWNvbnNcIik7XG4gICAgbGV0IHRlY2hzID0gW1wiYW5ndWxhcmpzXCIsIFwiYXBhY2hlXCIsIFwiYm9vdHN0cmFwXCIsIFwiYm93ZXJcIiwgXCJjXCIsIFwiY3BsdXNwbHVzXCIsIFwiY3NoYXJwXCIsIFwiY3NzM1wiLCBcImQzanNcIiwgXCJkZWJpYW5cIiwgXCJkb2NrZXJcIiwgXCJkb3QtbmV0XCIsIFwiaHRtbDVcIiwgXCJqYXNtaW5lXCIsIFwiamF2YXNjcmlwdFwiLCBcImpxdWVyeVwiLCBcIm1vbmdvZGJcIiwgXCJteXNxbFwiLCBcIm5naW54XCIsIFwicGhwLWZsYXRcIiwgXCJyZWFjdFwiLCBcInR5cGVzY3JpcHRcIiwgXCJ1YnVudHVcIiwgXCJ3b3JkcHJlc3NcIl07XG4gIFxuICAgIGxldCBkaXZSb3c7XG4gIFxuICAgIHRlY2hzLmZvckVhY2goKHRlY2gsIGluZGV4KSA9PiB7XG4gIFxuICAgICAgaWYgKGluZGV4ICUgcGFyc2VJbnQodGVjaHMubGVuZ3RoLzMpID09PSAwIHx8IGluZGV4ID09PSAwKSB7XG4gICAgICAgIGRpdlJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgICAgICAgaWNvbnMuYXBwZW5kQ2hpbGQoZGl2Um93KTtcbiAgICAgIH1cbiAgXG4gICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgbGV0IGljb25XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGljb25XcmFwLmNsYXNzTmFtZSA9IFwiaWNvblwiO1xuICAgICAgaW1hZ2UudGl0bGUgPSB0ZWNoO1xuICAgICAgaW1hZ2Uuc3JjID0gXCJhc3NldHMvaW1hZ2VzL1wiICsgdGVjaCArIFwiLnN2Z1wiO1xuICAgICAgaWNvbldyYXAuZGF0YXNldC5uYW1lID0gdGVjaDtcbiAgXG4gICAgICBpY29uV3JhcC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICBpY29ucy5hcHBlbmRDaGlsZChpY29uV3JhcCk7XG4gICAgfSk7XG4gIFxuICAgIGxldCBhd2Vzb21lR2FtZSA9IG5ldyBHYW1lKCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhcnRHYW1lKTtcblxuICBsZXQgaW1hZ2VzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXTtcbiAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgaWYgKGltYWdlLmRhdGFzZXQuc3JjKSB7XG4gICAgICBpbWFnZS5zcmMgPSBpbWFnZS5kYXRhc2V0LnNyYztcbiAgICB9XG4gIH0pO1xuXHRcbn0sIGZhbHNlKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICByZXNpemVIb21lU2VjdGlvbigpO1xufSk7XG4iLCJjb25zdCBTdGF0ZSA9IHtcbiAgUEFVU0VEOiAncGF1c2VkJyxcbiAgVklSR0lOOiAndmlyZ2luJyxcbiAgUlVOTklORzogJ3J1bm5pbmcnLFxuICBMT1NUOiAnbG9zdCdcbn07XG53aW5kb3cubW9iaWxlY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGNoZWNrID0gZmFsc2U7XG4gIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSkgY2hlY2sgPSB0cnVlO30pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XG4gIHJldHVybiBjaGVjaztcbn07XG5cbi8vIGxlZnQ6IDM3LCB1cDogMzgsIHJpZ2h0OiAzOSwgZG93bjogNDAsXG4vLyBzcGFjZWJhcjogMzIsIHBhZ2V1cDogMzMsIHBhZ2Vkb3duOiAzNCwgZW5kOiAzNSwgaG9tZTogMzZcbnZhciBrZXlzID0gezM3OiAxLCAzODogMSwgMzk6IDEsIDQwOiAxfTtcblxuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gIGlmIChlLnByZXZlbnREZWZhdWx0KVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnJldHVyblZhbHVlID0gZmFsc2U7ICBcbn1cblxuZnVuY3Rpb24gcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIC8vIG9sZGVyIEZGXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICB3aW5kb3cub253aGVlbCA9IHByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcbiAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHByZXZlbnREZWZhdWx0OyAvLyBvbGRlciBicm93c2VycywgSUVcbiAgd2luZG93Lm9udG91Y2htb3ZlICA9IHByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcbiAgZG9jdW1lbnQub25rZXlkb3duICA9IHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcbn1cblxuZnVuY3Rpb24gZW5hYmxlU2Nyb2xsKCkge1xuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9ud2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsOyAgXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDsgIFxufVxuXG5jb25zdCBERUZBVUxUX1NQRUVEID0gbW9iaWxlY2hlY2soKSA/IDQgOiA2O1xuXG5jb25zb2xlLmxvZyhgU3BlZWQgc2V0IHRvICR7REVGQVVMVF9TUEVFRH1gKTtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFsbFwiKTtcbiAgICB0aGlzLnBhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFkXCIpO1xuICAgIHRoaXMuZ2FtZVdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS13cmFwcGVyXCIpO1xuICAgIHRoaXMuYnJpY2tzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNnYW1lLXdyYXBwZXIgLmljb25zID4gLmljb25cIikpO1xuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlyZWN0aW9uID0ge1xuICAgICAgeDogMSxcbiAgICAgIHk6IDFcbiAgICB9O1xuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5WSVJHSU47XG4gICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgIGJhbGxTcGVlZDogREVGQVVMVF9TUEVFRFxuICAgIH07XG4gICAgdGhpcy5pc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTE7XG5cbiAgICBcblxuICAgIHRoaXMucGFkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlU3RhcnQuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIHRoaXMucGFkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVTdGFydC5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5oYW5kbGVFbmQuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5oYW5kbGVFbmQuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICBcbiAgICBcbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgIGlmKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIGxldCB7eCwgeX0gPSB0aGlzLmdldFdpbmRvd0RpbWVuc2lvbnMoKSxcbiAgICAgICAgbGVmdCA9IFwiXCIsIGNsaWVudFggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIGxlZnQgPSAoY2xpZW50WCAtICgoeCAtIHRoaXMuZ2FtZVdpbmRvdy5vZmZzZXRXaWR0aCkvMikpICsgXCJweFwiXG4gICAgICB0aGlzLnBhZC5zdHlsZS5zZXRQcm9wZXJ0eShcImxlZnRcIiwgbGVmdCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZUVuZChldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCB8fCBldmVudC5idXR0b24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICBlbmFibGVTY3JvbGwoKTtcbiAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jbGFzc0xpc3QuYWRkKFwicGF1c2VkXCIpO1xuICAgICAgdGhpcy5zbG93QmFsbERvd24oKCkgPT4ge1xuICAgICAgICBpZiAoICEgdGhpcy5pc0RyYWdnaW5nICkge1xuICAgICAgICAgIHRoaXMucGF1c2VHYW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdGFydE1vdmluZ1Ntb290aCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgaGFuZGxlU3RhcnQoZXZlbnQpIHtcblxuICAgIGlmKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwIHx8IGV2ZW50LmJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgZGlzYWJsZVNjcm9sbCgpO1xuXG4gICAgICBzd2l0Y2godGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIFN0YXRlLlZJUkdJTjpcbiAgICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICB0aGlzLmxhdW5jaEJhbGwoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGF0ZS5MT1NUOlxuICAgICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU3RhdGUuUEFVU0VEOlxuICAgICAgICAgIHRoaXMuc3RhcnRNb3ZpbmdTbW9vdGgoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7ICBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRXaW5kb3dEaW1lbnNpb25zKCkgeyAgXG4gICAgbGV0IHcgPSB3aW5kb3csXG4gICAgICBkID0gZG9jdW1lbnQsXG4gICAgICBlID0gZC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBnID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLFxuICAgICAgeCA9IHcuaW5uZXJXaWR0aCB8fCBlLmNsaWVudFdpZHRoIHx8IGcuY2xpZW50V2lkdGgsXG4gICAgICB5ID0gdy5pbm5lckhlaWdodHx8IGUuY2xpZW50SGVpZ2h0fHwgZy5jbGllbnRIZWlnaHQ7XG4gICAgcmV0dXJuIHt4LCB5fTtcbiAgfVxuXG4gIGxhdW5jaEJhbGwoKSB7XG4gICAgdGhpcy5wbGF5KCk7XG4gICAgdGhpcy5tb3ZlQmFsbCgpO1xuICB9XG5cbiAgZ2V0RWxlbWVudE9mZnNldFRvcChlbGVtZW50KSB7ICAgIFxuICAgIGxldCBnYW1lV2luZG93Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdhbWVXaW5kb3cpLFxuICAgICAgICBib3JkZXJXaWR0aCA9IHBhcnNlSW50KGdhbWVXaW5kb3dDc3NbXCJib3JkZXItdG9wLXdpZHRoXCJdKTtcbiAgICByZXR1cm4gdGhpcy5pc0ZpcmVmb3ggPyBlbGVtZW50Lm9mZnNldFRvcCAtIGJvcmRlcldpZHRoIDogZWxlbWVudC5vZmZzZXRUb3A7XG4gIH1cblxuICBnZXRFbGVtZW50T2Zmc2V0TGVmdChlbGVtZW50KSB7ICAgIFxuICAgIGxldCBnYW1lV2luZG93Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdhbWVXaW5kb3cpLFxuICAgICAgICBib3JkZXJXaWR0aCA9IHBhcnNlSW50KGdhbWVXaW5kb3dDc3NbXCJib3JkZXItbGVmdC13aWR0aFwiXSk7XG4gICAgcmV0dXJuIHRoaXMuaXNGaXJlZm94ID8gZWxlbWVudC5vZmZzZXRMZWZ0IC0gYm9yZGVyV2lkdGggOiBlbGVtZW50Lm9mZnNldExlZnQ7XG4gIH1cblxuICByZXNldEdhbWUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT0gU3RhdGUuTE9TVCkge1xuICAgICAgdGhpcy5nYW1lV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3N0XCIpO1xuICAgICAgLy8gY2hhbmdlIHRvIGRpc3BsYXkgPSBibG9jayBtdXN0IGJvbWUgYmVmb3JlIGJhbGwub2Zmc2V0SGVpZ2h0XG4gICAgICAvLyBiZWNhdXNlIG9mZnNldEhlaWdodCBmb3IgZWxlbWVudHMgbm90IGluIHRoZSBET00gd2lsbCBiZSAwXG4gICAgICB0aGlzLmJhbGwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHRoaXMuYmFsbC5zdHlsZS5sZWZ0ID0gdGhpcy5nZXRFbGVtZW50T2Zmc2V0TGVmdCh0aGlzLnBhZCkgKyAyMCArIFwicHhcIjtcbiAgICAgIHRoaXMuYmFsbC5zdHlsZS50b3AgPSAodGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKHRoaXMucGFkLnBhcmVudEVsZW1lbnQpIC0gdGhpcy5iYWxsLm9mZnNldEhlaWdodCkgKyBcInB4XCI7XG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGUuUlVOTklORztcbiAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLmJhbGxTcGVlZCA9IERFRkFVTFRfU1BFRUQ7XG5cbiAgICAgIHRoaXMuZGlyZWN0aW9uID0ge1xuICAgICAgICB4OiAxLFxuICAgICAgICB5OiAxXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmxhdW5jaEJhbGwoKTtcbiAgICB9XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5MT1NUO1xuICAgIHRoaXMuZ2FtZVdpbmRvdy5jbGFzc0xpc3QuYWRkKFwibG9zdFwiKTtcbiAgICB0aGlzLmJhbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgc2xvd0JhbGxEb3duKGNiKSB7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5iYWxsU3BlZWQtLSA9PSAwIHx8IHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgY2IoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cblxuICBzdGFydE1vdmluZ1Ntb290aChjYikge1xuICAgIGNiKCk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYmFsbFNwZWVkID09IERFRkFVTFRfU1BFRUQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYmFsbFNwZWVkKysgPj0gNSkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgLy8gaGFjayBmb3IgYnVnIHJlc2lzdGFuY2UgQi18XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYmFsbFNwZWVkID0gREVGQVVMVF9TUEVFRDtcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJwYXVzZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcGF1c2VHYW1lKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09IFN0YXRlLlJVTk5JTkcpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5QQVVTRUQ7XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5SVU5OSU5HO1xuICAgIFxuICB9XG5cbiAgY29sbGlzaW9uKCRkaXYxLCAkZGl2MiwgYXJlTm90RWxlbWVudHMgPSB0cnVlKSB7XG4gICAgbGV0IGNpcmNsZTEsIGNpcmNsZTI7XG5cbiAgICBpZiAoIGFyZU5vdEVsZW1lbnRzICkge1xuICAgICAgY2lyY2xlMSA9IHtcbiAgICAgICAgcmFkaXVzOiAkZGl2MS5vZmZzZXRIZWlnaHQvMiwgXG4gICAgICAgIHg6IHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQoJGRpdjEpICsgJGRpdjEub2Zmc2V0SGVpZ2h0LzIsIFxuICAgICAgICB5OiB0aGlzLmdhbWVXaW5kb3cub2Zmc2V0SGVpZ2h0IC0gdGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKCRkaXYxKSAtIDE1XG4gICAgICB9O1xuICAgICAgY2lyY2xlMiA9IHtcbiAgICAgICAgcmFkaXVzOiAkZGl2Mi5vZmZzZXRXaWR0aC8yLFxuICAgICAgICB4OiB0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KCRkaXYyKSArICRkaXYyLm9mZnNldFdpZHRoLzIsIFxuICAgICAgICB5OiB0aGlzLmdhbWVXaW5kb3cub2Zmc2V0SGVpZ2h0IC0gdGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKCRkaXYyKSAtICRkaXYyLm9mZnNldFdpZHRoLzJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNpcmNsZTEgPSAkZGl2MTtcbiAgICAgIGNpcmNsZTIgPSAkZGl2MlxuICAgIH1cblxuICAgIHZhciBkeCA9IGNpcmNsZTEueCAtIGNpcmNsZTIueDtcbiAgICB2YXIgZHkgPSBjaXJjbGUxLnkgLSBjaXJjbGUyLnk7XG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgIGxldCByYWRpdXNTdW0gPSBjaXJjbGUxLnJhZGl1cyArIGNpcmNsZTIucmFkaXVzO1xuXG4gICAgbGV0IGlzQ29sbGlzaW9uID0gZGlzdGFuY2UgPD0gcmFkaXVzU3VtO1xuICAgIGNpcmNsZTEueCAtPSBjaXJjbGUyLng7XG4gICAgY2lyY2xlMS55IC09IGNpcmNsZTIueTtcblxuICAgIGlmIChpc0NvbGxpc2lvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogY2lyY2xlMS54IC8gTWF0aC5hYnMoY2lyY2xlMS54KSxcbiAgICAgICAgeTogY2lyY2xlMS55IC8gTWF0aC5hYnMoY2lyY2xlMS55KVxuICAgICAgfTtcblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYmxpbmtCb3JkZXIoc2lkZSkge1xuICAgIGlmIChzaWRlID09IFwicGFkXCIpIHJldHVybjtcbiAgICBsZXQgc2FuaXR6ZWRTaWRlID0gc2lkZS50b0xvd2VyQ2FzZSgpO1xuICAgIHNhbml0emVkU2lkZSA9IHNhbml0emVkU2lkZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNhbml0emVkU2lkZS5zbGljZSgxKTtcbiAgICB0aGlzLmdhbWVXaW5kb3cuc3R5bGVbJ2JvcmRlcicgKyBzYW5pdHplZFNpZGUgKyAnQ29sb3InXSA9IFwiZ3JleVwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nYW1lV2luZG93LnN0eWxlWydib3JkZXInICsgc2FuaXR6ZWRTaWRlICsgJ0NvbG9yJ10gPSBcInRyYW5zcGFyZW50XCI7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBib3VuY2UoKSB7XG4gICAgbGV0IHggPSB0aGlzLmdhbWVXaW5kb3cub2Zmc2V0V2lkdGgsIFxuICAgICAgICB5ID0gdGhpcy5nYW1lV2luZG93Lm9mZnNldEhlaWdodDtcblxuICAgIGlmICh0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KHRoaXMuYmFsbCkgPD0gMCAmJiB0aGlzLmRpcmVjdGlvbi54ID09PSAtMSkge1xuICAgICAgICB0aGlzLmJhbGwuc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIsIDApO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbi54ID0gMTtcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKHRoaXMuYmFsbCkgPD0gMCAmJiB0aGlzLmRpcmVjdGlvbi55ID09PSAxKSB7XG4gICAgICAgIHRoaXMuYmFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRvcFwiLCAwKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSA9IC0xO1xuICAgICAgICByZXR1cm4gJ3RvcCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5iYWxsKSA+PSB4IC0gcGFyc2VJbnQodGhpcy5iYWxsLm9mZnNldFdpZHRoKSAmJiB0aGlzLmRpcmVjdGlvbi54ID09PSAxKSB7XG4gICAgICAgIHRoaXMuYmFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRvcFwiLCB5IC0gcGFyc2VJbnQodGhpcy5iYWxsLm9mZnNldEhlaWdodCkpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbi54ID0gLTE7XG4gICAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdldEVsZW1lbnRPZmZzZXRUb3AodGhpcy5iYWxsKSArIDIxID49IHkgLSBwYXJzZUludCh0aGlzLmJhbGwub2Zmc2V0SGVpZ2h0KSAmJiB0aGlzLmRpcmVjdGlvbi55ID09PSAtMSkge1xuICAgICAgICBpZiAodGhpcy5nZXRFbGVtZW50T2Zmc2V0TGVmdCh0aGlzLmJhbGwpID4gdGhpcy5nZXRFbGVtZW50T2Zmc2V0TGVmdCh0aGlzLnBhZCkgLSB0aGlzLmJhbGwub2Zmc2V0V2lkdGggLSA1ICYmIHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5iYWxsKSA8IHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5wYWQpICsgdGhpcy5wYWQub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgPSAxO1xuICAgICAgICAgICAgcmV0dXJuICdwYWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgJ0xvc3QnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAga2lsbEJyaWNrKCRicmljaykge1xuICAgICRicmljay5jbGFzc0xpc3QuYWRkKFwiZGVhZFwiKTtcbiAgICBsZXQgdG9SZW1vdmU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJyaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRtcCA9IHRoaXMuYnJpY2tzW2ldO1xuICAgICAgaWYgKHRtcC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlYWQnKSkge1xuICAgICAgICB0b1JlbW92ZSA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdhKCdzZW5kJywge1xuICAgICAgaGl0VHlwZTogJ2V2ZW50JyxcbiAgICAgIGV2ZW50Q2F0ZWdvcnk6ICdHYW1lJyxcbiAgICAgIGV2ZW50QWN0aW9uOiAnYnJva2VuJyxcbiAgICAgIGV2ZW50TGFiZWw6ICdCcmljayBIaXRzJyxcbiAgICAgIGV2ZW50VmFsdWU6ICRicmljay5kYXRhc2V0Lm5hbWVcbiAgICB9KTtcblxuICAgIHRoaXMuYnJpY2tzLnNwbGljZSh0b1JlbW92ZSwgMSk7XG4gIH1cblxuICBtb3ZlQmFsbCgpIHtcbiAgICB0cnkge1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PSBTdGF0ZS5QQVVTRUQpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy5tb3ZlQmFsbCgpOyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0dGluZ3MuYmFsbFNwZWVkOyBpKyspIHtcbiAgICAgICAgbGV0IGJvdW5jZVNpZGUgPSB0aGlzLmJvdW5jZSgpO1xuXG4gICAgICAgIGlmIChib3VuY2VTaWRlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhib3VuY2VTaWRlKTtcbiAgICAgICAgICAgIHRoaXMuYmxpbmtCb3JkZXIoYm91bmNlU2lkZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVmdCA9ICh0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KHRoaXMuYmFsbCkgKyB0aGlzLmRpcmVjdGlvbi54KSArIFwicHhcIixcbiAgICAgICAgICAgIGEgPSB0aGlzLmdldEVsZW1lbnRPZmZzZXRUb3AodGhpcy5iYWxsKSxcbiAgICAgICAgICAgIGIgPSB0aGlzLmRpcmVjdGlvbi55ICogLTEsXG4gICAgICAgICAgICB0b3AgPSBhICsgYiArIFwicHhcIjtcblxuICAgICAgICAvKmlmICh0aGlzLmlzRmlyZWZveCkge1xuICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgdG9wID0gYSArIGIgKyBcInB4XCI7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHRoaXMuYmFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcImxlZnRcIiwgbGVmdCk7XG4gICAgICAgIHRoaXMuYmFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRvcFwiLCB0b3ApO1xuXG4gICAgICAgIGxldCBiYWxsVG9wID0gdGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKHRoaXMuYmFsbCksXG4gICAgICAgICAgbGFzdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lmljb25zIC5pY29uOmxhc3QtY2hpbGRcIiksXG4gICAgICAgICAgdG9wVGhyZXNob2xkID0gdGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKGxhc3RJY29uKSArIGxhc3RJY29uLm9mZnNldEhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIGlmIChiYWxsVG9wIDwgdG9wVGhyZXNob2xkKSB7XG5cbiAgICAgICAgICB0aGlzLmJyaWNrcy5mb3JFYWNoKCgkYnJpY2spID0+IHtcbiAgICAgICAgICAgIGxldCBpc0NvbGxpc2lvbiA9IHRoaXMuY29sbGlzaW9uKHRoaXMuYmFsbCwgJGJyaWNrKTtcblxuXG4gICAgICAgICAgICBpZiAoaXNDb2xsaXNpb24ueCB8fCBpc0NvbGxpc2lvbi55KSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmJhbGxTcGVlZCA9PT0gREVGQVVMVF9TUEVFRCkge1xuICAgICAgICAgICAgICAgIHRoaXMua2lsbEJyaWNrKCRicmljayk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChpc0NvbGxpc2lvbi54KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IGlzQ29sbGlzaW9uLng7XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIGlmIChpc0NvbGxpc2lvbi55KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSA9IGlzQ29sbGlzaW9uLnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyB0aGlzLm1vdmVCYWxsKCk7IH0pO1xuICAgIH0gIGNhdGNoKGUpIHtcbiAgICAgICAgaWYgKGUgPT09IFwiTG9zdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgICAgICAgdGhyb3cgKGUpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=

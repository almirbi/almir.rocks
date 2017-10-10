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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiU3RhdGUiLCJQQVVTRUQiLCJWSVJHSU4iLCJSVU5OSU5HIiwiTE9TVCIsIndpbmRvdyIsIm1vYmlsZWNoZWNrIiwiY2hlY2siLCJhIiwidGVzdCIsInN1YnN0ciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwia2V5cyIsInByZXZlbnREZWZhdWx0IiwiZSIsImV2ZW50IiwicmV0dXJuVmFsdWUiLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJrZXlDb2RlIiwiZGlzYWJsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbndoZWVsIiwib25tb3VzZXdoZWVsIiwiZG9jdW1lbnQiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93biIsImVuYWJsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJERUZBVUxUX1NQRUVEIiwiY29uc29sZSIsImxvZyIsIkdhbWUiLCJiYWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWQiLCJnYW1lV2luZG93IiwiYnJpY2tzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXNEcmFnZ2luZyIsImRpcmVjdGlvbiIsIngiLCJ5Iiwic3RhdGUiLCJzZXR0aW5ncyIsImJhbGxTcGVlZCIsImlzRmlyZWZveCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImhhbmRsZVN0YXJ0IiwiYmluZCIsImhhbmRsZUVuZCIsImhhbmRsZU1vdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJnZXRXaW5kb3dEaW1lbnNpb25zIiwibGVmdCIsImNsaWVudFgiLCJ0b3VjaGVzIiwib2Zmc2V0V2lkdGgiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiYnV0dG9uIiwidW5kZWZpbmVkIiwiY2xhc3NMaXN0IiwiYWRkIiwic2xvd0JhbGxEb3duIiwicGF1c2VHYW1lIiwic3RhcnRNb3ZpbmdTbW9vdGgiLCJwbGF5IiwiY2xhc3NOYW1lIiwibGF1bmNoQmFsbCIsInJlc2V0R2FtZSIsInciLCJkIiwiZG9jdW1lbnRFbGVtZW50IiwiZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJtb3ZlQmFsbCIsImVsZW1lbnQiLCJnYW1lV2luZG93Q3NzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvcmRlcldpZHRoIiwicGFyc2VJbnQiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwicmVtb3ZlIiwiZGlzcGxheSIsImdldEVsZW1lbnRPZmZzZXRMZWZ0IiwidG9wIiwiZ2V0RWxlbWVudE9mZnNldFRvcCIsInBhcmVudEVsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJjYiIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiJGRpdjEiLCIkZGl2MiIsImFyZU5vdEVsZW1lbnRzIiwiY2lyY2xlMSIsImNpcmNsZTIiLCJyYWRpdXMiLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInJhZGl1c1N1bSIsImlzQ29sbGlzaW9uIiwiYWJzIiwic2lkZSIsInNhbml0emVkU2lkZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2V0VGltZW91dCIsIiRicmljayIsInRvUmVtb3ZlIiwiaSIsImxlbmd0aCIsInRtcCIsImNvbnRhaW5zIiwiZ2EiLCJoaXRUeXBlIiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImV2ZW50VmFsdWUiLCJkYXRhc2V0IiwibmFtZSIsInNwbGljZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJvdW5jZVNpZGUiLCJib3VuY2UiLCJibGlua0JvcmRlciIsImIiLCJiYWxsVG9wIiwibGFzdEljb24iLCJxdWVyeVNlbGVjdG9yIiwidG9wVGhyZXNob2xkIiwiZm9yRWFjaCIsImNvbGxpc2lvbiIsImtpbGxCcmljayIsImVuZEdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLFFBQVE7QUFDWkMsVUFBUSxRQURJO0FBRVpDLFVBQVEsUUFGSTtBQUdaQyxXQUFTLFNBSEc7QUFJWkMsUUFBTTtBQUpNLENBQWQ7QUFNQUMsT0FBT0MsV0FBUCxHQUFxQixZQUFXO0FBQzlCLE1BQUlDLFFBQVEsS0FBWjtBQUNBLEdBQUMsVUFBU0MsQ0FBVCxFQUFXO0FBQUMsUUFBRywyVEFBMlRDLElBQTNULENBQWdVRCxDQUFoVSxLQUFvVSwwa0RBQTBrREMsSUFBMWtELENBQStrREQsRUFBRUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQS9rRCxDQUF2VSxFQUFzNkRILFFBQVEsSUFBUjtBQUFjLEdBQWo4RCxFQUFtOERJLFVBQVVDLFNBQVYsSUFBcUJELFVBQVVFLE1BQS9CLElBQXVDUixPQUFPUyxLQUFqL0Q7QUFDQSxTQUFPUCxLQUFQO0FBQ0QsQ0FKRDs7QUFNQTtBQUNBO0FBQ0EsSUFBSVEsT0FBTyxFQUFDLElBQUksQ0FBTCxFQUFRLElBQUksQ0FBWixFQUFlLElBQUksQ0FBbkIsRUFBc0IsSUFBSSxDQUExQixFQUFYOztBQUVBLFNBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3pCQSxNQUFJQSxLQUFLWixPQUFPYSxLQUFoQjtBQUNBLE1BQUlELEVBQUVELGNBQU4sRUFDSUMsRUFBRUQsY0FBRjtBQUNKQyxJQUFFRSxXQUFGLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBRUQsU0FBU0MsMkJBQVQsQ0FBcUNILENBQXJDLEVBQXdDO0FBQ3BDLE1BQUlGLEtBQUtFLEVBQUVJLE9BQVAsQ0FBSixFQUFxQjtBQUNqQkwsbUJBQWVDLENBQWY7QUFDQSxXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUVELFNBQVNLLGFBQVQsR0FBeUI7QUFDdkIsTUFBSWpCLE9BQU9rQixnQkFBWCxFQUE2QjtBQUN6QmxCLFdBQU9rQixnQkFBUCxDQUF3QixnQkFBeEIsRUFBMENQLGNBQTFDLEVBQTBELEtBQTFEO0FBQ0pYLFNBQU9tQixPQUFQLEdBQWlCUixjQUFqQixDQUh1QixDQUdVO0FBQ2pDWCxTQUFPb0IsWUFBUCxHQUFzQkMsU0FBU0QsWUFBVCxHQUF3QlQsY0FBOUMsQ0FKdUIsQ0FJdUM7QUFDOURYLFNBQU9zQixXQUFQLEdBQXNCWCxjQUF0QixDQUx1QixDQUtlO0FBQ3RDVSxXQUFTRSxTQUFULEdBQXNCUiwyQkFBdEI7QUFDRDs7QUFFRCxTQUFTUyxZQUFULEdBQXdCO0FBQ3BCLE1BQUl4QixPQUFPeUIsbUJBQVgsRUFDSXpCLE9BQU95QixtQkFBUCxDQUEyQixnQkFBM0IsRUFBNkNkLGNBQTdDLEVBQTZELEtBQTdEO0FBQ0pYLFNBQU9vQixZQUFQLEdBQXNCQyxTQUFTRCxZQUFULEdBQXdCLElBQTlDO0FBQ0FwQixTQUFPbUIsT0FBUCxHQUFpQixJQUFqQjtBQUNBbkIsU0FBT3NCLFdBQVAsR0FBcUIsSUFBckI7QUFDQUQsV0FBU0UsU0FBVCxHQUFxQixJQUFyQjtBQUNIOztBQUVELElBQU1HLGdCQUFnQnpCLGdCQUFnQixDQUFoQixHQUFvQixDQUExQzs7QUFFQTBCLFFBQVFDLEdBQVIsbUJBQTRCRixhQUE1Qjs7SUFFTUcsSTtBQUNKLGtCQUFjO0FBQUE7O0FBQ1osU0FBS0MsSUFBTCxHQUFZVCxTQUFTVSxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFDQSxTQUFLQyxHQUFMLEdBQVdYLFNBQVNVLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWDtBQUNBLFNBQUtFLFVBQUwsR0FBa0JaLFNBQVNVLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbEI7QUFDQSxTQUFLRyxNQUFMLEdBQWNDLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQmpCLFNBQVNrQixnQkFBVCxDQUEwQiw4QkFBMUIsQ0FBM0IsQ0FBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCO0FBQ2ZDLFNBQUcsQ0FEWTtBQUVmQyxTQUFHO0FBRlksS0FBakI7QUFJQSxTQUFLQyxLQUFMLEdBQWFqRCxNQUFNRSxNQUFuQjtBQUNBLFNBQUtnRCxRQUFMLEdBQWdCO0FBQ2RDLGlCQUFXcEI7QUFERyxLQUFoQjtBQUdBLFNBQUtxQixTQUFMLEdBQWlCekMsVUFBVUMsU0FBVixDQUFvQnlDLFdBQXBCLEdBQWtDQyxPQUFsQyxDQUEwQyxTQUExQyxJQUF1RCxDQUFDLENBQXpFOztBQUlBLFNBQUtqQixHQUFMLENBQVNkLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDLEtBQUtnQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF4QyxFQUFxRSxLQUFyRTtBQUNBLFNBQUtuQixHQUFMLENBQVNkLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLEtBQUtnQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF2QyxFQUFvRSxLQUFwRTs7QUFFQTlCLGFBQVNILGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLEtBQUtrQyxTQUFMLENBQWVELElBQWYsQ0FBb0IsSUFBcEIsQ0FBdEMsRUFBaUUsS0FBakU7QUFDQTlCLGFBQVNILGdCQUFULENBQTBCLGFBQTFCLEVBQXlDLEtBQUtrQyxTQUFMLENBQWVELElBQWYsQ0FBb0IsSUFBcEIsQ0FBekMsRUFBb0UsS0FBcEU7QUFDQTlCLGFBQVNILGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtrQyxTQUFMLENBQWVELElBQWYsQ0FBb0IsSUFBcEIsQ0FBckMsRUFBZ0UsS0FBaEU7O0FBRUE5QixhQUFTSCxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxLQUFLbUMsVUFBTCxDQUFnQkYsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBdkMsRUFBbUUsS0FBbkU7QUFDQTlCLGFBQVNILGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLEtBQUttQyxVQUFMLENBQWdCRixJQUFoQixDQUFxQixJQUFyQixDQUF2QyxFQUFtRSxLQUFuRTtBQUNEOzs7OytCQUVVdEMsSyxFQUFPOztBQUdoQixVQUFJLEtBQUsyQixVQUFULEVBQXFCO0FBQ2pCLFlBQUczQixNQUFNeUMsZUFBVCxFQUEwQjtBQUN0QnpDLGdCQUFNeUMsZUFBTjtBQUNIO0FBQ0QsWUFBR3pDLE1BQU1GLGNBQVQsRUFBeUI7QUFDckJFLGdCQUFNRixjQUFOO0FBQ0g7QUFDREUsY0FBTTBDLFlBQU4sR0FBcUIsSUFBckI7QUFDQTFDLGNBQU1DLFdBQU4sR0FBb0IsS0FBcEI7O0FBUmlCLG1DQVNOLEtBQUswQyxtQkFBTCxFQVRNO0FBQUEsWUFTZGQsQ0FUYyx3QkFTZEEsQ0FUYztBQUFBLFlBU1hDLENBVFcsd0JBU1hBLENBVFc7QUFBQSxZQVVqQmMsSUFWaUIsR0FVVixFQVZVO0FBQUEsWUFVTkMsT0FWTSxHQVVJN0MsTUFBTTZDLE9BQU4sSUFBaUI3QyxNQUFNOEMsT0FBTixDQUFjLENBQWQsRUFBaUJELE9BVnRDOztBQVduQkQsZUFBUUMsVUFBVyxDQUFDaEIsSUFBSSxLQUFLVCxVQUFMLENBQWdCMkIsV0FBckIsSUFBa0MsQ0FBOUMsR0FBb0QsSUFBM0Q7QUFDQSxhQUFLNUIsR0FBTCxDQUFTNkIsS0FBVCxDQUFlQyxXQUFmLENBQTJCLE1BQTNCLEVBQW1DTCxJQUFuQztBQUNEO0FBQ0QsYUFBTyxLQUFQO0FBQ0Q7Ozs4QkFFUzVDLEssRUFBTztBQUFBOztBQUNmLFVBQUlBLE1BQU1rRCxNQUFOLElBQWdCLENBQWhCLElBQXFCbEQsTUFBTWtELE1BQU4sS0FBaUJDLFNBQTFDLEVBQXFEO0FBQ25ELGFBQUt4QixVQUFMLEdBQWtCLEtBQWxCO0FBQ0FoQjtBQUNBLGFBQUtTLFVBQUwsQ0FBZ0JnQyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsUUFBOUI7QUFDQSxhQUFLQyxZQUFMLENBQWtCLFlBQU07QUFDdEIsY0FBSyxDQUFFLE1BQUszQixVQUFaLEVBQXlCO0FBQ3ZCLGtCQUFLNEIsU0FBTDtBQUNELFdBRkQsTUFFTztBQUNMLGtCQUFLQyxpQkFBTCxDQUF1QixZQUFNO0FBQzNCLG9CQUFLQyxJQUFMO0FBQ0QsYUFGRDtBQUdEO0FBQ0YsU0FSRDtBQVNEO0FBRUY7OztnQ0FFV3pELEssRUFBTztBQUFBOztBQUVqQixVQUFHQSxNQUFNeUMsZUFBVCxFQUEwQjtBQUN0QnpDLGNBQU15QyxlQUFOO0FBQ0g7QUFDRCxVQUFHekMsTUFBTUYsY0FBVCxFQUF5QjtBQUNyQkUsY0FBTUYsY0FBTjtBQUNIO0FBQ0RFLFlBQU0wQyxZQUFOLEdBQXFCLElBQXJCO0FBQ0ExQyxZQUFNQyxXQUFOLEdBQW9CLEtBQXBCOztBQUVBLFVBQUlELE1BQU1rRCxNQUFOLElBQWdCLENBQWhCLElBQXFCbEQsTUFBTWtELE1BQU4sS0FBaUJDLFNBQTFDLEVBQXFEO0FBQ25ELGFBQUt4QixVQUFMLEdBQWtCLElBQWxCO0FBQ0F2Qjs7QUFFQSxnQkFBTyxLQUFLMkIsS0FBWjtBQUNFLGVBQUtqRCxNQUFNRSxNQUFYO0FBQ0UsaUJBQUtvQyxVQUFMLENBQWdCc0MsU0FBaEIsR0FBNEIsRUFBNUI7QUFDQSxpQkFBS0MsVUFBTDs7QUFFQTtBQUNGLGVBQUs3RSxNQUFNSSxJQUFYO0FBQ0UsaUJBQUswRSxTQUFMO0FBQ0E7QUFDRixlQUFLOUUsTUFBTUMsTUFBWDtBQUNFLGlCQUFLeUUsaUJBQUwsQ0FBdUIsWUFBTTtBQUMzQixxQkFBS0MsSUFBTDtBQUNELGFBRkQ7QUFHQTtBQWJKO0FBZUQ7O0FBRUQsYUFBTyxLQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsVUFBSUksSUFBSTFFLE1BQVI7QUFBQSxVQUNFMkUsSUFBSXRELFFBRE47QUFBQSxVQUVFVCxJQUFJK0QsRUFBRUMsZUFGUjtBQUFBLFVBR0VDLElBQUlGLEVBQUVHLG9CQUFGLENBQXVCLE1BQXZCLEVBQStCLENBQS9CLENBSE47QUFBQSxVQUlFcEMsSUFBSWdDLEVBQUVLLFVBQUYsSUFBZ0JuRSxFQUFFb0UsV0FBbEIsSUFBaUNILEVBQUVHLFdBSnpDO0FBQUEsVUFLRXJDLElBQUkrQixFQUFFTyxXQUFGLElBQWdCckUsRUFBRXNFLFlBQWxCLElBQWlDTCxFQUFFSyxZQUx6QztBQU1BLGFBQU8sRUFBQ3hDLElBQUQsRUFBSUMsSUFBSixFQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUsyQixJQUFMO0FBQ0EsV0FBS2EsUUFBTDtBQUNEOzs7d0NBRW1CQyxPLEVBQVM7QUFDM0IsVUFBSUMsZ0JBQWdCQyxpQkFBaUIsS0FBS3JELFVBQXRCLENBQXBCO0FBQUEsVUFDSXNELGNBQWNDLFNBQVNILGNBQWMsa0JBQWQsQ0FBVCxDQURsQjtBQUVBLGFBQU8sS0FBS3RDLFNBQUwsR0FBaUJxQyxRQUFRSyxTQUFSLEdBQW9CRixXQUFyQyxHQUFtREgsUUFBUUssU0FBbEU7QUFDRDs7O3lDQUVvQkwsTyxFQUFTO0FBQzVCLFVBQUlDLGdCQUFnQkMsaUJBQWlCLEtBQUtyRCxVQUF0QixDQUFwQjtBQUFBLFVBQ0lzRCxjQUFjQyxTQUFTSCxjQUFjLG1CQUFkLENBQVQsQ0FEbEI7QUFFQSxhQUFPLEtBQUt0QyxTQUFMLEdBQWlCcUMsUUFBUU0sVUFBUixHQUFxQkgsV0FBdEMsR0FBb0RILFFBQVFNLFVBQW5FO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQUksS0FBSzlDLEtBQUwsSUFBY2pELE1BQU1JLElBQXhCLEVBQThCO0FBQzVCLGFBQUtrQyxVQUFMLENBQWdCZ0MsU0FBaEIsQ0FBMEIwQixNQUExQixDQUFpQyxNQUFqQztBQUNBO0FBQ0E7QUFDQSxhQUFLN0QsSUFBTCxDQUFVK0IsS0FBVixDQUFnQitCLE9BQWhCLEdBQTBCLE9BQTFCO0FBQ0EsYUFBSzlELElBQUwsQ0FBVStCLEtBQVYsQ0FBZ0JKLElBQWhCLEdBQXVCLEtBQUtvQyxvQkFBTCxDQUEwQixLQUFLN0QsR0FBL0IsSUFBc0MsRUFBdEMsR0FBMkMsSUFBbEU7QUFDQSxhQUFLRixJQUFMLENBQVUrQixLQUFWLENBQWdCaUMsR0FBaEIsR0FBdUIsS0FBS0MsbUJBQUwsQ0FBeUIsS0FBSy9ELEdBQUwsQ0FBU2dFLGFBQWxDLElBQW1ELEtBQUtsRSxJQUFMLENBQVVtRSxZQUE5RCxHQUE4RSxJQUFwRztBQUNBLGFBQUtyRCxLQUFMLEdBQWFqRCxNQUFNRyxPQUFuQjtBQUNBLGFBQUttQyxVQUFMLENBQWdCc0MsU0FBaEIsR0FBNEIsRUFBNUI7O0FBRUEsYUFBSzFCLFFBQUwsQ0FBY0MsU0FBZCxHQUEwQnBCLGFBQTFCOztBQUVBLGFBQUtlLFNBQUwsR0FBaUI7QUFDZkMsYUFBRyxDQURZO0FBRWZDLGFBQUc7QUFGWSxTQUFqQjs7QUFLQSxhQUFLNkIsVUFBTDtBQUNEO0FBQ0Y7Ozs4QkFFUztBQUNSLFdBQUs1QixLQUFMLEdBQWFqRCxNQUFNSSxJQUFuQjtBQUNBLFdBQUtrQyxVQUFMLENBQWdCZ0MsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLE1BQTlCO0FBQ0EsV0FBS3BDLElBQUwsQ0FBVStCLEtBQVYsQ0FBZ0IrQixPQUFoQixHQUEwQixNQUExQjtBQUNEOzs7aUNBRVlNLEUsRUFBSTtBQUFBOztBQUVmLFVBQUlDLFdBQVdDLFlBQVksWUFBTTtBQUMvQixZQUFJLE9BQUt2RCxRQUFMLENBQWNDLFNBQWQsTUFBNkIsQ0FBN0IsSUFBa0MsT0FBS04sVUFBM0MsRUFBdUQ7QUFDckQ2RCx3QkFBY0YsUUFBZDtBQUNBRDtBQUNBO0FBQ0Q7QUFDRixPQU5jLEVBTVosR0FOWSxDQUFmO0FBT0Q7OztzQ0FFaUJBLEUsRUFBSTtBQUFBOztBQUNwQkE7QUFDQSxVQUFJLEtBQUtyRCxRQUFMLENBQWNDLFNBQWQsSUFBMkJwQixhQUEvQixFQUE4QztBQUM1QztBQUNEO0FBQ0QsVUFBSXlFLFdBQVdDLFlBQVksWUFBTTtBQUMvQixZQUFJLE9BQUt2RCxRQUFMLENBQWNDLFNBQWQsTUFBNkIsQ0FBakMsRUFBb0M7QUFDbEN1RCx3QkFBY0YsUUFBZDtBQUNBO0FBQ0EsaUJBQUt0RCxRQUFMLENBQWNDLFNBQWQsR0FBMEJwQixhQUExQjtBQUNBLGlCQUFLTyxVQUFMLENBQWdCZ0MsU0FBaEIsQ0FBMEIwQixNQUExQixDQUFpQyxRQUFqQztBQUNBO0FBQ0Q7QUFDRixPQVJjLEVBUVosR0FSWSxDQUFmO0FBU0Q7OztnQ0FFVztBQUNWLFVBQUksS0FBSy9DLEtBQUwsSUFBY2pELE1BQU1HLE9BQXhCLEVBQWlDO0FBQy9CLGFBQUs4QyxLQUFMLEdBQWFqRCxNQUFNQyxNQUFuQjtBQUVEO0FBQ0Y7OzsyQkFFTTtBQUNMLFdBQUtnRCxLQUFMLEdBQWFqRCxNQUFNRyxPQUFuQjtBQUVEOzs7OEJBRVN3RyxLLEVBQU9DLEssRUFBOEI7QUFBQSxVQUF2QkMsY0FBdUIsdUVBQU4sSUFBTTs7QUFDN0MsVUFBSUMsZ0JBQUo7QUFBQSxVQUFhQyxnQkFBYjs7QUFFQSxVQUFLRixjQUFMLEVBQXNCO0FBQ3BCQyxrQkFBVTtBQUNSRSxrQkFBUUwsTUFBTUwsWUFBTixHQUFtQixDQURuQjtBQUVSdkQsYUFBRyxLQUFLbUQsb0JBQUwsQ0FBMEJTLEtBQTFCLElBQW1DQSxNQUFNTCxZQUFOLEdBQW1CLENBRmpEO0FBR1J0RCxhQUFHLEtBQUtWLFVBQUwsQ0FBZ0JnRSxZQUFoQixHQUErQixLQUFLRixtQkFBTCxDQUF5Qk8sS0FBekIsQ0FBL0IsR0FBaUU7QUFINUQsU0FBVjtBQUtBSSxrQkFBVTtBQUNSQyxrQkFBUUosTUFBTTNDLFdBQU4sR0FBa0IsQ0FEbEI7QUFFUmxCLGFBQUcsS0FBS21ELG9CQUFMLENBQTBCVSxLQUExQixJQUFtQ0EsTUFBTTNDLFdBQU4sR0FBa0IsQ0FGaEQ7QUFHUmpCLGFBQUcsS0FBS1YsVUFBTCxDQUFnQmdFLFlBQWhCLEdBQStCLEtBQUtGLG1CQUFMLENBQXlCUSxLQUF6QixDQUEvQixHQUFpRUEsTUFBTTNDLFdBQU4sR0FBa0I7QUFIOUUsU0FBVjtBQUtELE9BWEQsTUFXTztBQUNMNkMsa0JBQVVILEtBQVY7QUFDQUksa0JBQVVILEtBQVY7QUFDRDs7QUFFRCxVQUFJSyxLQUFLSCxRQUFRL0QsQ0FBUixHQUFZZ0UsUUFBUWhFLENBQTdCO0FBQ0EsVUFBSW1FLEtBQUtKLFFBQVE5RCxDQUFSLEdBQVkrRCxRQUFRL0QsQ0FBN0I7QUFDQSxVQUFJbUUsV0FBV0MsS0FBS0MsSUFBTCxDQUFVSixLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQXpCLENBQWY7O0FBRUEsVUFBSUksWUFBWVIsUUFBUUUsTUFBUixHQUFpQkQsUUFBUUMsTUFBekM7O0FBRUEsVUFBSU8sY0FBY0osWUFBWUcsU0FBOUI7QUFDQVIsY0FBUS9ELENBQVIsSUFBYWdFLFFBQVFoRSxDQUFyQjtBQUNBK0QsY0FBUTlELENBQVIsSUFBYStELFFBQVEvRCxDQUFyQjs7QUFFQSxVQUFJdUUsV0FBSixFQUFpQjtBQUNmLGVBQU87QUFDTHhFLGFBQUcrRCxRQUFRL0QsQ0FBUixHQUFZcUUsS0FBS0ksR0FBTCxDQUFTVixRQUFRL0QsQ0FBakIsQ0FEVjtBQUVMQyxhQUFHOEQsUUFBUTlELENBQVIsR0FBWW9FLEtBQUtJLEdBQUwsQ0FBU1YsUUFBUTlELENBQWpCO0FBRlYsU0FBUDtBQUtELE9BTkQsTUFNTztBQUNMLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7OztnQ0FFV3lFLEksRUFBTTtBQUFBOztBQUNoQixVQUFJQSxRQUFRLEtBQVosRUFBbUI7QUFDbkIsVUFBSUMsZUFBZUQsS0FBS3BFLFdBQUwsRUFBbkI7QUFDQXFFLHFCQUFlQSxhQUFhQyxNQUFiLENBQW9CLENBQXBCLEVBQXVCQyxXQUF2QixLQUF1Q0YsYUFBYWhGLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBdEQ7QUFDQSxXQUFLSixVQUFMLENBQWdCNEIsS0FBaEIsQ0FBc0IsV0FBV3dELFlBQVgsR0FBMEIsT0FBaEQsSUFBMkQsTUFBM0Q7QUFDQUcsaUJBQVcsWUFBTTtBQUNmLGVBQUt2RixVQUFMLENBQWdCNEIsS0FBaEIsQ0FBc0IsV0FBV3dELFlBQVgsR0FBMEIsT0FBaEQsSUFBMkQsYUFBM0Q7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7NkJBRVE7QUFDUCxVQUFJM0UsSUFBSSxLQUFLVCxVQUFMLENBQWdCMkIsV0FBeEI7QUFBQSxVQUNJakIsSUFBSSxLQUFLVixVQUFMLENBQWdCZ0UsWUFEeEI7O0FBR0EsVUFBSSxLQUFLSixvQkFBTCxDQUEwQixLQUFLL0QsSUFBL0IsS0FBd0MsQ0FBeEMsSUFBNkMsS0FBS1csU0FBTCxDQUFlQyxDQUFmLEtBQXFCLENBQUMsQ0FBdkUsRUFBMEU7QUFDdEUsYUFBS1osSUFBTCxDQUFVK0IsS0FBVixDQUFnQkMsV0FBaEIsQ0FBNEIsTUFBNUIsRUFBb0MsQ0FBcEM7QUFDQSxhQUFLckIsU0FBTCxDQUFlQyxDQUFmLEdBQW1CLENBQW5CO0FBQ0EsZUFBTyxNQUFQO0FBQ0g7O0FBRUQsVUFBSSxLQUFLcUQsbUJBQUwsQ0FBeUIsS0FBS2pFLElBQTlCLEtBQXVDLENBQXZDLElBQTRDLEtBQUtXLFNBQUwsQ0FBZUUsQ0FBZixLQUFxQixDQUFyRSxFQUF3RTtBQUNwRSxhQUFLYixJQUFMLENBQVUrQixLQUFWLENBQWdCQyxXQUFoQixDQUE0QixLQUE1QixFQUFtQyxDQUFuQztBQUNBLGFBQUtyQixTQUFMLENBQWVFLENBQWYsR0FBbUIsQ0FBQyxDQUFwQjtBQUNBLGVBQU8sS0FBUDtBQUNIOztBQUVELFVBQUksS0FBS2tELG9CQUFMLENBQTBCLEtBQUsvRCxJQUEvQixLQUF3Q1ksSUFBSThDLFNBQVMsS0FBSzFELElBQUwsQ0FBVThCLFdBQW5CLENBQTVDLElBQStFLEtBQUtuQixTQUFMLENBQWVDLENBQWYsS0FBcUIsQ0FBeEcsRUFBMkc7QUFDdkcsYUFBS1osSUFBTCxDQUFVK0IsS0FBVixDQUFnQkMsV0FBaEIsQ0FBNEIsS0FBNUIsRUFBbUNuQixJQUFJNkMsU0FBUyxLQUFLMUQsSUFBTCxDQUFVbUUsWUFBbkIsQ0FBdkM7QUFDQSxhQUFLeEQsU0FBTCxDQUFlQyxDQUFmLEdBQW1CLENBQUMsQ0FBcEI7QUFDQSxlQUFPLE9BQVA7QUFDSDs7QUFFRCxVQUFJLEtBQUtxRCxtQkFBTCxDQUF5QixLQUFLakUsSUFBOUIsSUFBc0MsRUFBdEMsSUFBNENhLElBQUk2QyxTQUFTLEtBQUsxRCxJQUFMLENBQVVtRSxZQUFuQixDQUFoRCxJQUFvRixLQUFLeEQsU0FBTCxDQUFlRSxDQUFmLEtBQXFCLENBQUMsQ0FBOUcsRUFBaUg7QUFDN0csWUFBSSxLQUFLa0Qsb0JBQUwsQ0FBMEIsS0FBSy9ELElBQS9CLElBQXVDLEtBQUsrRCxvQkFBTCxDQUEwQixLQUFLN0QsR0FBL0IsSUFBc0MsS0FBS0YsSUFBTCxDQUFVOEIsV0FBaEQsR0FBOEQsQ0FBckcsSUFBMEcsS0FBS2lDLG9CQUFMLENBQTBCLEtBQUsvRCxJQUEvQixJQUF1QyxLQUFLK0Qsb0JBQUwsQ0FBMEIsS0FBSzdELEdBQS9CLElBQXNDLEtBQUtBLEdBQUwsQ0FBUzRCLFdBQXBNLEVBQWlOO0FBQzdNLGVBQUtuQixTQUFMLENBQWVFLENBQWYsR0FBbUIsQ0FBbkI7QUFDQSxpQkFBTyxLQUFQO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsZ0JBQU0sTUFBTjtBQUNIO0FBQ0o7O0FBRUQsYUFBTyxLQUFQO0FBQ0Q7Ozs4QkFFUzhFLE0sRUFBUTtBQUNoQkEsYUFBT3hELFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCO0FBQ0EsVUFBSXdELGlCQUFKO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3pGLE1BQUwsQ0FBWTBGLE1BQWhDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUMzQyxZQUFJRSxNQUFNLEtBQUszRixNQUFMLENBQVl5RixDQUFaLENBQVY7QUFDQSxZQUFJRSxJQUFJNUQsU0FBSixDQUFjNkQsUUFBZCxDQUF1QixNQUF2QixDQUFKLEVBQW9DO0FBQ2xDSixxQkFBV0MsQ0FBWDtBQUNBO0FBQ0Q7QUFDRjs7QUFFREksU0FBRyxNQUFILEVBQVc7QUFDVEMsaUJBQVMsT0FEQTtBQUVUQyx1QkFBZSxNQUZOO0FBR1RDLHFCQUFhLFFBSEo7QUFJVEMsb0JBQVksWUFKSDtBQUtUQyxvQkFBWVgsT0FBT1ksT0FBUCxDQUFlQztBQUxsQixPQUFYOztBQVFBLFdBQUtwRyxNQUFMLENBQVlxRyxNQUFaLENBQW1CYixRQUFuQixFQUE2QixDQUE3QjtBQUNEOzs7K0JBRVU7QUFBQTs7QUFDVCxVQUFJOztBQUVGLFlBQUksS0FBSzlFLEtBQUwsSUFBY2pELE1BQU1DLE1BQXhCLEVBQWdDO0FBQzlCNEksZ0NBQXNCLFlBQU07QUFBRSxtQkFBS3JELFFBQUw7QUFBa0IsV0FBaEQ7QUFDQTtBQUNEOztBQUVELGFBQUssSUFBSXdDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLOUUsUUFBTCxDQUFjQyxTQUFsQyxFQUE2QzZFLEdBQTdDLEVBQWtEO0FBQ2hELGNBQUljLGFBQWEsS0FBS0MsTUFBTCxFQUFqQjs7QUFFQSxjQUFJRCxVQUFKLEVBQWdCO0FBQ1o7QUFDQSxpQkFBS0UsV0FBTCxDQUFpQkYsVUFBakI7QUFDSDs7QUFFRCxjQUFJaEYsT0FBUSxLQUFLb0Msb0JBQUwsQ0FBMEIsS0FBSy9ELElBQS9CLElBQXVDLEtBQUtXLFNBQUwsQ0FBZUMsQ0FBdkQsR0FBNEQsSUFBdkU7QUFBQSxjQUNJdkMsSUFBSSxLQUFLNEYsbUJBQUwsQ0FBeUIsS0FBS2pFLElBQTlCLENBRFI7QUFBQSxjQUVJOEcsSUFBSSxLQUFLbkcsU0FBTCxDQUFlRSxDQUFmLEdBQW1CLENBQUMsQ0FGNUI7QUFBQSxjQUdJbUQsTUFBTTNGLElBQUl5SSxDQUFKLEdBQVEsSUFIbEI7O0FBS0E7Ozs7O0FBS0EsZUFBSzlHLElBQUwsQ0FBVStCLEtBQVYsQ0FBZ0JDLFdBQWhCLENBQTRCLE1BQTVCLEVBQW9DTCxJQUFwQztBQUNBLGVBQUszQixJQUFMLENBQVUrQixLQUFWLENBQWdCQyxXQUFoQixDQUE0QixLQUE1QixFQUFtQ2dDLEdBQW5DOztBQUVBLGNBQUkrQyxVQUFVLEtBQUs5QyxtQkFBTCxDQUF5QixLQUFLakUsSUFBOUIsQ0FBZDtBQUFBLGNBQ0VnSCxXQUFXekgsU0FBUzBILGFBQVQsQ0FBdUIsNEJBQXZCLENBRGI7QUFBQSxjQUVFQyxlQUFlLEtBQUtqRCxtQkFBTCxDQUF5QitDLFFBQXpCLElBQXFDQSxTQUFTN0MsWUFGL0Q7O0FBSUEsY0FBSTRDLFVBQVVHLFlBQWQsRUFBNEI7O0FBRTFCLGlCQUFLOUcsTUFBTCxDQUFZK0csT0FBWixDQUFvQixVQUFDeEIsTUFBRCxFQUFZO0FBQzlCLGtCQUFJUCxjQUFjLE9BQUtnQyxTQUFMLENBQWUsT0FBS3BILElBQXBCLEVBQTBCMkYsTUFBMUIsQ0FBbEI7O0FBR0Esa0JBQUlQLFlBQVl4RSxDQUFaLElBQWlCd0UsWUFBWXZFLENBQWpDLEVBQW9DO0FBQ2xDLG9CQUFJLE9BQUtFLFFBQUwsQ0FBY0MsU0FBZCxLQUE0QnBCLGFBQWhDLEVBQStDO0FBQzdDLHlCQUFLeUgsU0FBTCxDQUFlMUIsTUFBZjtBQUNEOztBQUVELG9CQUFJUCxZQUFZeEUsQ0FBaEIsRUFBbUI7QUFDakIseUJBQUtELFNBQUwsQ0FBZUMsQ0FBZixHQUFtQndFLFlBQVl4RSxDQUEvQjtBQUNEOztBQUVELG9CQUFJd0UsWUFBWXZFLENBQWhCLEVBQW1CO0FBQ2pCLHlCQUFLRixTQUFMLENBQWVFLENBQWYsR0FBbUJ1RSxZQUFZdkUsQ0FBL0I7QUFDRDtBQUNGO0FBQ0YsYUFqQkQ7QUFrQkQ7QUFHRjs7QUFFRDZGLDhCQUFzQixZQUFNO0FBQUUsaUJBQUtyRCxRQUFMO0FBQWtCLFNBQWhEO0FBQ0QsT0ExREQsQ0EwREcsT0FBTXZFLENBQU4sRUFBUztBQUNSLFlBQUlBLE1BQU0sTUFBVixFQUFrQjtBQUNkLGVBQUt3SSxPQUFMO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZUFBS0EsT0FBTDtBQUNBLGdCQUFPeEksQ0FBUDtBQUNIO0FBQ0o7QUFDRiIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3RhdGUgPSB7XG4gIFBBVVNFRDogJ3BhdXNlZCcsXG4gIFZJUkdJTjogJ3ZpcmdpbicsXG4gIFJVTk5JTkc6ICdydW5uaW5nJyxcbiAgTE9TVDogJ2xvc3QnXG59O1xud2luZG93Lm1vYmlsZWNoZWNrID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjaGVjayA9IGZhbHNlO1xuICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xuICByZXR1cm4gY2hlY2s7XG59O1xuXG4vLyBsZWZ0OiAzNywgdXA6IDM4LCByaWdodDogMzksIGRvd246IDQwLFxuLy8gc3BhY2ViYXI6IDMyLCBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsIGVuZDogMzUsIGhvbWU6IDM2XG52YXIga2V5cyA9IHszNzogMSwgMzg6IDEsIDM5OiAxLCA0MDogMX07XG5cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyAgXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgd2luZG93Lm9ud2hlZWwgPSBwcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBwcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gIHdpbmRvdy5vbnRvdWNobW92ZSAgPSBwcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gIGRvY3VtZW50Lm9ua2V5ZG93biAgPSBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDsgIFxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7ICBcbn1cblxuY29uc3QgREVGQVVMVF9TUEVFRCA9IG1vYmlsZWNoZWNrKCkgPyA0IDogNjtcblxuY29uc29sZS5sb2coYFNwZWVkIHNldCB0byAke0RFRkFVTFRfU1BFRUR9YCk7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbGxcIik7XG4gICAgdGhpcy5wYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZFwiKTtcbiAgICB0aGlzLmdhbWVXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtd3JhcHBlclwiKTtcbiAgICB0aGlzLmJyaWNrcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2FtZS13cmFwcGVyIC5pY29ucyA+IC5pY29uXCIpKTtcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHtcbiAgICAgIHg6IDEsXG4gICAgICB5OiAxXG4gICAgfTtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUuVklSR0lOO1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBiYWxsU3BlZWQ6IERFRkFVTFRfU1BFRURcbiAgICB9O1xuICAgIHRoaXMuaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuXG4gICAgXG5cbiAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlU3RhcnQuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVFbmQuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuaGFuZGxlRW5kLmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBoYW5kbGVNb3ZlKGV2ZW50KSB7XG4gICAgXG4gICAgXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgICBpZihldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICBsZXQge3gsIHl9ID0gdGhpcy5nZXRXaW5kb3dEaW1lbnNpb25zKCksXG4gICAgICAgIGxlZnQgPSBcIlwiLCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICBsZWZ0ID0gKGNsaWVudFggLSAoKHggLSB0aGlzLmdhbWVXaW5kb3cub2Zmc2V0V2lkdGgpLzIpKSArIFwicHhcIlxuICAgICAgdGhpcy5wYWQuc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIsIGxlZnQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVFbmQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDAgfHwgZXZlbnQuYnV0dG9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgZW5hYmxlU2Nyb2xsKCk7XG4gICAgICB0aGlzLmdhbWVXaW5kb3cuY2xhc3NMaXN0LmFkZChcInBhdXNlZFwiKTtcbiAgICAgIHRoaXMuc2xvd0JhbGxEb3duKCgpID0+IHtcbiAgICAgICAgaWYgKCAhIHRoaXMuaXNEcmFnZ2luZyApIHtcbiAgICAgICAgICB0aGlzLnBhdXNlR2FtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhcnRNb3ZpbmdTbW9vdGgoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0KGV2ZW50KSB7XG5cbiAgICBpZihldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICAgIGlmIChldmVudC5idXR0b24gPT0gMCB8fCBldmVudC5idXR0b24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIGRpc2FibGVTY3JvbGwoKTtcblxuICAgICAgc3dpdGNoKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY2FzZSBTdGF0ZS5WSVJHSU46XG4gICAgICAgICAgdGhpcy5nYW1lV2luZG93LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5sYXVuY2hCYWxsKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU3RhdGUuTE9TVDpcbiAgICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0YXRlLlBBVVNFRDpcbiAgICAgICAgICB0aGlzLnN0YXJ0TW92aW5nU21vb3RoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpOyAgXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0V2luZG93RGltZW5zaW9ucygpIHsgIFxuICAgIGxldCB3ID0gd2luZG93LFxuICAgICAgZCA9IGRvY3VtZW50LFxuICAgICAgZSA9IGQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgZyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSxcbiAgICAgIHggPSB3LmlubmVyV2lkdGggfHwgZS5jbGllbnRXaWR0aCB8fCBnLmNsaWVudFdpZHRoLFxuICAgICAgeSA9IHcuaW5uZXJIZWlnaHR8fCBlLmNsaWVudEhlaWdodHx8IGcuY2xpZW50SGVpZ2h0O1xuICAgIHJldHVybiB7eCwgeX07XG4gIH1cblxuICBsYXVuY2hCYWxsKCkge1xuICAgIHRoaXMucGxheSgpO1xuICAgIHRoaXMubW92ZUJhbGwoKTtcbiAgfVxuXG4gIGdldEVsZW1lbnRPZmZzZXRUb3AoZWxlbWVudCkgeyAgICBcbiAgICBsZXQgZ2FtZVdpbmRvd0NzcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5nYW1lV2luZG93KSxcbiAgICAgICAgYm9yZGVyV2lkdGggPSBwYXJzZUludChnYW1lV2luZG93Q3NzW1wiYm9yZGVyLXRvcC13aWR0aFwiXSk7XG4gICAgcmV0dXJuIHRoaXMuaXNGaXJlZm94ID8gZWxlbWVudC5vZmZzZXRUb3AgLSBib3JkZXJXaWR0aCA6IGVsZW1lbnQub2Zmc2V0VG9wO1xuICB9XG5cbiAgZ2V0RWxlbWVudE9mZnNldExlZnQoZWxlbWVudCkgeyAgICBcbiAgICBsZXQgZ2FtZVdpbmRvd0NzcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5nYW1lV2luZG93KSxcbiAgICAgICAgYm9yZGVyV2lkdGggPSBwYXJzZUludChnYW1lV2luZG93Q3NzW1wiYm9yZGVyLWxlZnQtd2lkdGhcIl0pO1xuICAgIHJldHVybiB0aGlzLmlzRmlyZWZveCA/IGVsZW1lbnQub2Zmc2V0TGVmdCAtIGJvcmRlcldpZHRoIDogZWxlbWVudC5vZmZzZXRMZWZ0O1xuICB9XG5cbiAgcmVzZXRHYW1lKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09IFN0YXRlLkxPU1QpIHtcbiAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKFwibG9zdFwiKTtcbiAgICAgIC8vIGNoYW5nZSB0byBkaXNwbGF5ID0gYmxvY2sgbXVzdCBib21lIGJlZm9yZSBiYWxsLm9mZnNldEhlaWdodFxuICAgICAgLy8gYmVjYXVzZSBvZmZzZXRIZWlnaHQgZm9yIGVsZW1lbnRzIG5vdCBpbiB0aGUgRE9NIHdpbGwgYmUgMFxuICAgICAgdGhpcy5iYWxsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB0aGlzLmJhbGwuc3R5bGUubGVmdCA9IHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5wYWQpICsgMjAgKyBcInB4XCI7XG4gICAgICB0aGlzLmJhbGwuc3R5bGUudG9wID0gKHRoaXMuZ2V0RWxlbWVudE9mZnNldFRvcCh0aGlzLnBhZC5wYXJlbnRFbGVtZW50KSAtIHRoaXMuYmFsbC5vZmZzZXRIZWlnaHQpICsgXCJweFwiO1xuICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLlJVTk5JTkc7XG4gICAgICB0aGlzLmdhbWVXaW5kb3cuY2xhc3NOYW1lID0gXCJcIjtcblxuICAgICAgdGhpcy5zZXR0aW5ncy5iYWxsU3BlZWQgPSBERUZBVUxUX1NQRUVEO1xuXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IHtcbiAgICAgICAgeDogMSxcbiAgICAgICAgeTogMVxuICAgICAgfTtcblxuICAgICAgdGhpcy5sYXVuY2hCYWxsKCk7XG4gICAgfVxuICB9XG5cbiAgZW5kR2FtZSgpIHtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUuTE9TVDtcbiAgICB0aGlzLmdhbWVXaW5kb3cuY2xhc3NMaXN0LmFkZChcImxvc3RcIik7XG4gICAgdGhpcy5iYWxsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHNsb3dCYWxsRG93bihjYikge1xuXG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYmFsbFNwZWVkLS0gPT0gMCB8fCB0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIGNiKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG5cbiAgc3RhcnRNb3ZpbmdTbW9vdGgoY2IpIHtcbiAgICBjYigpO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmJhbGxTcGVlZCA9PSBERUZBVUxUX1NQRUVEKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmJhbGxTcGVlZCsrID49IDUpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIC8vIGhhY2sgZm9yIGJ1ZyByZXNpc3RhbmNlIEItfFxuICAgICAgICB0aGlzLnNldHRpbmdzLmJhbGxTcGVlZCA9IERFRkFVTFRfU1BFRUQ7XG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKFwicGF1c2VkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHBhdXNlR2FtZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PSBTdGF0ZS5SVU5OSU5HKSB7XG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGUuUEFVU0VEO1xuICAgICAgXG4gICAgfVxuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUuUlVOTklORztcbiAgICBcbiAgfVxuXG4gIGNvbGxpc2lvbigkZGl2MSwgJGRpdjIsIGFyZU5vdEVsZW1lbnRzID0gdHJ1ZSkge1xuICAgIGxldCBjaXJjbGUxLCBjaXJjbGUyO1xuXG4gICAgaWYgKCBhcmVOb3RFbGVtZW50cyApIHtcbiAgICAgIGNpcmNsZTEgPSB7XG4gICAgICAgIHJhZGl1czogJGRpdjEub2Zmc2V0SGVpZ2h0LzIsIFxuICAgICAgICB4OiB0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KCRkaXYxKSArICRkaXYxLm9mZnNldEhlaWdodC8yLCBcbiAgICAgICAgeTogdGhpcy5nYW1lV2luZG93Lm9mZnNldEhlaWdodCAtIHRoaXMuZ2V0RWxlbWVudE9mZnNldFRvcCgkZGl2MSkgLSAxNVxuICAgICAgfTtcbiAgICAgIGNpcmNsZTIgPSB7XG4gICAgICAgIHJhZGl1czogJGRpdjIub2Zmc2V0V2lkdGgvMixcbiAgICAgICAgeDogdGhpcy5nZXRFbGVtZW50T2Zmc2V0TGVmdCgkZGl2MikgKyAkZGl2Mi5vZmZzZXRXaWR0aC8yLCBcbiAgICAgICAgeTogdGhpcy5nYW1lV2luZG93Lm9mZnNldEhlaWdodCAtIHRoaXMuZ2V0RWxlbWVudE9mZnNldFRvcCgkZGl2MikgLSAkZGl2Mi5vZmZzZXRXaWR0aC8yXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjaXJjbGUxID0gJGRpdjE7XG4gICAgICBjaXJjbGUyID0gJGRpdjJcbiAgICB9XG5cbiAgICB2YXIgZHggPSBjaXJjbGUxLnggLSBjaXJjbGUyLng7XG4gICAgdmFyIGR5ID0gY2lyY2xlMS55IC0gY2lyY2xlMi55O1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICBsZXQgcmFkaXVzU3VtID0gY2lyY2xlMS5yYWRpdXMgKyBjaXJjbGUyLnJhZGl1cztcblxuICAgIGxldCBpc0NvbGxpc2lvbiA9IGRpc3RhbmNlIDw9IHJhZGl1c1N1bTtcbiAgICBjaXJjbGUxLnggLT0gY2lyY2xlMi54O1xuICAgIGNpcmNsZTEueSAtPSBjaXJjbGUyLnk7XG5cbiAgICBpZiAoaXNDb2xsaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNpcmNsZTEueCAvIE1hdGguYWJzKGNpcmNsZTEueCksXG4gICAgICAgIHk6IGNpcmNsZTEueSAvIE1hdGguYWJzKGNpcmNsZTEueSlcbiAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGJsaW5rQm9yZGVyKHNpZGUpIHtcbiAgICBpZiAoc2lkZSA9PSBcInBhZFwiKSByZXR1cm47XG4gICAgbGV0IHNhbml0emVkU2lkZSA9IHNpZGUudG9Mb3dlckNhc2UoKTtcbiAgICBzYW5pdHplZFNpZGUgPSBzYW5pdHplZFNpZGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzYW5pdHplZFNpZGUuc2xpY2UoMSk7XG4gICAgdGhpcy5nYW1lV2luZG93LnN0eWxlWydib3JkZXInICsgc2FuaXR6ZWRTaWRlICsgJ0NvbG9yJ10gPSBcImdyZXlcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ2FtZVdpbmRvdy5zdHlsZVsnYm9yZGVyJyArIHNhbml0emVkU2lkZSArICdDb2xvciddID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgYm91bmNlKCkge1xuICAgIGxldCB4ID0gdGhpcy5nYW1lV2luZG93Lm9mZnNldFdpZHRoLCBcbiAgICAgICAgeSA9IHRoaXMuZ2FtZVdpbmRvdy5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5nZXRFbGVtZW50T2Zmc2V0TGVmdCh0aGlzLmJhbGwpIDw9IDAgJiYgdGhpcy5kaXJlY3Rpb24ueCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5iYWxsLnN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLCAwKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IDE7XG4gICAgICAgIHJldHVybiAnbGVmdCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2V0RWxlbWVudE9mZnNldFRvcCh0aGlzLmJhbGwpIDw9IDAgJiYgdGhpcy5kaXJlY3Rpb24ueSA9PT0gMSkge1xuICAgICAgICB0aGlzLmJhbGwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0b3BcIiwgMCk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgPSAtMTtcbiAgICAgICAgcmV0dXJuICd0b3AnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KHRoaXMuYmFsbCkgPj0geCAtIHBhcnNlSW50KHRoaXMuYmFsbC5vZmZzZXRXaWR0aCkgJiYgdGhpcy5kaXJlY3Rpb24ueCA9PT0gMSkge1xuICAgICAgICB0aGlzLmJhbGwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0b3BcIiwgeSAtIHBhcnNlSW50KHRoaXMuYmFsbC5vZmZzZXRIZWlnaHQpKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IC0xO1xuICAgICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKHRoaXMuYmFsbCkgKyAyMSA+PSB5IC0gcGFyc2VJbnQodGhpcy5iYWxsLm9mZnNldEhlaWdodCkgJiYgdGhpcy5kaXJlY3Rpb24ueSA9PT0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5iYWxsKSA+IHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5wYWQpIC0gdGhpcy5iYWxsLm9mZnNldFdpZHRoIC0gNSAmJiB0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KHRoaXMuYmFsbCkgPCB0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KHRoaXMucGFkKSArIHRoaXMucGFkLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi55ID0gMTtcbiAgICAgICAgICAgIHJldHVybiAncGFkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93ICdMb3N0JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGtpbGxCcmljaygkYnJpY2spIHtcbiAgICAkYnJpY2suY2xhc3NMaXN0LmFkZChcImRlYWRcIik7XG4gICAgbGV0IHRvUmVtb3ZlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5icmlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0bXAgPSB0aGlzLmJyaWNrc1tpXTtcbiAgICAgIGlmICh0bXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWFkJykpIHtcbiAgICAgICAgdG9SZW1vdmUgPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnYSgnc2VuZCcsIHtcbiAgICAgIGhpdFR5cGU6ICdldmVudCcsXG4gICAgICBldmVudENhdGVnb3J5OiAnR2FtZScsXG4gICAgICBldmVudEFjdGlvbjogJ2Jyb2tlbicsXG4gICAgICBldmVudExhYmVsOiAnQnJpY2sgSGl0cycsXG4gICAgICBldmVudFZhbHVlOiAkYnJpY2suZGF0YXNldC5uYW1lXG4gICAgfSk7XG5cbiAgICB0aGlzLmJyaWNrcy5zcGxpY2UodG9SZW1vdmUsIDEpO1xuICB9XG5cbiAgbW92ZUJhbGwoKSB7XG4gICAgdHJ5IHtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gU3RhdGUuUEFVU0VEKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMubW92ZUJhbGwoKTsgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldHRpbmdzLmJhbGxTcGVlZDsgaSsrKSB7XG4gICAgICAgIGxldCBib3VuY2VTaWRlID0gdGhpcy5ib3VuY2UoKTtcblxuICAgICAgICBpZiAoYm91bmNlU2lkZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYm91bmNlU2lkZSk7XG4gICAgICAgICAgICB0aGlzLmJsaW5rQm9yZGVyKGJvdW5jZVNpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlZnQgPSAodGhpcy5nZXRFbGVtZW50T2Zmc2V0TGVmdCh0aGlzLmJhbGwpICsgdGhpcy5kaXJlY3Rpb24ueCkgKyBcInB4XCIsXG4gICAgICAgICAgICBhID0gdGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKHRoaXMuYmFsbCksXG4gICAgICAgICAgICBiID0gdGhpcy5kaXJlY3Rpb24ueSAqIC0xLFxuICAgICAgICAgICAgdG9wID0gYSArIGIgKyBcInB4XCI7XG5cbiAgICAgICAgLyppZiAodGhpcy5pc0ZpcmVmb3gpIHtcbiAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgIHRvcCA9IGEgKyBiICsgXCJweFwiO1xuICAgICAgICB9Ki9cblxuICAgICAgICB0aGlzLmJhbGwuc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIsIGxlZnQpO1xuICAgICAgICB0aGlzLmJhbGwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0b3BcIiwgdG9wKTtcblxuICAgICAgICBsZXQgYmFsbFRvcCA9IHRoaXMuZ2V0RWxlbWVudE9mZnNldFRvcCh0aGlzLmJhbGwpLFxuICAgICAgICAgIGxhc3RJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5pY29ucyAuaWNvbjpsYXN0LWNoaWxkXCIpLFxuICAgICAgICAgIHRvcFRocmVzaG9sZCA9IHRoaXMuZ2V0RWxlbWVudE9mZnNldFRvcChsYXN0SWNvbikgKyBsYXN0SWNvbi5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoYmFsbFRvcCA8IHRvcFRocmVzaG9sZCkge1xuXG4gICAgICAgICAgdGhpcy5icmlja3MuZm9yRWFjaCgoJGJyaWNrKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXNDb2xsaXNpb24gPSB0aGlzLmNvbGxpc2lvbih0aGlzLmJhbGwsICRicmljayk7XG5cblxuICAgICAgICAgICAgaWYgKGlzQ29sbGlzaW9uLnggfHwgaXNDb2xsaXNpb24ueSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5iYWxsU3BlZWQgPT09IERFRkFVTFRfU1BFRUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtpbGxCcmljaygkYnJpY2spO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAoaXNDb2xsaXNpb24ueCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnggPSBpc0NvbGxpc2lvbi54O1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBpZiAoaXNDb2xsaXNpb24ueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgPSBpc0NvbGxpc2lvbi55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy5tb3ZlQmFsbCgpOyB9KTtcbiAgICB9ICBjYXRjaChlKSB7XG4gICAgICAgIGlmIChlID09PSBcIkxvc3RcIikge1xuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgICAgIHRocm93IChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19

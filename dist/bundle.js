function preventDefault(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}function preventDefaultForScrollKeys(e){if(keys[e.keyCode])return preventDefault(e),!1}function disableScroll(){window.addEventListener&&window.addEventListener("DOMMouseScroll",preventDefault,!1),window.onwheel=preventDefault,window.onmousewheel=document.onmousewheel=preventDefault,window.ontouchmove=preventDefault,document.onkeydown=preventDefaultForScrollKeys}function enableScroll(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",preventDefault,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}window.addEventListener("load",()=>{let e=document.getElementById("delay-script-load");e.parentElement.removeChild(e),setTimeout(()=>{let e,t=document.querySelector("#game-wrapper .icons"),i=["angularjs","apache","bootstrap","bower","c","cplusplus","csharp","css3","d3js","debian","docker","dot-net","html5","jasmine","javascript","jquery","mongodb","mysql","nginx","php-flat","react","typescript","ubuntu","wordpress"];i.forEach((s,n)=>{n%parseInt(i.length/3)!=0&&0!==n||(e=document.createElement("br"),t.appendChild(e));let a=document.createElement("img"),o=document.createElement("div");o.className="icon",a.title=s,a.src="assets/images/"+s+".svg",o.dataset.name=s,o.appendChild(a),t.appendChild(o)});new Game})},!1),window.addEventListener("resize",()=>{resizeHomeSection()});const State={PAUSED:"paused",VIRGIN:"virgin",RUNNING:"running",LOST:"lost"};window.mobilecheck=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e};var keys={37:1,38:1,39:1,40:1};const DEFAULT_SPEED=mobilecheck()?4:6;console.log(`Speed set to ${DEFAULT_SPEED}`);class Game{constructor(){this.ball=document.getElementById("ball"),this.pad=document.getElementById("pad"),this.gameWindow=document.getElementById("game-wrapper"),this.bricks=Array.prototype.slice.call(document.querySelectorAll("#game-wrapper .icons > .icon")),this.isDragging=!1,this.direction={x:1,y:1},this.state=State.VIRGIN,this.settings={ballSpeed:DEFAULT_SPEED},this.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,this.pad.addEventListener("touchstart",this.handleStart.bind(this),!1),this.pad.addEventListener("mousedown",this.handleStart.bind(this),!1),document.addEventListener("touchend",this.handleEnd.bind(this),!1),document.addEventListener("touchcancel",this.handleEnd.bind(this),!1),document.addEventListener("mouseup",this.handleEnd.bind(this),!1),document.addEventListener("touchmove",this.handleMove.bind(this),!1),document.addEventListener("mousemove",this.handleMove.bind(this),!1)}handleMove(e){if(this.isDragging){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1;let{x:t,y:i}=this.getWindowDimensions(),s="";s=(e.clientX||e.touches[0].clientX)-(t-this.gameWindow.offsetWidth)/2+"px",this.pad.style.setProperty("left",s)}return!1}handleEnd(e){0!=e.button&&void 0!==e.button||(this.isDragging=!1,enableScroll(),this.gameWindow.classList.add("paused"),this.slowBallDown(()=>{this.isDragging?this.startMovingSmooth(()=>{this.play()}):this.pauseGame()}))}handleStart(e){if(e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1,0==e.button||void 0===e.button)switch(this.isDragging=!0,disableScroll(),this.state){case State.VIRGIN:this.gameWindow.className="",this.launchBall();break;case State.LOST:this.resetGame();break;case State.PAUSED:this.startMovingSmooth(()=>{this.play()})}return!1}getWindowDimensions(){let e=window,t=document,i=t.documentElement,s=t.getElementsByTagName("body")[0];return{x:e.innerWidth||i.clientWidth||s.clientWidth,y:e.innerHeight||i.clientHeight||s.clientHeight}}launchBall(){this.play(),this.moveBall()}getElementOffsetTop(e){let t=getComputedStyle(this.gameWindow),i=parseInt(t["border-top-width"]);return this.isFirefox?e.offsetTop-i:e.offsetTop}getElementOffsetLeft(e){let t=getComputedStyle(this.gameWindow),i=parseInt(t["border-left-width"]);return this.isFirefox?e.offsetLeft-i:e.offsetLeft}resetGame(){this.state==State.LOST&&(this.gameWindow.classList.remove("lost"),this.ball.style.display="block",this.ball.style.left=this.getElementOffsetLeft(this.pad)+20+"px",this.ball.style.top=this.getElementOffsetTop(this.pad.parentElement)-this.ball.offsetHeight+"px",this.state=State.RUNNING,this.gameWindow.className="",this.settings.ballSpeed=DEFAULT_SPEED,this.direction={x:1,y:1},this.launchBall())}endGame(){this.state=State.LOST,this.gameWindow.classList.add("lost"),this.ball.style.display="none"}slowBallDown(e){let t=setInterval(()=>{if(0==this.settings.ballSpeed--||this.isDragging)return clearInterval(t),void e()},100)}startMovingSmooth(e){if(e(),this.settings.ballSpeed==DEFAULT_SPEED)return;let t=setInterval(()=>{if(this.settings.ballSpeed++>=5)return clearInterval(t),this.settings.ballSpeed=DEFAULT_SPEED,void this.gameWindow.classList.remove("paused")},100)}pauseGame(){this.state==State.RUNNING&&(this.state=State.PAUSED)}play(){this.state=State.RUNNING}collision(e,t,i=!0){let s,n;i?(s={radius:e.offsetHeight/2,x:this.getElementOffsetLeft(e)+e.offsetHeight/2,y:this.gameWindow.offsetHeight-this.getElementOffsetTop(e)-15},n={radius:t.offsetWidth/2,x:this.getElementOffsetLeft(t)+t.offsetWidth/2,y:this.gameWindow.offsetHeight-this.getElementOffsetTop(t)-t.offsetWidth/2}):(s=e,n=t);var a=s.x-n.x,o=s.y-n.y;let l=Math.sqrt(a*a+o*o)<=s.radius+n.radius;return s.x-=n.x,s.y-=n.y,!!l&&{x:s.x/Math.abs(s.x),y:s.y/Math.abs(s.y)}}blinkBorder(e){if("pad"==e)return;let t=e.toLowerCase();t=t.charAt(0).toUpperCase()+t.slice(1),this.gameWindow.style["border"+t+"Color"]="grey",setTimeout(()=>{this.gameWindow.style["border"+t+"Color"]="transparent"},1e3)}bounce(){let e=this.gameWindow.offsetWidth,t=this.gameWindow.offsetHeight;if(this.getElementOffsetLeft(this.ball)<=0&&-1===this.direction.x)return this.ball.style.setProperty("left",0),this.direction.x=1,"left";if(this.getElementOffsetTop(this.ball)<=0&&1===this.direction.y)return this.ball.style.setProperty("top",0),this.direction.y=-1,"top";if(this.getElementOffsetLeft(this.ball)>=e-parseInt(this.ball.offsetWidth)&&1===this.direction.x)return this.ball.style.setProperty("top",t-parseInt(this.ball.offsetHeight)),this.direction.x=-1,"right";if(this.getElementOffsetTop(this.ball)+21>=t-parseInt(this.ball.offsetHeight)&&-1===this.direction.y){if(this.getElementOffsetLeft(this.ball)>this.getElementOffsetLeft(this.pad)-this.ball.offsetWidth-5&&this.getElementOffsetLeft(this.ball)<this.getElementOffsetLeft(this.pad)+this.pad.offsetWidth)return this.direction.y=1,"pad";throw"Lost"}return!1}killBrick(e){e.classList.add("dead");let t;for(let e=0;e<this.bricks.length;e++)if(this.bricks[e].classList.contains("dead")){t=e;break}ga("send",{hitType:"event",eventCategory:"Game",eventAction:"broken",eventLabel:"Brick Hits",eventValue:e.dataset.name}),this.bricks.splice(t,1)}moveBall(){try{if(this.state==State.PAUSED)return void requestAnimationFrame(()=>{this.moveBall()});for(let e=0;e<this.settings.ballSpeed;e++){let e=this.bounce();e&&this.blinkBorder(e);let t=this.getElementOffsetLeft(this.ball)+this.direction.x+"px",i=this.getElementOffsetTop(this.ball)+-1*this.direction.y+"px";this.ball.style.setProperty("left",t),this.ball.style.setProperty("top",i);let s=this.getElementOffsetTop(this.ball),n=document.querySelector("div.icons .icon:last-child");s<this.getElementOffsetTop(n)+n.offsetHeight&&this.bricks.forEach(e=>{let t=this.collision(this.ball,e);(t.x||t.y)&&(this.settings.ballSpeed===DEFAULT_SPEED&&this.killBrick(e),t.x&&(this.direction.x=t.x),t.y&&(this.direction.y=t.y))})}requestAnimationFrame(()=>{this.moveBall()})}catch(e){if("Lost"!==e)throw this.endGame(),e;this.endGame()}}}
window.addEventListener("load",()=>{function e(){window.removeEventListener("scroll",e);let t=document.querySelector("#game-wrapper .icons"),n=["angularjs","apache","bootstrap","bower","c","cplusplus","csharp","css3","vagrant","debian","docker","dot-net","html5","jasmine","javascript","jquery","mongodb","mysql","nginx","php-flat","react","typescript","ubuntu","wordpress"];mobilecheck()&&n.splice(14);let a;n.forEach((e,r)=>{r%parseInt(n.length/3)!=0&&0!==r||(a=document.createElement("br"),t.appendChild(a));let s=document.createElement("img"),o=document.createElement("div");o.className="icon alive",s.alt=e,s.title=e,s.src="assets/images/"+e+".svg",o.dataset.name=e,o.appendChild(s),t.appendChild(o)});new Game}let t=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},n=document.getElementById("contact-form"),a=document.querySelector(".spinner");n.addEventListener("submit",e=>{e.preventDefault();var n=new XMLHttpRequest;let r={c_name:e.target.c_name.value,c_message:e.target.c_message.value,c_email:e.target.c_email.value};var s=t(r);return n.open("POST","/assets/php/handleFormSubmit.php",!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){let e=document.querySelector(".ajax-response");e.innerHTML=JSON.parse(n.responseText).message,e.classList.add("active")}a.classList.remove("active")},n.send(s),a.classList.add("active"),setTimeout(()=>{document.querySelector("#contact > .container").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},200),!1}),window.addEventListener("scroll",e),[...document.querySelectorAll("img")].forEach(e=>{e.dataset.src&&(e.src=e.dataset.src)})},!1),window.addEventListener("resize",()=>{requestAnimationFrame(resizeHomeSection)});let links=[...document.querySelectorAll("a[href^='#'")];links.forEach(e=>{e.addEventListener("click",t=>(t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),!1))});


function preventDefault(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}function preventDefaultForScrollKeys(t){if(keys[t.keyCode])return preventDefault(t),!1}function disableScroll(){window.addEventListener&&window.addEventListener("DOMMouseScroll",preventDefault,!1),window.onwheel=preventDefault,window.onmousewheel=document.onmousewheel=preventDefault,window.ontouchmove=preventDefault,document.onkeydown=preventDefaultForScrollKeys}function enableScroll(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",preventDefault,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}const State={PAUSED:"paused",VIRGIN:"virgin",RUNNING:"running",LOST:"lost",WIN:"win"};window.mobilecheck=function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t};var keys={37:1,38:1,39:1,40:1};const DEFAULT_SPEED=mobilecheck()?4:8;console.log(`Speed set to ${DEFAULT_SPEED}`);class Game{constructor(){this.ball=document.getElementById("ball"),this.pad=document.getElementById("pad"),this.gameWindow=document.getElementById("game-wrapper"),this.bricks=this.getBricks(),this.isDragging=!1,this.direction={x:1,y:1},this.state=State.VIRGIN,this.settings={ballSpeed:DEFAULT_SPEED},this.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,mobilecheck()?(this.pad.addEventListener("touchstart",this.handleStart.bind(this),!1),document.addEventListener("touchend",this.handleEnd.bind(this),!1),document.addEventListener("touchcancel",this.handleEnd.bind(this),!1)):(document.addEventListener("mouseup",this.handleEnd.bind(this),!1),this.pad.addEventListener("mousedown",this.handleStart.bind(this),!1))}getBricks(){return Array.prototype.slice.call(this.gameWindow.querySelectorAll(".icons > .icon"))}attachEventListeners(){document.addEventListener("touchmove",this.handleMove.bind(this),!1),document.addEventListener("mousemove",this.handleMove.bind(this),!1)}deattachEventListeners(){document.removeEventListener("touchmove",this.handleMove,!1),document.removeEventListener("mousemove",this.handleMove,!1)}handleMove(t){if(this.isDragging){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1;let{x:e,y:i}=this.getWindowDimensions(),s="";s=(t.clientX||t.touches[0].clientX)-(e-this.gameWindow.offsetWidth)/2+"px",this.pad.style.setProperty("left",s)}return!1}handleEnd(t){this.isDragging&&(0!=t.button&&void 0!==t.button||(this.isDragging=!1,this.removeMessageTimeout&&clearTimeout(this.removeMessageTimeout),this.deattachEventListeners(),enableScroll(),this.gameWindow.classList.add("paused"),this.slowBallDown(()=>{this.isDragging?this.startMovingSmooth(()=>{this.play()}):this.pauseGame()})))}handleStart(t){if(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,0==t.button||void 0===t.button)switch(this.isDragging=!0,this.attachEventListeners(),this.removeMessageTimeout=setTimeout(()=>{let t=document.querySelector(".explanation-wrapper"),e=t.querySelector("span > img");if(!e)return;let i=t.querySelector("span > span");t.style.setProperty("height",t.offsetHeight+"px"),e.parentElement.removeChild(e),i.innerHTML="Release to pause"},3e3),disableScroll(),this.state){case State.VIRGIN:this.gameWindow.className="",this.launchBall();break;case State.LOST:this.resetGame();break;case State.PAUSED:this.startMovingSmooth(()=>{this.play()})}return!1}getWindowDimensions(){let t=window,e=document,i=e.documentElement,s=e.getElementsByTagName("body")[0];return{x:t.innerWidth||i.clientWidth||s.clientWidth,y:t.innerHeight||i.clientHeight||s.clientHeight}}launchBall(){this.play(),this.moveBall()}getElementOffsetTop(t){let e=getComputedStyle(this.gameWindow),i=parseInt(e["border-top-width"]);return this.isFirefox?t.offsetTop-i:t.offsetTop}getElementOffsetLeft(t){let e=getComputedStyle(this.gameWindow),i=parseInt(e["border-left-width"]);return this.isFirefox?t.offsetLeft-i:t.offsetLeft}resetGame(){this.state==State.LOST&&(this.gameWindow.classList.remove("lost"),this.ball.style.display="block",this.ball.style.left=this.getElementOffsetLeft(this.pad)+(this.pad.offsetWidth-this.ball.offsetWidth/2)+"px",this.ball.style.top=this.getElementOffsetTop(this.pad.parentElement)-this.ball.offsetHeight+"px",this.state=State.RUNNING,this.gameWindow.className="",this.settings.ballSpeed=DEFAULT_SPEED,this.direction={x:1,y:1},this.launchBall())}endGame(){this.state=State.LOST,this.gameWindow.classList.add("lost"),this.ball.style.display="none"}slowBallDown(t){let e=setInterval(()=>{if(0==this.settings.ballSpeed--||this.isDragging)return clearInterval(e),void t()},100)}startMovingSmooth(t){if(t(),this.settings.ballSpeed==DEFAULT_SPEED)return;let e=setInterval(()=>{if(this.settings.ballSpeed++>=5)return clearInterval(e),this.settings.ballSpeed=DEFAULT_SPEED,void this.gameWindow.classList.remove("paused")},100)}pauseGame(){this.state==State.RUNNING&&(this.state=State.PAUSED)}play(){this.state=State.RUNNING}collision(t,e,i=!0){let s,o;i?(s={radius:t.offsetHeight/2,x:this.getElementOffsetLeft(t)+t.offsetHeight/2,y:this.gameWindow.offsetHeight-this.getElementOffsetTop(t)-t.offsetWidth/2},o={radius:e.offsetWidth/2,x:this.getElementOffsetLeft(e)+e.offsetWidth/2,y:this.gameWindow.offsetHeight-this.getElementOffsetTop(e)-e.offsetWidth/2}):(s=t,o=e);var n=s.x-o.x,a=s.y-o.y;let l=Math.sqrt(n*n+a*a)<=s.radius+o.radius;return s.x-=o.x,s.y-=o.y,!!l&&{x:s.x/Math.abs(s.x),y:s.y/Math.abs(s.y)}}blinkBorder(t){if("pad"==t)return;let e=t.toLowerCase();e=e.charAt(0).toUpperCase()+e.slice(1),this.gameWindow.style["border"+e+"Color"]="grey",setTimeout(()=>{this.gameWindow.style["border"+e+"Color"]="transparent"},1e3)}bounce(){let t=this.gameWindow.offsetWidth,e=this.gameWindow.offsetHeight;if(this.pad.parentElement.offsetTop+10<this.ball.offsetTop+this.ball.offsetHeight)throw"Lost";return this.getElementOffsetLeft(this.ball)<=0&&-1===this.direction.x?(this.ball.style.setProperty("left",0),this.direction.x=1,"left"):this.getElementOffsetTop(this.ball)<=0&&1===this.direction.y?(this.ball.style.setProperty("top",0),this.direction.y=-1,"top"):this.getElementOffsetLeft(this.ball)>=t-parseInt(this.ball.offsetWidth)&&1===this.direction.x?(this.ball.style.setProperty("top",e-parseInt(this.ball.offsetHeight)),this.direction.x=-1,"right"):this.getElementOffsetTop(this.ball)+21>=e-parseInt(this.ball.offsetHeight)&&-1===this.direction.y&&this.getElementOffsetLeft(this.ball)>this.getElementOffsetLeft(this.pad)-this.ball.offsetWidth-5&&this.getElementOffsetLeft(this.ball)<this.getElementOffsetLeft(this.pad)+this.pad.offsetWidth&&(this.direction.y=1,console.log("pad!!!"),"pad")}killBrick(t){t.classList.remove("alive");let e;for(let t=0;t<this.bricks.length;t++)if(!this.bricks[t].classList.contains("alive")){e=t;break}this.bricks.splice(e,1),ga("send",{hitType:"event",eventCategory:"Game",eventAction:"broken",eventLabel:"Brick Hits",eventValue:t.dataset.name})}victory(){this.state=State.WIN;let t=this.ball.querySelector("i");t.parentElement.removeChild(t),this.ball.style.setProperty("background-image","url('/assets/images/victory.jpg')"),this.ball.style.setProperty("background-size","contain"),this.ball.classList.add("victory"),document.querySelector(".explanation-wrapper").querySelector("span > span").innerHTML="V is for Viiictory!"}moveBall(){try{if(this.state==State.WIN)return;if(this.state==State.PAUSED)return void requestAnimationFrame(()=>{this.moveBall()});for(let t=0;t<this.settings.ballSpeed;t++){let t=this.bounce();t&&this.blinkBorder(t);let e=this.getElementOffsetLeft(this.ball)+this.direction.x+"px",i=this.getElementOffsetTop(this.ball)+-1*this.direction.y+"px";this.ball.style.setProperty("left",e),this.ball.style.setProperty("top",i);let s=this.getElementOffsetTop(this.ball),o=document.querySelector("div.icons .icon:last-child");s<this.getElementOffsetTop(o)+o.offsetHeight&&this.bricks.forEach(t=>{let e=this.collision(this.ball,t);(e.x||e.y)&&(this.settings.ballSpeed===DEFAULT_SPEED&&(this.killBrick(t),0===this.bricks.length&&this.victory()),e.x&&(this.direction.x=e.x),e.y&&(this.direction.y=e.y))})}requestAnimationFrame(()=>{this.moveBall()})}catch(t){if("Lost"!==t)throw this.endGame(),t;this.endGame()}}}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS5qcyIsImdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXJ0R2FtZSk7XG4gICAgXG4gICAgbGV0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLXdyYXBwZXIgLmljb25zXCIpO1xuICAgIGxldCB0ZWNocyA9IFtcImFuZ3VsYXJqc1wiLCBcImFwYWNoZVwiLCBcImJvb3RzdHJhcFwiLCBcImJvd2VyXCIsIFwiY1wiLCBcImNwbHVzcGx1c1wiLCBcImNzaGFycFwiLCBcImNzczNcIiwgXCJ2YWdyYW50XCIsIFwiZGViaWFuXCIsIFwiZG9ja2VyXCIsIFwiZG90LW5ldFwiLCBcImh0bWw1XCIsIFwiamFzbWluZVwiLCBcImphdmFzY3JpcHRcIiwgXCJqcXVlcnlcIiwgXCJtb25nb2RiXCIsIFwibXlzcWxcIiwgXCJuZ2lueFwiLCBcInBocC1mbGF0XCIsIFwicmVhY3RcIiwgXCJ0eXBlc2NyaXB0XCIsIFwidWJ1bnR1XCIsIFwid29yZHByZXNzXCJdO1xuICAgIGlmIChtb2JpbGVjaGVjaygpKSB7XG4gICAgICB0ZWNocy5zcGxpY2UoMTQpO1xuICAgIH1cbiAgXG4gICAgbGV0IGRpdlJvdztcbiAgXG4gICAgdGVjaHMuZm9yRWFjaCgodGVjaCwgaW5kZXgpID0+IHtcbiAgXG4gICAgICBpZiAoaW5kZXggJSBwYXJzZUludCh0ZWNocy5sZW5ndGgvMykgPT09IDAgfHwgaW5kZXggPT09IDApIHtcbiAgICAgICAgZGl2Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgICAgICBpY29ucy5hcHBlbmRDaGlsZChkaXZSb3cpO1xuICAgICAgfVxuICBcbiAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBsZXQgaWNvbldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWNvbldyYXAuY2xhc3NOYW1lID0gXCJpY29uIGFsaXZlXCI7XG4gICAgICBpbWFnZS5hbHQgPSB0ZWNoO1xuICAgICAgaW1hZ2UudGl0bGUgPSB0ZWNoO1xuICAgICAgaW1hZ2Uuc3JjID0gXCJhc3NldHMvaW1hZ2VzL1wiICsgdGVjaCArIFwiLnN2Z1wiO1xuICAgICAgaWNvbldyYXAuZGF0YXNldC5uYW1lID0gdGVjaDtcbiAgXG4gICAgICBpY29uV3JhcC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICBpY29ucy5hcHBlbmRDaGlsZChpY29uV3JhcCk7XG4gICAgfSk7XG4gIFxuICAgIGxldCBhd2Vzb21lR2FtZSA9IG5ldyBHYW1lKCk7XG4gIH1cblxuICBsZXQgb2JqZWN0VG9RdWVyeVN0cmluZyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBzdHIgPSBbXTtcbiAgICBmb3IodmFyIHAgaW4gb2JqKVxuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pKTtcbiAgICAgIH1cbiAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xuICB9XG5cbiAgbGV0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWZvcm1cIik7XG4gIGxldCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXJcIik7XG4gIGNvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciB1cmwgPSBcIi9hc3NldHMvcGhwL2hhbmRsZUZvcm1TdWJtaXQucGhwXCI7XG4gICAgbGV0IHBvc3QgPSB7XG4gICAgICBjX25hbWUgOiBldmVudC50YXJnZXQuY19uYW1lLnZhbHVlLFxuICAgICAgY19tZXNzYWdlOiBldmVudC50YXJnZXQuY19tZXNzYWdlLnZhbHVlLFxuICAgICAgY19lbWFpbDogZXZlbnQudGFyZ2V0LmNfZW1haWwudmFsdWVcbiAgICB9O1xuICAgIHZhciBwYXJhbXMgPSBvYmplY3RUb1F1ZXJ5U3RyaW5nKHBvc3QpO1xuICAgIGh0dHAub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcbiAgICBcbiAgICAvL1NlbmQgdGhlIHByb3BlciBoZWFkZXIgaW5mb3JtYXRpb24gYWxvbmcgd2l0aCB0aGUgcmVxdWVzdFxuICAgIGh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcbiAgICBodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkgey8vQ2FsbCBhIGZ1bmN0aW9uIHdoZW4gdGhlIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgIGlmKGh0dHAucmVhZHlTdGF0ZSA9PSA0ICYmIGh0dHAuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgIGxldCByZXNwb25zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWpheC1yZXNwb25zZVwiKTtcbiAgICAgICAgICByZXNwb25zZS5pbm5lckhUTUwgPSBKU09OLnBhcnNlKGh0dHAucmVzcG9uc2VUZXh0KS5tZXNzYWdlO1xuICAgICAgICAgIHJlc3BvbnNlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgaHR0cC5zZW5kKHBhcmFtcyk7XG4gICAgXG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QgPiAuY29udGFpbmVyJykuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiLCBpbmxpbmU6IFwibmVhcmVzdFwifSk7XG4gICAgfSwgMjAwKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGFydEdhbWUpO1xuXG4gIGxldCBpbWFnZXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyldO1xuICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICBpZiAoaW1hZ2UuZGF0YXNldC5zcmMpIHtcbiAgICAgIGltYWdlLnNyYyA9IGltYWdlLmRhdGFzZXQuc3JjO1xuICAgIH1cbiAgfSk7XG5cdFxufSwgZmFsc2UpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNpemVIb21lU2VjdGlvbik7XG59KTtcblxubGV0IGxpbmtzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWZePScjJ1wiKV07XG5saW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiwgaW5saW5lOiBcIm5lYXJlc3RcIn0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59KTtcbiIsImNvbnN0IFN0YXRlID0ge1xuICBQQVVTRUQ6ICdwYXVzZWQnLFxuICBWSVJHSU46ICd2aXJnaW4nLFxuICBSVU5OSU5HOiAncnVubmluZycsXG4gIExPU1Q6ICdsb3N0JyxcbiAgV0lOOiAnd2luJ1xufTtcblxud2luZG93Lm1vYmlsZWNoZWNrID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjaGVjayA9IGZhbHNlO1xuICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xuICByZXR1cm4gY2hlY2s7XG59O1xuXG4vLyBsZWZ0OiAzNywgdXA6IDM4LCByaWdodDogMzksIGRvd246IDQwLFxuLy8gc3BhY2ViYXI6IDMyLCBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsIGVuZDogMzUsIGhvbWU6IDM2XG52YXIga2V5cyA9IHszNzogMSwgMzg6IDEsIDM5OiAxLCA0MDogMX07XG5cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyAgXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgd2luZG93Lm9ud2hlZWwgPSBwcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBwcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gIHdpbmRvdy5vbnRvdWNobW92ZSAgPSBwcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gIGRvY3VtZW50Lm9ua2V5ZG93biAgPSBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDsgIFxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7ICBcbn1cblxuY29uc3QgREVGQVVMVF9TUEVFRCA9IG1vYmlsZWNoZWNrKCkgPyA0IDogODtcblxuY29uc29sZS5sb2coYFNwZWVkIHNldCB0byAke0RFRkFVTFRfU1BFRUR9YCk7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbGxcIik7XG4gICAgdGhpcy5wYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZFwiKTtcbiAgICB0aGlzLmdhbWVXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtd3JhcHBlclwiKTtcbiAgICB0aGlzLmJyaWNrcyA9IHRoaXMuZ2V0QnJpY2tzKCk7XG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB7XG4gICAgICB4OiAxLFxuICAgICAgeTogMVxuICAgIH07XG4gICAgdGhpcy5zdGF0ZSA9IFN0YXRlLlZJUkdJTjtcbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgYmFsbFNwZWVkOiBERUZBVUxUX1NQRUVEXG4gICAgfTtcbiAgICB0aGlzLmlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMTtcblxuICAgIGlmIChtb2JpbGVjaGVjaygpKSB7XG4gICAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVFbmQuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICB0aGlzLnBhZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlU3RhcnQuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGdldEJyaWNrcygpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5nYW1lV2luZG93LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaWNvbnMgPiAuaWNvblwiKSlcbiAgfVxuXG4gIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBkZWF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZU1vdmUsIGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgIGlmKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIFxuICAgICAgbGV0IHt4LCB5fSA9IHRoaXMuZ2V0V2luZG93RGltZW5zaW9ucygpLFxuICAgICAgICBsZWZ0ID0gXCJcIiwgY2xpZW50WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgbGVmdCA9IChjbGllbnRYIC0gKCh4IC0gdGhpcy5nYW1lV2luZG93Lm9mZnNldFdpZHRoKS8yKSkgKyBcInB4XCJcbiAgICAgIHRoaXMucGFkLnN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLCBsZWZ0KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlRW5kKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwIHx8IGV2ZW50LmJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnJlbW92ZU1lc3NhZ2VUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlbW92ZU1lc3NhZ2VUaW1lb3V0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVhdHRhY2hFdmVudExpc3RlbmVycygpO1xuICAgICAgZW5hYmxlU2Nyb2xsKCk7XG4gICAgICB0aGlzLmdhbWVXaW5kb3cuY2xhc3NMaXN0LmFkZChcInBhdXNlZFwiKTtcbiAgICAgIHRoaXMuc2xvd0JhbGxEb3duKCgpID0+IHtcbiAgICAgICAgaWYgKCAhIHRoaXMuaXNEcmFnZ2luZyApIHtcbiAgICAgICAgICB0aGlzLnBhdXNlR2FtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhcnRNb3ZpbmdTbW9vdGgoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN0YXJ0KGV2ZW50KSB7XG5cbiAgICBpZihldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICAgIGlmIChldmVudC5idXR0b24gPT0gMCB8fCBldmVudC5idXR0b24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMucmVtb3ZlTWVzc2FnZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGV4cGxhbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leHBsYW5hdGlvbi13cmFwcGVyXCIpO1xuICAgICAgICBsZXQgaW1hZ2UgPSBleHBsYW5hdGlvbi5xdWVyeVNlbGVjdG9yKFwic3BhbiA+IGltZ1wiKTtcbiAgICAgICAgaWYgKCFpbWFnZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dCA9IGV4cGxhbmF0aW9uLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuID4gc3BhblwiKTtcbiAgICAgICAgZXhwbGFuYXRpb24uc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgZXhwbGFuYXRpb24ub2Zmc2V0SGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgaW1hZ2UucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpbWFnZSk7XG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gXCJSZWxlYXNlIHRvIHBhdXNlXCI7XG4gICAgICB9LCAzICogMTAwMCk7XG4gICAgICBkaXNhYmxlU2Nyb2xsKCk7XG5cbiAgICAgIHN3aXRjaCh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgU3RhdGUuVklSR0lOOlxuICAgICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgIHRoaXMubGF1bmNoQmFsbCgpO1xuICAgICAgICAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFN0YXRlLkxPU1Q6XG4gICAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdGF0ZS5QQVVTRUQ6XG4gICAgICAgICAgdGhpcy5zdGFydE1vdmluZ1Ntb290aCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTsgIFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFdpbmRvd0RpbWVuc2lvbnMoKSB7ICBcbiAgICBsZXQgdyA9IHdpbmRvdyxcbiAgICAgIGQgPSBkb2N1bWVudCxcbiAgICAgIGUgPSBkLmRvY3VtZW50RWxlbWVudCxcbiAgICAgIGcgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0sXG4gICAgICB4ID0gdy5pbm5lcldpZHRoIHx8IGUuY2xpZW50V2lkdGggfHwgZy5jbGllbnRXaWR0aCxcbiAgICAgIHkgPSB3LmlubmVySGVpZ2h0fHwgZS5jbGllbnRIZWlnaHR8fCBnLmNsaWVudEhlaWdodDtcbiAgICByZXR1cm4ge3gsIHl9O1xuICB9XG5cbiAgbGF1bmNoQmFsbCgpIHtcbiAgICB0aGlzLnBsYXkoKTtcbiAgICB0aGlzLm1vdmVCYWxsKCk7XG4gIH1cblxuICBnZXRFbGVtZW50T2Zmc2V0VG9wKGVsZW1lbnQpIHsgICAgXG4gICAgbGV0IGdhbWVXaW5kb3dDc3MgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZVdpbmRvdyksXG4gICAgICAgIGJvcmRlcldpZHRoID0gcGFyc2VJbnQoZ2FtZVdpbmRvd0Nzc1tcImJvcmRlci10b3Atd2lkdGhcIl0pO1xuICAgIHJldHVybiB0aGlzLmlzRmlyZWZveCA/IGVsZW1lbnQub2Zmc2V0VG9wIC0gYm9yZGVyV2lkdGggOiBlbGVtZW50Lm9mZnNldFRvcDtcbiAgfVxuXG4gIGdldEVsZW1lbnRPZmZzZXRMZWZ0KGVsZW1lbnQpIHsgICAgXG4gICAgbGV0IGdhbWVXaW5kb3dDc3MgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZVdpbmRvdyksXG4gICAgICAgIGJvcmRlcldpZHRoID0gcGFyc2VJbnQoZ2FtZVdpbmRvd0Nzc1tcImJvcmRlci1sZWZ0LXdpZHRoXCJdKTtcbiAgICByZXR1cm4gdGhpcy5pc0ZpcmVmb3ggPyBlbGVtZW50Lm9mZnNldExlZnQgLSBib3JkZXJXaWR0aCA6IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgfVxuXG4gIHJlc2V0R2FtZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PSBTdGF0ZS5MT1NUKSB7XG4gICAgICB0aGlzLmdhbWVXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZShcImxvc3RcIik7XG4gICAgICAvLyBjaGFuZ2UgdG8gZGlzcGxheSA9IGJsb2NrIG11c3QgYm9tZSBiZWZvcmUgYmFsbC5vZmZzZXRIZWlnaHRcbiAgICAgIC8vIGJlY2F1c2Ugb2Zmc2V0SGVpZ2h0IGZvciBlbGVtZW50cyBub3QgaW4gdGhlIERPTSB3aWxsIGJlIDBcbiAgICAgIHRoaXMuYmFsbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdGhpcy5iYWxsLnN0eWxlLmxlZnQgPSB0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KHRoaXMucGFkKSArICh0aGlzLnBhZC5vZmZzZXRXaWR0aCAtIHRoaXMuYmFsbC5vZmZzZXRXaWR0aC8yKSArIFwicHhcIjtcbiAgICAgIHRoaXMuYmFsbC5zdHlsZS50b3AgPSAodGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKHRoaXMucGFkLnBhcmVudEVsZW1lbnQpIC0gdGhpcy5iYWxsLm9mZnNldEhlaWdodCkgKyBcInB4XCI7XG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGUuUlVOTklORztcbiAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLmJhbGxTcGVlZCA9IERFRkFVTFRfU1BFRUQ7XG5cbiAgICAgIHRoaXMuZGlyZWN0aW9uID0ge1xuICAgICAgICB4OiAxLFxuICAgICAgICB5OiAxXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmxhdW5jaEJhbGwoKTtcbiAgICB9XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5MT1NUO1xuICAgIHRoaXMuZ2FtZVdpbmRvdy5jbGFzc0xpc3QuYWRkKFwibG9zdFwiKTtcbiAgICB0aGlzLmJhbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgc2xvd0JhbGxEb3duKGNiKSB7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5iYWxsU3BlZWQtLSA9PSAwIHx8IHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgY2IoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cblxuICBzdGFydE1vdmluZ1Ntb290aChjYikge1xuICAgIGNiKCk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYmFsbFNwZWVkID09IERFRkFVTFRfU1BFRUQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYmFsbFNwZWVkKysgPj0gNSkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgLy8gaGFjayBmb3IgYnVnIHJlc2lzdGFuY2UgQi18XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYmFsbFNwZWVkID0gREVGQVVMVF9TUEVFRDtcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJwYXVzZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcGF1c2VHYW1lKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09IFN0YXRlLlJVTk5JTkcpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5QQVVTRUQ7XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5SVU5OSU5HO1xuICAgIFxuICB9XG5cbiAgY29sbGlzaW9uKCRkaXYxLCAkZGl2MiwgYXJlTm90RWxlbWVudHMgPSB0cnVlKSB7XG4gICAgbGV0IGNpcmNsZTEsIGNpcmNsZTI7XG5cbiAgICBpZiAoIGFyZU5vdEVsZW1lbnRzICkge1xuICAgICAgY2lyY2xlMSA9IHtcbiAgICAgICAgcmFkaXVzOiAkZGl2MS5vZmZzZXRIZWlnaHQvMiwgXG4gICAgICAgIHg6IHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQoJGRpdjEpICsgJGRpdjEub2Zmc2V0SGVpZ2h0LzIsIFxuICAgICAgICB5OiB0aGlzLmdhbWVXaW5kb3cub2Zmc2V0SGVpZ2h0IC0gdGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKCRkaXYxKSAtICRkaXYxLm9mZnNldFdpZHRoLzJcbiAgICAgIH07XG4gICAgICBjaXJjbGUyID0ge1xuICAgICAgICByYWRpdXM6ICRkaXYyLm9mZnNldFdpZHRoLzIsXG4gICAgICAgIHg6IHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQoJGRpdjIpICsgJGRpdjIub2Zmc2V0V2lkdGgvMiwgXG4gICAgICAgIHk6IHRoaXMuZ2FtZVdpbmRvdy5vZmZzZXRIZWlnaHQgLSB0aGlzLmdldEVsZW1lbnRPZmZzZXRUb3AoJGRpdjIpIC0gJGRpdjIub2Zmc2V0V2lkdGgvMlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2lyY2xlMSA9ICRkaXYxO1xuICAgICAgY2lyY2xlMiA9ICRkaXYyXG4gICAgfVxuXG4gICAgdmFyIGR4ID0gY2lyY2xlMS54IC0gY2lyY2xlMi54O1xuICAgIHZhciBkeSA9IGNpcmNsZTEueSAtIGNpcmNsZTIueTtcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgbGV0IHJhZGl1c1N1bSA9IGNpcmNsZTEucmFkaXVzICsgY2lyY2xlMi5yYWRpdXM7XG5cbiAgICBsZXQgaXNDb2xsaXNpb24gPSBkaXN0YW5jZSA8PSByYWRpdXNTdW07XG4gICAgY2lyY2xlMS54IC09IGNpcmNsZTIueDtcbiAgICBjaXJjbGUxLnkgLT0gY2lyY2xlMi55O1xuXG4gICAgaWYgKGlzQ29sbGlzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBjaXJjbGUxLnggLyBNYXRoLmFicyhjaXJjbGUxLngpLFxuICAgICAgICB5OiBjaXJjbGUxLnkgLyBNYXRoLmFicyhjaXJjbGUxLnkpXG4gICAgICB9O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBibGlua0JvcmRlcihzaWRlKSB7XG4gICAgaWYgKHNpZGUgPT0gXCJwYWRcIikgcmV0dXJuO1xuICAgIGxldCBzYW5pdHplZFNpZGUgPSBzaWRlLnRvTG93ZXJDYXNlKCk7XG4gICAgc2FuaXR6ZWRTaWRlID0gc2FuaXR6ZWRTaWRlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc2FuaXR6ZWRTaWRlLnNsaWNlKDEpO1xuICAgIHRoaXMuZ2FtZVdpbmRvdy5zdHlsZVsnYm9yZGVyJyArIHNhbml0emVkU2lkZSArICdDb2xvciddID0gXCJncmV5XCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdhbWVXaW5kb3cuc3R5bGVbJ2JvcmRlcicgKyBzYW5pdHplZFNpZGUgKyAnQ29sb3InXSA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGJvdW5jZSgpIHtcbiAgICBsZXQgeCA9IHRoaXMuZ2FtZVdpbmRvdy5vZmZzZXRXaWR0aCwgXG4gICAgICAgIHkgPSB0aGlzLmdhbWVXaW5kb3cub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWYgKHRoaXMucGFkLnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wICsgMTAgPCB0aGlzLmJhbGwub2Zmc2V0VG9wICsgdGhpcy5iYWxsLm9mZnNldEhlaWdodCkge1xuICAgICAgdGhyb3cgJ0xvc3QnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KHRoaXMuYmFsbCkgPD0gMCAmJiB0aGlzLmRpcmVjdGlvbi54ID09PSAtMSkge1xuICAgICAgICB0aGlzLmJhbGwuc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIsIDApO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbi54ID0gMTtcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKHRoaXMuYmFsbCkgPD0gMCAmJiB0aGlzLmRpcmVjdGlvbi55ID09PSAxKSB7XG4gICAgICAgIHRoaXMuYmFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRvcFwiLCAwKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSA9IC0xO1xuICAgICAgICByZXR1cm4gJ3RvcCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5iYWxsKSA+PSB4IC0gcGFyc2VJbnQodGhpcy5iYWxsLm9mZnNldFdpZHRoKSAmJiB0aGlzLmRpcmVjdGlvbi54ID09PSAxKSB7XG4gICAgICAgIHRoaXMuYmFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRvcFwiLCB5IC0gcGFyc2VJbnQodGhpcy5iYWxsLm9mZnNldEhlaWdodCkpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbi54ID0gLTE7XG4gICAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH1cbiAgICAgXG5cbiAgICBpZiAodGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKHRoaXMuYmFsbCkgKyAyMSA+PSB5IC0gcGFyc2VJbnQodGhpcy5iYWxsLm9mZnNldEhlaWdodCkgJiYgdGhpcy5kaXJlY3Rpb24ueSA9PT0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5iYWxsKSA+IHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5wYWQpIC0gdGhpcy5iYWxsLm9mZnNldFdpZHRoIC0gNSAmJiB0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KHRoaXMuYmFsbCkgPCB0aGlzLmdldEVsZW1lbnRPZmZzZXRMZWZ0KHRoaXMucGFkKSArIHRoaXMucGFkLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi55ID0gMTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYWQhISEnKTtcbiAgICAgICAgICAgIHJldHVybiAncGFkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAga2lsbEJyaWNrKCRicmljaykge1xuICAgICRicmljay5jbGFzc0xpc3QucmVtb3ZlKFwiYWxpdmVcIik7XG4gICAgbGV0IHRvUmVtb3ZlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5icmlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0bXAgPSB0aGlzLmJyaWNrc1tpXTtcbiAgICAgIGlmICghdG1wLmNsYXNzTGlzdC5jb250YWlucygnYWxpdmUnKSkge1xuICAgICAgICB0b1JlbW92ZSA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYnJpY2tzLnNwbGljZSh0b1JlbW92ZSwgMSk7XG5cbiAgICBnYSgnc2VuZCcsIHtcbiAgICAgIGhpdFR5cGU6ICdldmVudCcsXG4gICAgICBldmVudENhdGVnb3J5OiAnR2FtZScsXG4gICAgICBldmVudEFjdGlvbjogJ2Jyb2tlbicsXG4gICAgICBldmVudExhYmVsOiAnQnJpY2sgSGl0cycsXG4gICAgICBldmVudFZhbHVlOiAkYnJpY2suZGF0YXNldC5uYW1lXG4gICAgfSk7XG4gIH1cblxuICB2aWN0b3J5KCkge1xuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5XSU47XG4gICAgbGV0IHBhdXNlSWNvbiA9IHRoaXMuYmFsbC5xdWVyeVNlbGVjdG9yKFwiaVwiKTtcbiAgICBwYXVzZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwYXVzZUljb24pO1xuXG4gICAgdGhpcy5iYWxsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoJy9hc3NldHMvaW1hZ2VzL3ZpY3RvcnkuanBnJylcIik7XG4gICAgdGhpcy5iYWxsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLXNpemUnLCAnY29udGFpbicpO1xuICAgIHRoaXMuYmFsbC5jbGFzc0xpc3QuYWRkKFwidmljdG9yeVwiKTtcblxuICAgIGxldCBleHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhwbGFuYXRpb24td3JhcHBlclwiKTtcbiAgICBsZXQgdGV4dCA9IGV4cGxhbmF0aW9uLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuID4gc3BhblwiKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9IFwiViBpcyBmb3IgVmlpaWN0b3J5IVwiO1xuICB9XG5cbiAgbW92ZUJhbGwoKSB7XG4gICAgdHJ5IHtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gU3RhdGUuV0lOKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gU3RhdGUuUEFVU0VEKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMubW92ZUJhbGwoKTsgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldHRpbmdzLmJhbGxTcGVlZDsgaSsrKSB7XG4gICAgICAgIGxldCBib3VuY2VTaWRlID0gdGhpcy5ib3VuY2UoKTtcblxuICAgICAgICBpZiAoYm91bmNlU2lkZSkge1xuICAgICAgICAgICAgdGhpcy5ibGlua0JvcmRlcihib3VuY2VTaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZWZ0ID0gKHRoaXMuZ2V0RWxlbWVudE9mZnNldExlZnQodGhpcy5iYWxsKSArIHRoaXMuZGlyZWN0aW9uLngpICsgXCJweFwiLFxuICAgICAgICAgICAgYSA9IHRoaXMuZ2V0RWxlbWVudE9mZnNldFRvcCh0aGlzLmJhbGwpLFxuICAgICAgICAgICAgYiA9IHRoaXMuZGlyZWN0aW9uLnkgKiAtMSxcbiAgICAgICAgICAgIHRvcCA9IGEgKyBiICsgXCJweFwiO1xuXG4gICAgICAgIHRoaXMuYmFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcImxlZnRcIiwgbGVmdCk7XG4gICAgICAgIHRoaXMuYmFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRvcFwiLCB0b3ApO1xuXG4gICAgICAgIGxldCBiYWxsVG9wID0gdGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKHRoaXMuYmFsbCksXG4gICAgICAgICAgbGFzdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lmljb25zIC5pY29uOmxhc3QtY2hpbGRcIiksXG4gICAgICAgICAgdG9wVGhyZXNob2xkID0gdGhpcy5nZXRFbGVtZW50T2Zmc2V0VG9wKGxhc3RJY29uKSArIGxhc3RJY29uLm9mZnNldEhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIGlmIChiYWxsVG9wIDwgdG9wVGhyZXNob2xkKSB7XG5cbiAgICAgICAgICB0aGlzLmJyaWNrcy5mb3JFYWNoKCgkYnJpY2spID0+IHtcbiAgICAgICAgICAgIGxldCBpc0NvbGxpc2lvbiA9IHRoaXMuY29sbGlzaW9uKHRoaXMuYmFsbCwgJGJyaWNrKTtcblxuXG4gICAgICAgICAgICBpZiAoaXNDb2xsaXNpb24ueCB8fCBpc0NvbGxpc2lvbi55KSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmJhbGxTcGVlZCA9PT0gREVGQVVMVF9TUEVFRCkge1xuICAgICAgICAgICAgICAgIHRoaXMua2lsbEJyaWNrKCRicmljayk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYnJpY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy52aWN0b3J5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAoaXNDb2xsaXNpb24ueCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnggPSBpc0NvbGxpc2lvbi54O1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBpZiAoaXNDb2xsaXNpb24ueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgPSBpc0NvbGxpc2lvbi55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IFxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyB0aGlzLm1vdmVCYWxsKCk7IH0pO1xuICAgIH0gIGNhdGNoKGUpIHtcbiAgICAgICAgaWYgKGUgPT09IFwiTG9zdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgICAgICAgdGhyb3cgKGUpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=

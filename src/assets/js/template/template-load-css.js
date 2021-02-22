function deferLoadCss(name) {
  var giftofspeed = document.createElement('link');
  giftofspeed.rel = 'stylesheet';
  giftofspeed.href = name;
  giftofspeed.type = 'text/css';
  var godefer = document.getElementsByTagName('link')[0];
  godefer.parentNode.insertBefore(giftofspeed, godefer);
}
setTimeout(() => {
  deferLoadCss('/assets/bootstrap/css/bootstrap.min.css');
  deferLoadCss('/assets/css/font-awesome.min.css');
  deferLoadCss('/assets/css/style.css');  
}, 500);

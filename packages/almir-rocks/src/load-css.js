function deferLoadCss(name) {
  var giftofspeed = document.createElement("link");
  giftofspeed.rel = "stylesheet";
  giftofspeed.href = name;
  giftofspeed.type = "text/css";
  var godefer = document.getElementsByTagName("link")[0];
  godefer.parentNode.insertBefore(giftofspeed, godefer);
}
setTimeout(() => {
  deferLoadCss("/static/bootstrap/bootstrap.min.css");
  deferLoadCss("/static/font-awesome.min.css");
}, 500);

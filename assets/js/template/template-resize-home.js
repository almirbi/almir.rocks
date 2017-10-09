function getWindowDimensions() {
  let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  return {x, y};
}

function resizeHomeSection() {
  let {x, y} = getWindowDimensions();
  window.home.style.height = y + "px";
}
resizeHomeSection();
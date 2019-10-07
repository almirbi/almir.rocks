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

  if (window.abLastWindowWidth && x === window.abLastWindowWidth) {
    window.abLastWindowWidth = x;
    return;
  }

  window.abLastWindowWidth = x;
  window.home.style.height = y + "px";
}
resizeHomeSection();
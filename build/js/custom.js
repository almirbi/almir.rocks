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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImljb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVjaHMiLCJkaXZSb3ciLCJmb3JFYWNoIiwidGVjaCIsImluZGV4IiwicGFyc2VJbnQiLCJsZW5ndGgiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpbWFnZSIsImljb25XcmFwIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzcmMiLCJkYXRhc2V0IiwibmFtZSIsImF3ZXNvbWVHYW1lIiwiR2FtZSIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXNpemVIb21lU2VjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUVBQSxPQUFPQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNOztBQUVwQyxXQUFTQyxTQUFULEdBQXFCO0FBQ25CRixXQUFPRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsU0FBckM7O0FBRUEsUUFBSUUsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBWjtBQUNBLFFBQUlDLFFBQVEsQ0FBQyxXQUFELEVBQWMsUUFBZCxFQUF3QixXQUF4QixFQUFxQyxPQUFyQyxFQUE4QyxHQUE5QyxFQUFtRCxXQUFuRCxFQUFnRSxRQUFoRSxFQUEwRSxNQUExRSxFQUFrRixNQUFsRixFQUEwRixRQUExRixFQUFvRyxRQUFwRyxFQUE4RyxTQUE5RyxFQUF5SCxPQUF6SCxFQUFrSSxTQUFsSSxFQUE2SSxZQUE3SSxFQUEySixRQUEzSixFQUFxSyxTQUFySyxFQUFnTCxPQUFoTCxFQUF5TCxPQUF6TCxFQUFrTSxVQUFsTSxFQUE4TSxPQUE5TSxFQUF1TixZQUF2TixFQUFxTyxRQUFyTyxFQUErTyxXQUEvTyxDQUFaOztBQUVBLFFBQUlDLGVBQUo7O0FBRUFELFVBQU1FLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7O0FBRTdCLFVBQUlBLFFBQVFDLFNBQVNMLE1BQU1NLE1BQU4sR0FBYSxDQUF0QixDQUFSLEtBQXFDLENBQXJDLElBQTBDRixVQUFVLENBQXhELEVBQTJEO0FBQ3pESCxpQkFBU0gsU0FBU1MsYUFBVCxDQUF1QixJQUF2QixDQUFUO0FBQ0FWLGNBQU1XLFdBQU4sQ0FBa0JQLE1BQWxCO0FBQ0Q7O0FBRUQsVUFBSVEsUUFBUVgsU0FBU1MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsVUFBSUcsV0FBV1osU0FBU1MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0FHLGVBQVNDLFNBQVQsR0FBcUIsTUFBckI7QUFDQUYsWUFBTUcsS0FBTixHQUFjVCxJQUFkO0FBQ0FNLFlBQU1JLEdBQU4sR0FBWSxtQkFBbUJWLElBQW5CLEdBQTBCLE1BQXRDO0FBQ0FPLGVBQVNJLE9BQVQsQ0FBaUJDLElBQWpCLEdBQXdCWixJQUF4Qjs7QUFFQU8sZUFBU0YsV0FBVCxDQUFxQkMsS0FBckI7QUFDQVosWUFBTVcsV0FBTixDQUFrQkUsUUFBbEI7QUFDRCxLQWhCRDs7QUFrQkEsUUFBSU0sY0FBYyxJQUFJQyxJQUFKLEVBQWxCO0FBQ0Q7O0FBRUR4QixTQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsU0FBbEM7O0FBRUEsTUFBSXVCLHNDQUFhcEIsU0FBU3FCLGdCQUFULENBQTBCLEtBQTFCLENBQWIsRUFBSjtBQUNBRCxTQUFPaEIsT0FBUCxDQUFlLFVBQUNPLEtBQUQsRUFBVztBQUN4QixRQUFJQSxNQUFNSyxPQUFOLENBQWNELEdBQWxCLEVBQXVCO0FBQ3JCSixZQUFNSSxHQUFOLEdBQVlKLE1BQU1LLE9BQU4sQ0FBY0QsR0FBMUI7QUFDRDtBQUNGLEdBSkQ7QUFNRCxDQXhDRCxFQXdDRyxLQXhDSDs7QUEwQ0FwQixPQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDMEI7QUFDRCxDQUZEIiwiZmlsZSI6ImN1c3RvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXJ0R2FtZSk7XG4gICAgXG4gICAgbGV0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLXdyYXBwZXIgLmljb25zXCIpO1xuICAgIGxldCB0ZWNocyA9IFtcImFuZ3VsYXJqc1wiLCBcImFwYWNoZVwiLCBcImJvb3RzdHJhcFwiLCBcImJvd2VyXCIsIFwiY1wiLCBcImNwbHVzcGx1c1wiLCBcImNzaGFycFwiLCBcImNzczNcIiwgXCJkM2pzXCIsIFwiZGViaWFuXCIsIFwiZG9ja2VyXCIsIFwiZG90LW5ldFwiLCBcImh0bWw1XCIsIFwiamFzbWluZVwiLCBcImphdmFzY3JpcHRcIiwgXCJqcXVlcnlcIiwgXCJtb25nb2RiXCIsIFwibXlzcWxcIiwgXCJuZ2lueFwiLCBcInBocC1mbGF0XCIsIFwicmVhY3RcIiwgXCJ0eXBlc2NyaXB0XCIsIFwidWJ1bnR1XCIsIFwid29yZHByZXNzXCJdO1xuICBcbiAgICBsZXQgZGl2Um93O1xuICBcbiAgICB0ZWNocy5mb3JFYWNoKCh0ZWNoLCBpbmRleCkgPT4ge1xuICBcbiAgICAgIGlmIChpbmRleCAlIHBhcnNlSW50KHRlY2hzLmxlbmd0aC8zKSA9PT0gMCB8fCBpbmRleCA9PT0gMCkge1xuICAgICAgICBkaXZSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgICAgIGljb25zLmFwcGVuZENoaWxkKGRpdlJvdyk7XG4gICAgICB9XG4gIFxuICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGxldCBpY29uV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpY29uV3JhcC5jbGFzc05hbWUgPSBcImljb25cIjtcbiAgICAgIGltYWdlLnRpdGxlID0gdGVjaDtcbiAgICAgIGltYWdlLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9cIiArIHRlY2ggKyBcIi5zdmdcIjtcbiAgICAgIGljb25XcmFwLmRhdGFzZXQubmFtZSA9IHRlY2g7XG4gIFxuICAgICAgaWNvbldyYXAuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgaWNvbnMuYXBwZW5kQ2hpbGQoaWNvbldyYXApO1xuICAgIH0pO1xuICBcbiAgICBsZXQgYXdlc29tZUdhbWUgPSBuZXcgR2FtZSgpO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXJ0R2FtZSk7XG5cbiAgbGV0IGltYWdlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKV07XG4gIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgIGlmIChpbWFnZS5kYXRhc2V0LnNyYykge1xuICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2UuZGF0YXNldC5zcmM7XG4gICAgfVxuICB9KTtcblx0XG59LCBmYWxzZSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgcmVzaXplSG9tZVNlY3Rpb24oKTtcbn0pO1xuIl19

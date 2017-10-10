'use strict';

function deferLoadCss(name) {
  var giftofspeed = document.createElement('link');
  giftofspeed.rel = 'stylesheet';
  giftofspeed.href = name;
  giftofspeed.type = 'text/css';
  var godefer = document.getElementsByTagName('link')[0];
  godefer.parentNode.insertBefore(giftofspeed, godefer);
}
deferLoadCss('/assets/bootstrap/css/bootstrap.min.css');
deferLoadCss('/assets/css/font-awesome.min.css');
deferLoadCss('/assets/css/style.css');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWxvYWQtY3NzLmpzIl0sIm5hbWVzIjpbImRlZmVyTG9hZENzcyIsIm5hbWUiLCJnaWZ0b2ZzcGVlZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlbCIsImhyZWYiLCJ0eXBlIiwiZ29kZWZlciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQixNQUFJQyxjQUFjQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQWxCO0FBQ0FGLGNBQVlHLEdBQVosR0FBa0IsWUFBbEI7QUFDQUgsY0FBWUksSUFBWixHQUFtQkwsSUFBbkI7QUFDQUMsY0FBWUssSUFBWixHQUFtQixVQUFuQjtBQUNBLE1BQUlDLFVBQVVMLFNBQVNNLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWQ7QUFDQUQsVUFBUUUsVUFBUixDQUFtQkMsWUFBbkIsQ0FBZ0NULFdBQWhDLEVBQTZDTSxPQUE3QztBQUNEO0FBQ0RSLGFBQWEseUNBQWI7QUFDQUEsYUFBYSxrQ0FBYjtBQUNBQSxhQUFhLHVCQUFiIiwiZmlsZSI6InRlbXBsYXRlLWxvYWQtY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZGVmZXJMb2FkQ3NzKG5hbWUpIHtcbiAgdmFyIGdpZnRvZnNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICBnaWZ0b2ZzcGVlZC5yZWwgPSAnc3R5bGVzaGVldCc7XG4gIGdpZnRvZnNwZWVkLmhyZWYgPSBuYW1lO1xuICBnaWZ0b2ZzcGVlZC50eXBlID0gJ3RleHQvY3NzJztcbiAgdmFyIGdvZGVmZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGluaycpWzBdO1xuICBnb2RlZmVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdpZnRvZnNwZWVkLCBnb2RlZmVyKTtcbn1cbmRlZmVyTG9hZENzcygnL2Fzc2V0cy9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7XG5kZWZlckxvYWRDc3MoJy9hc3NldHMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XG5kZWZlckxvYWRDc3MoJy9hc3NldHMvY3NzL3N0eWxlLmNzcycpO1xuIl19

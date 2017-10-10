'use strict';

if (-1 == navigator.userAgent.indexOf("Speed Insights")) {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-62816665-1', 'auto');
  ga('send', 'pageview');
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWdhLmpzIl0sIm5hbWVzIjpbIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJpIiwicyIsIm8iLCJnIiwiciIsImEiLCJtIiwicSIsInB1c2giLCJhcmd1bWVudHMiLCJsIiwiRGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFzeW5jIiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2EiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxDQUFDLENBQUQsSUFBTUEsVUFBVUMsU0FBVixDQUFvQkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLENBQVYsRUFBeUQ7QUFDdkQsR0FBQyxVQUFTQyxDQUFULEVBQVdDLENBQVgsRUFBYUMsQ0FBYixFQUFlQyxDQUFmLEVBQWlCQyxDQUFqQixFQUFtQkMsQ0FBbkIsRUFBcUJDLENBQXJCLEVBQXVCO0FBQUNOLE1BQUUsdUJBQUYsSUFBMkJJLENBQTNCLENBQTZCSixFQUFFSSxDQUFGLElBQUtKLEVBQUVJLENBQUYsS0FBTSxZQUFVO0FBQ3pFLE9BQUNKLEVBQUVJLENBQUYsRUFBS0csQ0FBTCxHQUFPUCxFQUFFSSxDQUFGLEVBQUtHLENBQUwsSUFBUSxFQUFoQixFQUFvQkMsSUFBcEIsQ0FBeUJDLFNBQXpCO0FBQW9DLEtBRGdCLEVBQ2ZULEVBQUVJLENBQUYsRUFBS00sQ0FBTCxHQUFPLElBQUUsSUFBSUMsSUFBSixFQURNLENBQ0tOLElBQUVKLEVBQUVXLGFBQUYsQ0FBZ0JWLENBQWhCLENBQUYsRUFDekRJLElBQUVMLEVBQUVZLG9CQUFGLENBQXVCWCxDQUF2QixFQUEwQixDQUExQixDQUR1RCxDQUMxQkcsRUFBRVMsS0FBRixHQUFRLENBQVIsQ0FBVVQsRUFBRVUsR0FBRixHQUFNWixDQUFOLENBQVFHLEVBQUVVLFVBQUYsQ0FBYUMsWUFBYixDQUEwQlosQ0FBMUIsRUFBNEJDLENBQTVCO0FBQ2hELEdBSEgsRUFHS1ksTUFITCxFQUdZQyxRQUhaLEVBR3FCLFFBSHJCLEVBRzhCLCtDQUg5QixFQUc4RSxJQUg5RTs7QUFLRUMsS0FBRyxRQUFILEVBQWEsZUFBYixFQUE4QixNQUE5QjtBQUNBQSxLQUFHLE1BQUgsRUFBVyxVQUFYO0FBQ0giLCJmaWxlIjoidGVtcGxhdGUtZ2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoLTEgPT0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU3BlZWQgSW5zaWdodHNcIikpIHtcbiAgKGZ1bmN0aW9uKGkscyxvLGcscixhLG0pe2lbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddPXI7aVtyXT1pW3JdfHxmdW5jdGlvbigpe1xuICAgIChpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuICAgIG09cy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTthLmFzeW5jPTE7YS5zcmM9ZzttLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsbSlcbiAgICB9KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qcycsJ2dhJyk7XG4gICAgXG4gICAgZ2EoJ2NyZWF0ZScsICdVQS02MjgxNjY2NS0xJywgJ2F1dG8nKTtcbiAgICBnYSgnc2VuZCcsICdwYWdldmlldycpO1xufVxuIl19

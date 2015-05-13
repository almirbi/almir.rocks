
var spec={
  "width": 1500,
  "height": 450,
  "data": [
    {
      "name": "table",
      "url": "data.json"
    },
    {
      "name": "stats",
      "source": "table",
      "transform": [
        {"type": "facet", "keys": ["data.x"]},
        {"type": "stats", "value": "data.y"}
      ]
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "ordinal",
      "range": "width",
      "domain": {"data": "table", "field": "data.x"}
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "nice": true,
      "domain": {"data": "stats", "field": "sum"}
    },
    {
      "name": "color",
      "type": "ordinal",
      "range": "category10"
    }
  ],
  "axes": [
    {"type": "x", "scale": "x", "title":"Countries"},
    {"type": "y", "scale": "y", "title":"Number of"}
  ],
   "marks": [
    {
      "type": "group",
	  "legends": [
   {
      "title": "International students @TUG, 2015",
	 "fill": "color",
     "properties": {
       "title": {
        
		 "fontSize": {"value": 12},
		
       },
      
       "symbols": {
         "stroke": {"value": "transparent"}
       },
       "legend": {
        
		 "stroke": {"value": "#ccc"},
         "strokeWidth": {"value": 1.5}
       }
     }
   }
],
      "from": {
        "data": "table",
        "transform": [
          {"type": "facet", "keys": ["data.c"]},
          {"type": "stack", "point": "data.x", "height": "data.y"}
        ]
      },
      "marks": [
        {
          "type": "rect",
          "properties": {
            "enter": {
              "x": {"scale": "x", "field": "data.x"},
              "width": {"scale": "x", "band": true, "offset": -2},
              "y": {"scale": "y", "field": "y"},
              "y2": {"scale": "y", "field": "y2"},
              "fill": {"scale": "color", "field": "data.c"}
            },
            "update": {
              "fillOpacity": {"value": 1}
            },
            "hover": {
              "fillOpacity": {"value": 0.3}
            }
          }
        }
      ]
    }    
  ]

}
vg.parse.spec(spec, function(chart) {
  var view = chart({el:"#view"})  //here is where we populate the empty spec data holder with our calculated data
    .update();
});

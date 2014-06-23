var Dot = (function() {

  var _dot = { x: 0, 
               y: 0,
               radius: 0,
               color: 0, 
               inertia: 0.25,
               stopDistance: 3 // adjust distance if inertia changes
              };
  var _max = { x: 0, y:0 };
  var _target = { x: 0, y:0 };

  function _drawCircle(ctx) {
    ctx.fillStyle = _dot.color;
    ctx.beginPath();
    ctx.arc(_dot.x, _dot.y, _dot.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }

  return {

    init: function(dotSettings, canvas) {
      _dot = dotSettings;
      _max.x = canvas.width + dotSettings.radius / 2;
      _max.y = canvas.height + dotSettings.radius / 2;
      this.setTargetXY( dotSettings.x, dotSettings.y );
    },

    // when setting target, constraint to canvas dimensions
    setTargetXY: function(x, y) {
      _target.x = Math.max(0, Math.min(_max.x, x));
      _target.y = Math.max(0, Math.min(_max.y, y));
    },

    draw: function(ctx) {

      var deltaX = _target.x - _dot.x,
          deltaY = _target.y - _dot.y;

      // sometimes the dot never makes it to the mouse pointer...
      var stopDrawing = ( Math.abs(deltaX) <= _dot.snapDistance 
                          && Math.abs(deltaY) <= _dot.snapDistance );

      if ( !stopDrawing ) {
        _dot.x += Math.floor( deltaX * _dot.inertia );
        _dot.y += Math.floor( deltaY * _dot.inertia );
      }

      _drawCircle(ctx);

      return stopDrawing;
    }
    
  }
});
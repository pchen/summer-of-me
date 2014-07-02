var InnerTube = (function() {

  var _tube = { x: 50, 
                y: 350,
                radius: 40,
                color: '#000000', 
                inertia: 0.1,
                stopDistance: 1
              };

  var _max = { x: 0, y:0 };
  var _target = { x: 0, y:0 };

  function _drawCircle(ctx) {

    // outer
    ctx.fillStyle = _tube.color;
    ctx.beginPath();
    ctx.arc(_tube.x, _tube.y, _tube.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    // hole
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(_tube.x, _tube.y, _tube.radius * 0.4, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

  }

  return {

    init: function(settings, canvas) {
      // _tube = settings;
      _tube.x = settings.x;
      _tube.y = settings.y;

      _max.x = canvas.width + _tube.radius / 2;
      _max.y = 350; //canvas.height + settings.radius / 2;

      this.setTargetXY(settings.x, settings.y);
    },

    move: function(x,y) {
      var x = _tube.x + x || _tube.x,
          y = _tube.y + y || _tube.y;

      this.setTargetXY(x,y);
    },

    // when setting target, constraint to canvas dimensions
    setTargetXY: function(x, y) {
      _target.x = Math.max(0, Math.min(_max.x, x));
      _target.y = Math.max(0, Math.min(_max.y, y));
    },

    draw: function(ctx) {

      var deltaX = _target.x - _tube.x,
          deltaY = _target.y - _tube.y;

      var stopDrawing = ( Math.abs(deltaX) <= _tube.snapDistance 
                          && Math.abs(deltaY) <= _tube.snapDistance );

      if ( !stopDrawing ) {
        _tube.x += deltaX * _tube.inertia;
        _tube.y += deltaY * _tube.inertia;
      }

      _drawCircle(ctx);

      return false; //stopDrawing;
    }
    
  }
});
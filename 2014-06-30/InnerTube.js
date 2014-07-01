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

    init: function(dotSettings, canvas) {
      _tube = dotSettings;
      _max.x = canvas.width + dotSettings.radius / 2;
      _max.y = 350; //canvas.height + dotSettings.radius / 2;
      this.setTargetX(dotSettings.x);
    },

    // when setting target, constraint to canvas dimensions
    setTargetX: function(x) {
      _target.x = Math.max(0, Math.min(_max.x, x));
    },

    draw: function(ctx) {

      var deltaX = _target.x - _tube.x;

      var stopDrawing = ( Math.abs(deltaX) <= _tube.snapDistance );

      if ( !stopDrawing ) {
        _tube.x += deltaX * _tube.inertia;
      }

      _drawCircle(ctx);

      return stopDrawing;
    }
    
  }
});
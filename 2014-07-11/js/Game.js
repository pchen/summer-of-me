/**
 * Creates the Game object which will hold all objects and data for
 * the game.
 */
var Game = function() {

  var background;

  // Initialize objects to contain their context and canvas
  // information
  function init(imageRepository, canvas, ctx) {

    // Initialize the background object
    Background.prototype.context = ctx;
    Background.prototype.canvasWidth = canvas.width;
    Background.prototype.canvasHeight = canvas.height;
    background = new Background(imageRepository.background);
    background.init(0,0); // Set draw point to 0,0

    // start the animation loop
    animate();
    
  };

  // Continuously redraw the game
  function animate() {
    requestAnimationFrame(animate.bind(this));
    background.draw();
  };

  // public functions
  return {
    init: init
  };
  
};
/**
 * Creates the Game object which will hold all objects and data for
 * the game.
 */
(function (window) {
  'use strict';

  function Game(imageRepository, bgCanvas) {

    // Initialize the background object
    var background = new app.Background(imageRepository.background, bgCanvas);

    // Continuously redraw the game
    function animate() {
      requestAnimationFrame(animate.bind(this));
      background.draw();
    };

    // start the animation loop
    animate();
    
  };

  // Export to window
  window.app = window.app || {};
  window.app.Game = Game;

})(window);
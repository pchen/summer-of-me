/**
 * Creates the Background object which will become a child of
 * the Drawable object. The background is drawn on the "background"
 * canvas and creates the illusion of moving by panning the image.
 */

(function (window) {
  'use strict';

  function Background(img, canvas) {

    this.speed = 1;

    // overrides 
    this.context = canvas.getContext('2d');
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;

    this.draw = function() {

      // Draw two instances of the background, one on top of first image
      // since original image is only the height of the canvas 
      this.context.drawImage(img, this.x, this.y);
      this.context.drawImage(img, this.x, this.y - this.canvasHeight);
      
      // If the image scrolled off the screen, reset
      // Pan background
      this.y += this.speed;
      if (this.y > this.canvasHeight) {
        this.y = 0;
      }
    };

    this.init(0,0);

  };

  // Set Background to inherit properties from Drawable
  Background.prototype = new app.Drawable();

  // Export to window
  window.app = window.app || {};
  window.app.Background = Background;

}(window));
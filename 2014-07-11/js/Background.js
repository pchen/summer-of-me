/**
 * Creates the Background object which will become a child of
 * the Drawable object. The background is drawn on the "background"
 * canvas and creates the illusion of moving by panning the image.
 */
var Background = function(img) {

  this.speed = 1;

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

};

// Set Background to inherit properties from Drawable
Background.prototype = new Drawable();
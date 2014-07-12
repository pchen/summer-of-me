/**
 * Creates the Drawable object which will be the base class for
 * all drawable objects in the game. Sets up default variables
 * that all child objects will inherit, as well as the default
 * functions.
 */
var Drawable = function () {

  this.canvasWidth = 0;
  this.canvasHeight = 0;

  this.speed = 0; //how many pixels the object can move each frame

  this.init = function(x, y) {
    // Default variables
    this.x = x;
    this.y = y;
  };
  
  // Define abstract function to be implemented in child objects
  this.draw = function() {
  };

};
/*
 littleBits Arduino Module
 Original code by David Mellis http://www.arduino.cc/en/Tutorial/Graph
 created Jan 2009 by Trevor Shannon http://www.trevorshp.com/creations/etchasketch.htm
 modified Jan 2014 for littleBits by Kristin Salomon
 modified Mar 2014 for littleBits by Matt Richard
 
 _Etch-a-Sketch_
 
 What is supposed to happen:
 * Use two dimmers to draw in a Processing Etch-a-Sketch program
 
 Important Note:
 * You will need to download Processing to run the Processing sketch.
 Processing can be downloaded here: https://processing.org/download/?processing
 
 Circuit:
 * littleBits dimmer or slide dimmer on analog pin A0
 * littleBits dimmer or slide dimmer on analog pin A1
 * Optional:
 Use two littBits wire modules to properly orient the slide dimmers
 * Note:
 The following other input modules can be used: bend, light, pressure sensor
 However, their min and max range will need to be adjusted in Processing:
 
 This sketch includs the following commands:
 analogRead(pin);           pin = an analog pin
 delay(time);               time: milliseconds
 Serial.begin(baudrate);    baudrate = speed of serial communication
 Serial.read();             reads the incoming data from Serial port
 Serial.print();            sends data out the Serial port
 */

int x;// this sensor reading is used to determine the x position of the Etch-a-Sketch draw head
int y;// this sensor reading is used to determine the y position of the Etch-a-Sketch draw head

void setup() {
  // initialize the serial communication
  Serial.begin(9600);
  
  // wait while littleBits Arduino module is not connected to Serial Port
  // this should not take long at all
  while(!Serial);
}

void loop() {
  // first we need to read the values from the sensors
  
  // read and assign the value of analog input A0 to the variable x
  x = analogRead(A0);
  // read and assign the value of analog input A1 to the variable y
  y = analogRead(A1);
  
  // next we need to send these values to Processing
  // Processing is expecting a particular format that looks like this "123,456 "
  // The format is: number | ',' | number | ' '
  // The ',' is used to tell the end of the first sensor value
  // The ' ' is used to determine the end of the second value and the packet as a whole
  Serial.print(x);
  Serial.print(",");
  Serial.println(y);
  
  // After we send the values we need to wait a moment for the Serial port
  delay(10);
}



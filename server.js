const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

socketInit = () => {
  console.log("button-pressed! " + 3);
  io.on("connection", socket => {
    socket.emit("button-pressed", { value: 3 });
  });
};

/*
var Gpio = require("onoff").Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, "out"); //use GPIO pin 4 as output
var pushButton = new Gpio(17, "in", "both"); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled
*/

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
  socketInit();
});

/*
  start = () => {
    pushButton.watch(function(err, value) {
      //Watch for hardware interrupts on pushButton GPIO, specify callback function
      if (err) {
        //if an error
        console.error("There was an error", err); //output error message to console
        return;
      }
      LED.writeSync(value); //turn LED on or off depending on the button state (0 or 1)
    });

    function unexportOnClose() {
      //function to run when exiting program
      LED.writeSync(0); // Turn LED off
      LED.unexport(); // Unexport LED GPIO to free resources
      pushButton.unexport(); // Unexport Button GPIO to free resources
    }

    process.on("SIGINT", unexportOnClose); //function to run when user closes using ctrl+c
  };
  */

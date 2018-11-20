const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const http = require("http").Server(app);
const io = require("socket.io")(http);

var Gpio = require("onoff").Gpio; //include onoff to interact with the GPIO

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

socketInit = () => {
  console.log("button-pressed! " + 3);
  io.on("connection", socket => {
    var button1 = new Gpio(4, "in", "falling");
    var button2 = new Gpio(17, "in", "falling");
    button1.watch((err, value) => {
      if (err) {
        console.error("There was an error", err);
        return;
      }
      console.log("button 1 pressed! - " + value);
      socket.emit("button-pressed", { value: 1 });
    });
    button2.watch((err, value) => {
      if (err) {
        console.error("There was an error", err);
        return;
      }
      console.log("button 2 pressed! - " + value);
      socket.emit("button-pressed", { value: 2 });
    });
  });
};

function unexportOnClose() {
  //function to run when exiting program
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
}

process.on("SIGINT", unexportOnClose); //function to run when user closes using ctrl+c

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
  socketInit();
});

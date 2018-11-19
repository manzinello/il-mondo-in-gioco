import React, { Component } from "react";

import { Grommet, Box, Video, Layer } from "grommet";
import MondoBox from "./components/MondoBox";

import io from "socket.io-client";

var socket = io("http://localhost:5000", {
  transports: ["websocket"]
});

const giochi = [
  {
    backgroundImage: "gioco-1.jpg",
    num: 1,
    gioco: "Mandala"
  },
  {
    backgroundImage: "gioco-2.jpg",
    num: 2,
    gioco: "Mandala"
  },
  {
    backgroundImage: "gioco-3.jpg",
    num: 3,
    gioco: "Mandala"
  },
  {
    backgroundImage: "gioco-4.jpg",
    num: 4,
    gioco: "Mandala"
  },
  {
    backgroundImage: "gioco-5.jpg",
    num: 5,
    gioco: "Mandala"
  },
  {
    backgroundImage: "gioco-6.jpg",
    num: 6,
    gioco: "Mandala"
  }
];

class App extends Component {
  onOpen = () => this.setState({ open: true });

  onClose = () => this.setState({ open: undefined });

  state = {
    open: undefined,
    video: null
  };

  switchVideo = num => {
    switch (num) {
      case 1:
      default:
        this.setState({ video: "/video/small.mp4" }, () => {
          this.setState({ open: true });
        });
    }
  };

  handlePress = num => {
    this.switchVideo(num);
  };

  componentDidMount() {
    socket.on("button-pressed", data => {
      console.log(new Date().getTime() + " " + data);
      this.switchVideo(data.value);
    });
  }

  render() {
    return (
      <>
        <Grommet full>
          {this.state.open && this.state.video && (
            <Layer
              position="center"
              modal
              onClickOutside={this.onClose}
              onEsc={this.onClose}
            >
              <Box pad="medium" gap="small" width="medium">
                <Video loop={true} controls={false} autoPlay={true}>
                  <source src={this.state.video} type="video/mp4" />
                </Video>
              </Box>
            </Layer>
          )}
          <Box background="dark-2" fill>
            <Box
              direction="row-responsive"
              justify="center"
              alignSelf="center"
              align="center"
              pad="xlarge"
              gap="medium"
              fill
            >
              {giochi.map(gioco => (
                <MondoBox
                  handlePressBox={this.handlePress}
                  onClick={this.onOpen}
                  backgroundImage={gioco.backgroundImage}
                  gioco={gioco.gioco}
                  num={gioco.num}
                />
              ))}
            </Box>
          </Box>
        </Grommet>
      </>
    );
  }
}

export default App;

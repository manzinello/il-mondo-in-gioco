import React, { Component } from "react";

import { Grommet, Box, Video, Layer, Button, Heading } from "grommet";
import { LinkPrevious } from "grommet-icons";
import MondoBox from "./components/MondoBox";

import "./App.css";

/*
import io from "socket.io-client";

var socket = io("http://localhost:5000", {
  transports: ["websocket"]
});
*/

const giochi = [
  {
    backgroundImage: "1MANCALA.jpg",
    num: 1,
    gioco: "Mancàla"
  },
  {
    backgroundImage: "2CERCHIO.jpg",
    num: 2,
    gioco: "Cerchio"
  },
  {
    backgroundImage: "3KENDAMA.jpg",
    num: 3,
    gioco: "Kendama"
  },
  {
    backgroundImage: "4JIANZI.jpg",
    num: 4,
    gioco: "Jianzi"
  },
  {
    backgroundImage: "5MAROMERO.jpg",
    num: 5,
    gioco: "Maromero"
  },
  {
    backgroundImage: "6BOOMERANG.jpg",
    num: 6,
    gioco: "Boomerang"
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
        this.setState({ video: "/video/gioco-1.mp4" }, () => {
          this.setState({ open: true });
        });
        break;
      case 2:
        this.setState({ video: "/video/gioco-2.mp4" }, () => {
          this.setState({ open: true });
        });
        break;
      case 3:
        this.setState({ video: "/video/gioco-3.mp4" }, () => {
          this.setState({ open: true });
        });
        break;
      case 4:
        this.setState({ video: "/video/gioco-4.mp4" }, () => {
          this.setState({ open: true });
        });
        break;
      case 5:
        this.setState({ video: "/video/gioco-5.mp4" }, () => {
          this.setState({ open: true });
        });
        break;
      case 6:
        this.setState({ video: "/video/gioco-6.mp4" }, () => {
          this.setState({ open: true });
        });
        break;
      default:
        this.setState({ video: "/video/gioco-1.mp4" }, () => {
          this.setState({ open: true });
        });
    }
  };

  handlePress = num => {
    this.switchVideo(num);
  };

  componentDidMount() {
    /*
    socket.on("button-pressed", data => {
      console.log(new Date().getTime() + " " + data);
      this.switchVideo(data.value);
    });
    */
  }

  render() {
    return (
      <>
        <Grommet full>
          {this.state.open && this.state.video && (
            <Layer
              position="center"
              modal
              full
              margin="none"
              onEsc={this.onClose}
            >
              <Box
                fill={true}
                background={{
                  color: "dark-1",
                  dark: true,
                  position: "bottom",
                  image: "url(images/background.png)"
                }}
                pad="medium"
                gap="small"
                width="xlarge"
              >
                <Video loop={true} controls={false} autoPlay={true}>
                  <source src={this.state.video} type="video/mp4" />
                </Video>
                <Button
                  icon={<LinkPrevious color="white" />}
                  primary
                  color="neutral-4"
                  label="Torna indietro"
                  onClick={this.onClose}
                />
              </Box>
            </Layer>
          )}
          <Box
            justify="center"
            align="center"
            alignSelf="center"
            background="url(images/background.png)"
            fill
          >
            <Heading color="white" level={1}>
              il mondo in gioco
            </Heading>
            <Box direction="row-responsive" pad="xlarge" gap="medium" fill>
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
            <Heading color="white" level={3}>
              <u>ilmondoingioco.betharram.it</u>
            </Heading>
          </Box>
        </Grommet>
      </>
    );
  }
}

export default App;

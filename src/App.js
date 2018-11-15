import React, { Component } from "react";

import { Grommet, Box, Text, Video, Layer, Button, Heading } from "grommet";
import MondoBox from "./components/MondoBox";

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
    video: "https://www.youtube.com/embed/qM9zMgbVlFQ"
  };

  render() {
    return (
      <>
        <Grommet full>
          {this.state.open && (
            <Layer
              position="center"
              modal
              onClickOutside={this.onClose}
              onEsc={this.onClose}
            >
              <Box pad="medium" gap="small" width="medium">
                <Video>
                  <source
                    src="http://techslides.com/demos/sample-videos/small.webm"
                    type="video/webm"
                  />
                  <source
                    src="http://techslides.com/demos/sample-videos/small.ogv"
                    type="video/ogg"
                  />
                  <source
                    src="http://techslides.com/demos/sample-videos/small.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="http://techslides.com/demos/sample-videos/small.3gp"
                    type="video/3gp"
                  />
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

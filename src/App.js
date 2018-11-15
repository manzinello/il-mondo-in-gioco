import React, { Component } from "react";

import { Grommet, Box, Text, Video } from "grommet";
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
  state = {
    open: false,
    video: "https://www.youtube.com/embed/qM9zMgbVlFQ"
  };

  render() {
    return (
      <>
        <Grommet full>
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

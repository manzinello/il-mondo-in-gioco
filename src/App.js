import React, { Component } from "react";
import { Attraction, Car } from "grommet-icons";

import { Grommet, Anchor, Box, Button, Grid, Text } from "grommet";

const SimpleBox = () => (
  <Grommet>
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      background="dark-2"
      gap="medium"
    >
      <Box
        pad="large"
        align="center"
        background={{ color: "light-2", opacity: "strong" }}
        round
        gap="small"
      >
        <Attraction size="large" />
        <Text>Party</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
      <Box pad="large" align="center" background="dark-3" round gap="small">
        <Car size="large" color="light-2" />
        <Text>Travel</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
    </Box>
  </Grommet>
);

class App extends Component {
  state = {
    open: false,
    video: "https://www.youtube.com/embed/qM9zMgbVlFQ"
  };

  render() {
    return (
      <>
        <SimpleBox />
      </>
    );
  }
}

export default App;

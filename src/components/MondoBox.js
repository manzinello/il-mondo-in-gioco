import React from "react";
import { Heading, Box, Text } from "grommet";

class MondoBox extends React.Component {
  render = () => {
    return (
      <Box
        pad="large"
        onClick={() => this.props.handlePressBox(this.props.num)}
        align="center"
        background={{
          color: "neutral-1",
          dark: true,
          opacity: "weak",
          position: "bottom",
          image: "url(images/" + this.props.backgroundImage + ")"
        }}
        round
        gap="small"
      >
        <Heading level={1}>{this.props.num}</Heading>
        <Text>{this.props.gioco}</Text>
      </Box>
    );
  };
}

export default MondoBox;

import React from "react";
import { Heading, Box } from "grommet";

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
        <Heading level={2}>{this.props.gioco}</Heading>
      </Box>
    );
  };
}

export default MondoBox;

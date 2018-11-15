import React from "react";
import { Heading, Grommet, Anchor, Box, Button, Text } from "grommet";

class MondoBox extends React.Component {
  render = () => {
    return (
      <Box
        pad="large"
        onClick={this.props.handlePressBox}
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
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
    );
  };
}

export default MondoBox;

import React from "react";
import { Heading, Box } from "grommet";

class MondoBox extends React.Component {
  render = () => {
    return (
      <Box
        pad="large"
        width="medium"
        alignSelf="center"
        onClick={() => this.props.handlePressBox(this.props.num)}
        align="center"
        background={{
          image: "url(images/" + this.props.backgroundImage + ")",
          opacity: "strong"
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

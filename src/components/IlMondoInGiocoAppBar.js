import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Main from "./Main";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: "white",
    boxShadow: 2,
    padding: 24,
    top: 24,
    left: "calc(50% - 150px)"
  }
};

class IlMondoInGiocoAppBar extends Component {
  state = {
    eh: false,
    info: false
  };

  handleOpenEh = () => {
    this.setState({ eh: true });
  };

  handleCloseEh = () => {
    this.setState({ eh: false });
  };

  handleOpenInfo = () => {
    this.setState({ info: true });
  };

  handleCloseInfo = () => {
    this.setState({ info: false });
  };

  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" style={styles.flex}>
              {"Il mondo in gioco"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Main />
      </div>
    );
  }
}

export default IlMondoInGiocoAppBar;

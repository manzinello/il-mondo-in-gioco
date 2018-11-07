import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import Modal from "@material-ui/core/Modal";

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
  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.handleOpenInfo}
              style={styles.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <img src="images/bolt.png" width={48} alt="tiportoviacon.me" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default IlMondoInGiocoAppBar;

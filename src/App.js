import React, { Component } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import AppBar from "./components/AppBar";
import Main from "./components/Main";
import MDialog from "./components/MDialog";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#1E88E5",
      main: "#D64D6D",
      dark: "#1565C0",
      contrastText: "#fff"
    },
    secondary: {
      light: "#F4511E",
      main: "#D84315",
      dark: "#BF360C",
      contrastText: "#fff"
    }
  }
});

class App extends Component {
  state = {
    open: false,
    video: "https://www.youtube.com/embed/qM9zMgbVlFQ"
  };

  handleVideo = video => {
    this.setState(
      {
        video
      },
      () => {
        this.setState({ open: true });
      }
    );
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar />
        <Main handleVideo={this.handleVideo} />
        <MDialog open={this.state.open} video={this.state.video} />
      </MuiThemeProvider>
    );
  }
}

export default App;

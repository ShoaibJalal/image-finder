import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import "./App.css";
const theme = createMuiTheme({
  palette: {
    primary: indigo, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

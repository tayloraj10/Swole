import React, { Component } from "react";
import "../styles/App.css";

import Header from "./Header";
import GetLastWeightPage from "../pages/GetLastWeightPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Spreadsheet">
          {/* <Spreadsheet /> */}
          <GetLastWeightPage />
        </div>
      </div>
    );
  }
}

export default App;

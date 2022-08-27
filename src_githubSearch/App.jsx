import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./App.css";

class App extends Component {
  state = { users: [], isFirst: true, isLoading: false, err: "" };
  updateData = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <div>
        <Search updateData={this.updateData} />
        <List {...this.state} />
      </div>
    );
  }
}

export default App;

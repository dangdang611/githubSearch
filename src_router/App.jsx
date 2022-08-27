import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Content/Home";
import Home2 from "./pages/Content/Home2";

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <h1>Hello,React</h1>
        <div className="content">
          <div className="left">
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/home2">Home2</NavLink>
          </div>
          <div className="right">
            <Route path="/home" component={Home}></Route>
            <Route path="/home2" component={Home2}></Route>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

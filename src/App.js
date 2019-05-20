import React, {
  Component
} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Login from "./login/login";
import Register from "./login/register";
import MainPage from "./additional/main";
import Results from "./Results/results";
import "./App.css";

class App extends Component {
  onLogin = () => {
    console.log("Login");
  };

  render() {
    return ( <
      HashRouter >
      <
      div >
      <
      ul className = "header" >
      <
      li >
      <
      NavLink to = "/additional/main" > Main < /NavLink> < /
      li > <
      li >
      <
      NavLink to = "/Results/results" > Results < /NavLink> < /
      li > <
      li >
      <
      NavLink to = "/login/login" > Login < /NavLink> < /
      li > <
      li >
      <
      NavLink to = "/login/register" > Register < /NavLink> < /
      li > <
      /ul> <
      div >
      <
      Route path = "/additional/main"
      component = {
        MainPage
      }
      /> <
      Route path = "/Results/results"
      component = {
        Results
      }
      /> <
      Route path = "/login/login"
      component = {
        Login
      }
      /> <
      Route path = "/login/register"
      component = {
        Register
      }
      /> < /
      div > <
      /div> < /
      HashRouter >
    );
  }
}

export default App;
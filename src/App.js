import React, {
  Component
} from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Redirect,
  Switch
} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import jwtDecode from "jwt-decode";
import Login from "./login/login";
import Register from "./login/register";
import MainPage from "./additional/main";
import Results from "./Results/results";
import Tournament from "./additional/tournament";
import NavBar from "./additional/navbar";
import "./App.css";
import reactJoiValidation from "react-joi-validation";

class App extends Component {
  state = {};


  componentDidMount(){
    try{
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    this.setState({user});
    }
    catch(ex){}
  }

  


  

  render() {
    return (
      <div >
      
      <HashRouter >
      <div >
      <ul className = "header" >
      <li >
      <NavLink to = "/additional/main" > Main </NavLink> 
      </li > 
      < li >
      <NavLink to = "/Results/results" > Results </NavLink> 
      </li > 
      {!this.state.user && <li >
       <NavLink to = "/login/login" > Login </NavLink> 
      </li > }
      {!this.state.user && <li >
      <NavLink to = "/login/register" > Register </NavLink> 
      </li >}
      { this.state.user && this.state.user.class === "xylobolus" && <li >
      <NavLink to = "/additional/tournament" > Tournament </NavLink> 
      </li > }
      </ul> 
      <div >
      <Route path = "/additional/main"
      component = {
        MainPage
      }
      /> 
      <Route path = "/Results/results"
      component = {
        Results
      }
      /> 
      <Route path = "/login/login"
      component = {
        Login
      }
      /> 
      <Route path = "/login/register"
      component = {
        Register
      }
      /> 
      <Route path = "/additional/tournament"
      component = {
        Tournament
      }
      /> 
      </div > 
      </div> 
      </HashRouter >
      </div>
    );
  }
}

export default App;
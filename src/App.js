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
import Logout from "./login/logout";
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
      
      <React.Fragment>
        <ToastContainer/>
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
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
      <Route path = "/login/logout"
      component = {
        Logout
      }
      /> 
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
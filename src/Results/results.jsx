import React, { Component } from "react";
import httpSerive from "../services/httpService";
import config from "../config";


const api = config.apiEndpoint + "/person";

class Results extends Component {
  
  state = {
    person: [],
  };
  
  

  async componentDidMount() {
    const { data: person } = await httpSerive.get(
      api
    );
    this.setState({ person });
    console.log(this.state.person);
  }

  incrementCounter(){
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
      <div className="row container col-12 col-md-8 ">
        
        <div className="col-2"><b>Place</b></div>
        <div className="col-4"><b>Surname</b></div>
        <div className="col-4"><b>Name</b></div>
        <div className="col-2"><b>PDF</b></div>
        
        </div>
        
        <div >
          {this.state.person.sort((a, b) => b.pdf - a.pdf).map((item, index) => (
            
            <div className="row container col-sm-12 col-md-8" key={item._id}>
              <div className="col-2"> {index + 1} </div>
              <div className="col-4">{item.surname}</div>
              <div className="col-4">{item.name}</div>
              <div className="col-2">{item.pdf}</div>
            </div>
            
            // <div className="col-4" key={item.id}>
            // {item.title}
            // </div>
          ))}
        </div>
      </div>

    );
  }
}

export default Results;

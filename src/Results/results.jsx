import React, { Component } from "react";
import axios from "axios";

class Results extends Component {
  state = {
    person: []
  };

  async componentDidMount() {
    const { data: person } = await axios.get(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    this.setState({ person });
    console.log(this.state.person);
  }
  render() {
    return (
      <div className="row container col-sm-12 col-md-8">
        <div className="col-2">Place</div>
        <div className="col-4">Surname</div>
        <div className="col-4">Name</div>
        <div className="col-2">PDF</div>

        <div>
          {this.state.person.map(item => (
            <div className="col-4" key={item.id}>
              {item.title}
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

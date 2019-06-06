import React, { Component } from "react";
import apiEndpoint from "../config.json";
import httpService from "../services/httpService";


function validate(file, name, date) {
    // true means invalid, so our conditions got reversed
    return {
      file: file === null,
      name: name.length === 0,
      date: date === ""
    };
  }

class Tournament extends Component {
  log = false;
    constructor(props) {
        super(props);
        this.state ={
            file:null,
            name: "",
            date: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
      }

      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state);
      }

      onChange(e) {
        this.setState({file:e.target.value})
      }
      handleNameChange = evt => {
        this.setState({ name: evt.target.value });
      };
      handleDateChange = evt => {
        this.setState({ date: evt.target.value });
      };

    fileUpload(state){
        const crl = apiEndpoint + "/addTournament";
        console.log(crl);
        const formData = new FormData();
        formData.append('file',state.file);
        formData.append('name',state.name);
        formData.append('date',state.date);
        httpService.post("http://localhost:8080/addTournament", this.state)
        
      }

      
      
        

  render() {
    const errors = validate(
        this.state.file,
        this.state.name,
        this.state.date
      );
      const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        
        <input type="file" onChange={this.onChange} />
        <input
            
            type="text"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        <button type="submit" disabled={isDisabled}>Upload</button>
      </form>
      
      </div>
    );
  }
}

export default Tournament;
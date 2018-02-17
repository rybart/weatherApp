import React, { Component } from 'react';
import '../App.css';
// import Login from "./Login";
import Date from './Date';

class Submit extends Component {

    render() {
      return (
        <div className="App">
          <button type = "submit">{this.props.buttonText}</button>
        </div>
      );
    }
  }
  
  export default Submit;
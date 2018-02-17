import React, { Component } from 'react';
import '../App.css';
// import Login from "./Login";

class Dji extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: ""
      }
    }

    render() {
      return (
        <div className="App">
          <div className = "mainBox">
            <div className = "date">
                <input type="text" value = {this.props.date} />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Dji;
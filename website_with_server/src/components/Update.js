import React, { Component } from 'react';
import '../App.css';
// import Login from "./Login";
import Date from './Date';

class Update extends Component {

    render() {
      return (
        <div className="App">
          <button onClick = {this.props.update}>Refresh</button>
        </div>
      );
    }
  }
  
  export default Update;
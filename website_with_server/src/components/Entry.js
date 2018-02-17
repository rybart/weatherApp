import React, { Component } from 'react';
import '../App.css';
// import Login from "./Login";
import Date from './Date';

class Entry extends Component {

    render() {
      return (
        <div className="App">
            <textarea name="" id="" placeholder = "Begin typing!" onChange = {this.props.handleChange} value = {this.props.entry}></textarea>
        </div>
      );
    }
  }
  
  export default Entry;
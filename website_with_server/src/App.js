import React, { Component } from 'react';
import logo from './rybart222.png';
import './App.css';
import Dat from './components/Date';
import Entry from './components/Entry';
import Submit from './components/Submit';
import axios from 'axios';
import Update from './components/Update';


let imgUrl = './orange.jpg';
let styles = {
  root:{
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        entries: [],
        date: new Date().toLocaleString(),
        entry: "",
        buttonText: "Save",
        updateId:0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
  }
  handleChange(e){
    this.setState({
      entry: e.target.value,
    })
  }
  componentDidMount(){
    axios.get('/api/data')
    .then( (response) =>{
      this.setState({
        entries:response.data
      })      

    })
    }
  submitEntry(e){
    e.preventDefault();
    if(this.state.entry !== ''){
    if(this.state.buttonText === "Save"){
      let data = {
        text: this.state.entry,
        date: this.state.date,
        id: this.state.id
  
      }
      axios.post('/api/post/entry', data)
        .then( (response) => {
          this.setState({
            entries: response.data,
            entry: "",
          })
        })

    }else{
      let data = {
        text: this.state.entry,
        date: this.state.date,
        id: this.state.updateId,

      }
      axios.put(`/api/update`,data)
      .then((response) => {
        this.setState({
          entries: response.data,
          entry:"",
          buttonText: `Save`,
        })
      })
    }
  }}
  deleteEntry(index){
    axios.delete(`/api/delete/${index}`)
    .then( (response) =>{
      this.setState({
        entries: response.data,
      })
    })
  }
  updateEntry(text, id){
    this.setState({
      entry: text,
      buttonText: `Update`,
      updateId: id,
    })
  }
  render() {
    const entries = this.state.entries.length > 0 ? this.state.entries
      .map((entry, i) => (
            <div key={`entry-${this.props.date}-${i}`} className = "pastPosts">
              <h3>
              {entry.date}
              </h3>
              <p>
              {entry.text}
              </p>
              <div className = "buttons">
                <button onClick = {()=>{this.deleteEntry(entry.id)}}>Delete</button>
                <button onClick = {() => {this.updateEntry(entry.text, entry.id)}}>Update</button>
              </div>
            </div>

      )) : <div className = "nothing">Nothing to show!</div>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Forgetful?</h1>
        </header>
        <Dat date = {this.state.date}/>
        <form onSubmit = {this.submitEntry}>
        <Entry handleChange = {this.handleChange} entry = {this.state.entry}/>
        <Submit buttonText = {this.state.buttonText}/>
        </form>
      <ul>
        {entries}
      </ul>
      </div>
    );
  }
}

export default App;

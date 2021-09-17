import React, { Component } from 'react';
import './App.css';
import { fetchData, fetchMarsData } from './apiCalls'

class App extends Component {
  constructor() {
    super();
      this.state= {
        spaceData: [],
        error: '',
        isLoading: false
      }
  }
  componentDidMount = () => {
    this.setState({ isLoading: true})
    fetchMarsData()
      .then(data => this.setState({ spaceData:data.photos }))
  }
  render() {
    return (
      <h1>Spacestagram</h1>
    )
  }
}

export default App;

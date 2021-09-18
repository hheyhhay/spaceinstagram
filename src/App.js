import React, { Component } from 'react';
import './App.css';
import { fetchMarsData } from './apiCalls'
import Images from './Images'


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
      .then(data => this.setState({ spaceData:data.photos, isLoading: false }))
  }

  handleClick = (id) => {
    console.log(id)
return
  }




  render() {
    const { spaceData, error, isLoading } = this.state;
    return (
      <main className='App'>
        <h1 className='header'>Spacestagram</h1>
        <h2 className='subheader'>Brought to you by NASA's image API</h2>
        {isLoading && <p className='loading-page'> Please hold, gathering data </p>}
        {error && <p className='error-page'> Sorry, can't access space rn. Please come back later</p>}
        <Images id='images'
          images={spaceData}
          handleClick={ this.handleClick }
        />
      </main>
    )
  }
}

export default App;

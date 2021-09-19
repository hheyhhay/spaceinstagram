import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchMarsData } from './apiCalls'
import Images from './Images'


// class App extends Component {
//   constructor() {
//     super();
//       this.state= {
//         spaceData: [],
//         savedFavorites: [],
//         error: '',
//         isLoading: false
//       }
//   }
const App = () => {
    const [spaceData, setSpaceData] = useState([])
    const [error, setError] = useState('');
    const [isLoading, setIsLoading ] = useState(true)

    const getData = async () => {
      try {
        const data = await fetchMarsData()
        setSpaceData(data.photos)
        setIsLoading(false)
      }
      catch (error) {
        setError(error.message)
      }
    }

    useEffect( () => {
      getData()
    }, [] )

const handleClick = (id) => {
    return null
    // const favoriteImage = this.state.spaceData.find(image => image.id === id)
    // const filteredData = this.state.spaceData.filter(image => image.id !== id)
    //
    // this.setState({ spaceData: filteredData})
    //
    // if (!this.state.savedFavorites) {
    //   this.setState({ savedFavorites:[favoriteImage]})
    // } else {
    //   this.setState({ savedFavorites:[...this.state.savedFavorites, favoriteImage]})
    // }
  }

    return (
      <main className='App'>
        <h1 className='header'>Spacestagram</h1>
        <h2 className='subheader'>Brought to you by NASA's image API</h2>
        { isLoading && <p className='loading-page'> Please hold, gathering data </p> }
        { error && <p className='error-page'> Sorry, can't access space rn. Please come back later</p> }
        <Images id='images'
          images={ spaceData }
          handleClick={ handleClick }
        />
      </main>
    )
}

export default App;

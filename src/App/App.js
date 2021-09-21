import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchMarsData } from '../util/apiCalls';
import Images from '../Images/Images';
import Loader from '../Loader/Loader';
import { simplifyData } from '../util/util';

const App = () => {
    const [spaceData, setSpaceData] = useState([])
    const [error, setError] = useState('');
    const [isLoading, setIsLoading ] = useState(true)

    const getData = async () => {
      try {
        const data = await fetchMarsData()
        const filteredData = simplifyData(data.photos)
        setSpaceData(filteredData)
        setIsLoading(false)
      }
      catch (error) {
        setError(error.message)
      }
    }

    useEffect( () => {
      getData()
    }, [] )

    return (
      <main className='App'>
        <h1 className='header'>Spacestagram</h1>
        <h2 className='subheader'>Brought to you by NASA's image API</h2>
        { isLoading && <Loader /> }
        { error && <p className='error-page'>{ error }</p> }
        <Images id='images'
          images={ spaceData }
        />
      </main>
    )
}

export default App;

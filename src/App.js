import React, { Component } from 'react';
import './App.css';
import { fetchMarsData } from './apiCalls'
import Images from './Images'


class App extends Component {
  constructor() {
    super();
      this.state= {
        spaceData: [],
        savedFavorites: [],
        error: '',
        isLoading: false
      }
  }
  // function App() {
  //   const [spaceData, setSpaceData] = useState([])
  //   const [error, setError] = useState('');
  //   const [isLoading, setIsLoading ] = useState(false)
  //
  //   useEffect(() => {
  //     const getData = fetchMarsData()
  //     setStateData(getData.photos)
  //
  //   }
  // }
  componentDidMount = () => {
    this.setState({ isLoading: true})
    fetchMarsData()
      .then(data => this.setState({ spaceData:data.photos, isLoading: false }))
  }

  handleClick = (id) => {
    // console.log(this.props)
    // console.log(this.state)
    const favoriteImage = this.state.spaceData.find(image => image.id === id)
    const filteredData = this.state.spaceData.filter(image => image.id !== id)

    this.setState({ spaceData: filteredData})

    if (!this.state.savedFavorites) {
      this.setState({ savedFavorites:[favoriteImage]})
    } else {
      this.setState({ savedFavorites:[...this.state.savedFavorites, favoriteImage]})
    }
  }




  render() {
    const { spaceData, savedFavorites, error, isLoading } = this.state;
    return (
      <main className='App'>
        <h1 className='header'>Spacestagram</h1>
        <h2 className='subheader'>Brought to you by NASA's image API</h2>
        {isLoading && <p className='loading-page'> Please hold, gathering data </p>}
        {error && <p className='error-page'> Sorry, can't access space rn. Please come back later</p>}
        <Images id='images'
          images={spaceData}
          favorites={ savedFavorites }
          handleClick={ this.handleClick }
        />
      </main>
    )
  }
}

export default App;

export const fetchData = async () => {
  let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=r7nQb1ZKuNn7tW2BMp3etkcWxCdU6uQ1k7emg0c0')
  if (!response.ok) {
    throw new Error('Sorry, we\'re having a hard time finding space')
  }
  let allPictures = await response.json();
  return allPictures
}

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

export const fetchMarsData = async () => {
  let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=r7nQb1ZKuNn7tW2BMp3etkcWxCdU6uQ1k7emg0c0')
  if (!response.ok) {
    throw new Error('Sorry, we\'re having a hard time finding space')
  }
  let allMarsPictures = await response.json();
  return allMarsPictures
}

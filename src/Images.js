import React from 'react';
import './Images.css';

const Images = ( { images } ) => {

  const imageCards = images.map(image => {
    return (
      <div className='image-card' key={image['id']}>
        <img className='space-image'  src={image['img_src']} />
        <h3 className='camera-name'>{image.rover['name']} Rover - {image.camera['full_name']}</h3>
        <h2 className='capture-date'>{ image['earth_date'] }</h2>
        <button>Like</button>
      </div>
    )
  })
  return (
    <div className='image-display'>
      {imageCards.length > 0 && <div className='image-container'>{imageCards}</div> }
    </div>
  )

}

export default Images;


//Curiousity rover - Front Havard Avoidance Camera
//2021 - 09-01
//like

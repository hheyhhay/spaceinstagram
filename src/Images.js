import React from 'react';
import './Images.css';

const Images = ( { images, handleClick } ) => {

  const imageCards = images.map(image => {
    return (
      <div className='image-card' key={image['id']}>
        <img className='space-image'  src={image['img_src']} alt={`Landing of ${image.rover['name']} on Mars`}/>
        <h3 className='camera-name'>{image.rover['name']} Rover - {image.camera['full_name']}</h3>
        <h2 className='capture-date'>{ image['earth_date'] }</h2>
        <button
          className='like-button'
          onClick={() => handleClick(9 ) }
        >Like</button>
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

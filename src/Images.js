import React from 'react';
import './Images.css';

const Images = ( { images } ) => {
  // console.log(images )
  const imageCards = images.map(image => {
    return (
      <img className='space-image' src={image['img_src']} />
    )
  })

  return (
    <div className='image-display'>
      {imageCards.length > 0 && <div className='image-container'>{imageCards}</div> }
    </div>
  )
  // return null
}

export default Images;

import React, { useState, useEffect } from 'react';
import './Images.css';
import Card from './Card';

const Images = ( { images} ) => {

  const imageCards = images.map(image => {
    return (
      <Card
        key={ image.id }
        id={ image.id }
        image={ image.image }
        name={ image.name }
        cameraName={ image.cameraName }
        date={ image.date}
      />
    )
  })

  return (
    <div className='image-display'>
      {imageCards.length > 0 && <div className='image-container'>
      { imageCards }
      </div> }
    </div>
  )
}

export default Images;

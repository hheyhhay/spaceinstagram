import React from 'react';
import './Images.css';
import Card from './Card';

const Images = ( { images, handleClick } ) => {

  const imageCards = images.map(image => {
    return (
      <Card
        id={image['id']}
        image={image['img_src']}
        name={image.rover['name']}
        cameraName={image.rover['full_name']}
        date={ image['earth_date']}
        handleClick={handleClick}
      />
    )

  })

  return (
    <div className='image-display'>
      {imageCards.length > 0 && <div className='image-container'>{imageCards}</div> }
    </div>
  )
}

export default Images;

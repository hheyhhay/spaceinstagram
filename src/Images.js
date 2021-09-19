import React from 'react';
import './Images.css';
import Card from './Card';

const Images = ( { images, favorites, handleClick } ) => {

let favoriteCards;

  if (!favorites) {
    favoriteCards = []
  } else {
    favoriteCards = favorites.map(image => {
      return (
        <Card
          key={ image['id']}
          id={image['id']}
          image={image['img_src']}
          name={image.rover['name']}
          cameraName={image.camera['full_name']}
          date={ image['earth_date']}
          favorited={true}
          handleClick={handleClick}
        />
      )
    }
  )
}
  const imageCards = images.map(image => {
    // console.log(image.id, image['img_src'], image.camera['full_name'], image['earth_date'])
    return (
      <Card
        key={ image['id']}
        id={image['id']}
        image={image['img_src']}
        name={image.rover['name']}
        cameraName={image.camera['full_name']}
        date={ image['earth_date']}
        favorited={false}
        handleClick={handleClick}
      />
    )

  })

  return (
    <div className='image-display'>
      {imageCards.length > 0 && <div className='image-container'>
      {favoriteCards}
      { imageCards }
      </div> }
    </div>
  )
}

export default Images;

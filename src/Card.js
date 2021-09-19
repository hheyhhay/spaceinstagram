import React from 'react';
import './Card.css';

// class Card extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         isFavorite: false
//       }
//     }
//   // console.log(props)
//   return ( console.log(props))
// }


const Card = ( {id, image, name, cameraName, date, favorited, handleClick }) => {
return (
  <div className='image-card' key={ id }>
    <img className='space-image'  src={ image } alt={`Landing of ${ name } on Mars`}/>
    <h3 className='camera-name'>{ name } Rover - { cameraName }</h3>
    <h2 className='capture-date'>{ date }</h2>
    <button
      className='like-button'
      onClick={() => handleClick( id ) }
    >Like</button>
  </div>
  )
}
export default Card;

import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loading-container'>
      <h2 className='loading-header'>Please hold...</h2>
      <p className='message-text'>🚀 Getting your images of Mars 🛰 </p>
    </div>
  )
}

export default Loader;

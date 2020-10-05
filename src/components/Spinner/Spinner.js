import React from 'react';
import './spinner.css';

const Spinner = ({ isLoading }) => {
  return (
    <div className='loader-modal' id='loader'>
      <div className='loadersWrapper'>
        <div className='loader'>
          <img
            src='https://cdn3.iconfinder.com/data/icons/glypho-free/64/camera-shutter-512.png'
            className='loader-icon'
          />
        </div>
      </div>
    </div>
  );
};

export default Spinner;

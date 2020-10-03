import React from 'react';

import './photo-thumbnail.css'

export const PhotoThumbnail = ({photo, onPhotoSelected}) => {
  
  return (
    <li className='photo-thumb'
    style={{backgroundImage: `url(${photo.thumbnailUrl})`}}
    onClick={onPhotoSelected}
    
    >
      
    </li>
  )
}


export default PhotoThumbnail;

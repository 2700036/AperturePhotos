import React from "react";
import './album.css';

const Album = ({album: {photos, title, id}, onAlbumSelected}) => {
   
  return (
  <li 
    className="album" 
    style={{backgroundImage: `url(${photos[0].thumbnailUrl})`}}
    onClick={onAlbumSelected}
    >    
  <span className="album__photos">{photos.length} фото</span>   
  <span className="album__title">{title}</span>
    </li>
    
  );
};

export default Album;

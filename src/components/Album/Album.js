import React from "react";
import { Link } from "react-router-dom";
import './album.css';

const Card = ({album}) => {
  console.log(album.photos[0].thumbnailUrl)
  return (
    
    <li className="album" style={{backgroundImage: `url(${album.photos[0].thumbnailUrl})`}}>
    {/* <img className="album__image" src={album.photos[0].thumbnailUrl} alt=""/> */}
  <span className="album__photos">{album.photos.length} фото</span>   
  <span className="album__title">{album.title}</span>   
      

    </li>
    
  );
};

export default Card;

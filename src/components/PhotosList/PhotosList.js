import React from 'react';
import { useHistory, useRouteMatch, withRouter } from 'react-router-dom';
import PhotoThumbnail from '../PhotoThumbnail/PhotoThumbnail';

import './photos-list.css';


const PhotosList = ({data, history, match}) => {   
  const userId = match.params.userId;
  const albumId = match.params.albumId;
  const photos = data.find(({ id }) => id === +userId)
  .albums.find(({ id }) => id === +albumId).photos;
  
  const photosElems = photos.map((photo)=>{       
    return <PhotoThumbnail 
    photo={photo}
    key={photo.id}
    onPhotoSelected={()=>history.push(`${photo.id}`)} 
    
    />
  });    
    return (
     <>
      <main className="content">    
    <section className="photos">
      <ul className="photos__list page__section">        
      {photosElems}             
      </ul>
    </section>
  </main>  
  </>
    );  
}

export default withRouter(PhotosList);
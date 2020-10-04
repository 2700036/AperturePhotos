import React from 'react';
import { Link, useHistory, useRouteMatch, withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import PhotoThumbnail from '../PhotoThumbnail/PhotoThumbnail';

import './photos-list.css';


const PhotosList = ({data, history, match}) => {  
  const {userId, albumId} = match.params;
  const user = data.find(({ id }) => id === +userId);
  const photos = user.albums.find(({ id }) => id === +albumId).photos;
  
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
    <section className="photos page__section">
    <div className="page__section-header">
    <Link to={`/${userId}/`}>
    <Button>&#x276E; Альбомы</Button>
    </Link>
    <span className="page__section-title">{user.name}</span>
    </div>    
      <ul className="photos__list">        
      {photosElems}             
      </ul>
    </section>
  </main>  
  </>
    );  
}

export default withRouter(PhotosList);
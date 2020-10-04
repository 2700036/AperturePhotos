import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import './photo-preview.css';

const PhotoPreview = ({ match, history, data }) => {
  const { userId, albumId, photoId } = match.params;
  const album = data.find(({ id }) => id === +userId)
  .albums.find(({ id }) => id === +albumId).photos;
  const photo = album.find(({ id }) => id === +photoId);

  const currentIndex = album.findIndex(({ id }) => id === +photoId);
  const nextPhoto = album[currentIndex + 1];
  const prevPhoto = album[currentIndex - 1];

  return (
    <>
      {prevPhoto && (
        <Link to={`/${userId}/${albumId}/${prevPhoto.id}`}>
          <Button className='button_left'>&#x276E;</Button>
        </Link>
      )}
      <img className='photo' src={photo.url} alt='' />
      <span className='photo__title'>{photo.title}</span>
      {nextPhoto && (
        <Link to={`/${userId}/${albumId}/${nextPhoto.id}`}>
          <Button className='button_right'>&#x276F;</Button>
        </Link>
      )}
    </>
  );
};

export default withRouter(PhotoPreview);

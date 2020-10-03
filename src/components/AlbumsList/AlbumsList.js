import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Album from '../Album/Album';
import './albums-list.css';


const AlbumsList = ({data}) => {
  const match = useRouteMatch();
  const history = useHistory();

  const userId = match.params.userId;
  const albums = data.find(({ id }) => id === +userId).albums;

  const albumsElems = albums.map((album)=>{       
    return <Album
    key={album.id}     
    album={album}             
    />
  });    
    return (
     <>
      <main className="content">    
    <section className="albums">
      <ul className="albums__list page__section">        
      {albumsElems}             
      </ul>
    </section>
  </main>  
  </>
    );  
}

export default AlbumsList;
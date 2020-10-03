import React from 'react';
import { withRouter } from 'react-router-dom';
import Album from '../Album/Album';
import './albums-list.css';


const AlbumsList = ({data, history, match}) => {


  const userId = match.params.userId;
  const albums = data.find(({ id }) => id === +userId).albums;
  console.log(history)
  const albumsElems = albums.map((album)=>{       
    return <Album
    key={album.id}     
    album={album}
    onAlbumSelected={()=>history.push(`${album.id}/`)}
                 
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

export default withRouter(AlbumsList);
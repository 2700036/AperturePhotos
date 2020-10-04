import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Album from '../Album/Album';
import Button from '../Button/Button';
import './albums-list.css';


const AlbumsList = ({data, history, match}) => {
  

  const userId = match.params.userId;
  const user = data.find(({ id }) => id === +userId);  
  const albumsElems = user.albums.map((album)=>{       
    return <Album
    key={album.id}     
    album={album}
    onAlbumSelected={()=>history.push(`${album.id}/`)}
                 
    />
  });    
    return (
     <>
      <main className="content">    
    <section className="albums page__section">
    <div className="page__section-header">
    <Link to='/'>
    <Button>&#x276E; Авторы</Button>
    </Link>
    <span className="page__section-title">{user.name}</span>
    </div>
      <ul className="albums__list ">        
      {albumsElems}             
      </ul>
    </section>
  </main>  
  </>
    );  
}

export default withRouter(AlbumsList);
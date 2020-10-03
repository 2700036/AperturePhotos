import React from 'react';
import { Link } from 'react-router-dom';
import './users-list.css';


const UsersList = ({data}) => { 
  const usersElems = data.map(({id, name})=>{       
    return (
      <Link to={`${id}/`} key={name+id}>
    <li >
      {name}
    </li>
    </Link>
    )
  });    
    return (
     <>
      <main className="content">    
    <section className="users page__section">
      <ul className="users__list page__section">        
      {usersElems}
      </ul>
    </section>
  </main>  
  </>
    );  
}

export default UsersList;
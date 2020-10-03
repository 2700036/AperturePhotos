import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import AlbumsList from '../AlbumsList/AlbumsList';
import Footer from '../Footer/Footer';

import Popup from '../Popup/Popup';

import { Redirect, Route, Switch } from 'react-router-dom';
import withErrorBoundry from '../hocs/withErrorBoundry';
import './app.css';
import Loader from '../Loader/Loader';
import { JsonPlaceHolderContext } from '../JsonPlaceHolderContext/JsonPlaceHolderContext';
import UsersList from '../UsersList/UsersList';


const App = () => {
  const jsonPlaceHolderApi = useContext(JsonPlaceHolderContext);
  const [data, setData] = useState(null);
  React.useEffect(() => {
    jsonPlaceHolderApi.getData().then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          {
            data && <UsersList users={data} />
            // || <Spinner />
          }
        </Route>        
        <Route path='/:userId'>         
              {data && <AlbumsList data={data} />
              // || <Spinner />
        }          
       </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default withErrorBoundry(App);

import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import AlbumsList from '../AlbumsList/AlbumsList';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import { Redirect, Route, useHistory } from 'react-router-dom';
import withErrorBoundry from '../hocs/withErrorBoundry';
import './app.css';
import Spinner from '../Spinner/Spinner';
import { JsonPlaceHolderContext } from '../JsonPlaceHolderContext/JsonPlaceHolderContext';
import UsersList from '../UsersList/UsersList';
import PhotosList from '../PhotosList/PhotosList';
import PhotoPreview from '../PhotoPreview/PhotoPreview';

const App = () => {
  const jsonPlaceHolderApi = useContext(JsonPlaceHolderContext);
  const [data, setData] = useState(null);
  React.useEffect(() => {
    jsonPlaceHolderApi.getData().then((data) => setData(data));
  }, []);

  const history = useHistory();
  return (
    <>
      <Header />
      <Route exact path='/'>
        {
          data && <UsersList data={data} />
          // || <Spinner />
        }
      </Route>
      <Route exact path='/:userId'>
        {
          data && <AlbumsList data={data} />
          // || <Spinner />
        }
      </Route>
      <Route
        exact
        path='/:userId/:albumId/:photoId'
        render={({ match, history }) => {
          const { userId, albumId } = match.params;
          return (
            data && (
              <Popup name='photo' onClose={() => history.push(`/${userId}/${albumId}/`)}>
                <PhotoPreview data={data} />
              </Popup>
            )
          );
        }}
      />
      <Route path='/:userId/:albumId'>
        {
          data && <PhotosList data={data} />
          // || <Spinner />
        }
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
      <Footer />
    </>
  );
};

export default withErrorBoundry(App);

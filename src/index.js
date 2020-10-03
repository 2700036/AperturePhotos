import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
// import store from './store';
// import { Provider } from 'react-redux';
import jsonPlaceHolderApi from './services/JsonPlaceHolderApi';
import { JsonPlaceHolderContext } from './components/JsonPlaceHolderContext/JsonPlaceHolderContext';

ReactDOM.render(
  // <Provider store={store}>
    <JsonPlaceHolderContext.Provider value={jsonPlaceHolderApi}>
      <Router >
        <App />
      </Router>
    </JsonPlaceHolderContext.Provider>
  // </Provider>
  ,
  document.getElementById('root')
);

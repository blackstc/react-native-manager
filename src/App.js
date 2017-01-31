import React, { Component } from 'react'
import firebase from 'firebase';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD3pq8PcUQiKVOLPAwhUxD25xotkO_qiTk',
      authDomain: 'manager-92a59.firebaseapp.com',
      databaseURL: 'https://manager-92a59.firebaseio.com',
      storageBucket: 'manager-92a59.appspot.com',
      messagingSenderId: '382726902224'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <Router />
      </Provider>
    )
  }
}

export default App;

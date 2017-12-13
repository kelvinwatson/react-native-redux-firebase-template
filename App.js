import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Reducers from './Reducers';

import AddGaymerFormContainer from './containers/AddGaymerFormContainer';

let store;
if (process.env.NODE_ENV === 'production'){
  store = createStore(
    Reducers,
    applyMiddleware(
      thunkMiddleware // lets us dispatch() functions
    )
  );
} else {
  store = createStore(
    Reducers,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      createLogger() // neat middleware that logs actions
    )
  );
}

const App = () => (
  <Provider store={store}>
    <AddGaymerFormContainer/>
  </Provider>
);


export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

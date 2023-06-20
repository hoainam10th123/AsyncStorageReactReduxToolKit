/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import { increment } from './redux/Slices/counterSlice';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import Home from './components/Home';
import { PersistGate } from 'redux-persist/integration/react';


function App(): JSX.Element {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Home />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

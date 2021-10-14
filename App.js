import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Page from './Page.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  durum: 'ilk değer'
};

const reducer = (state = initialState, action) => {

  if (action.type = 'setDurum') {
    return Object.assign({}, state, { durum: 'Updated Value ' + action.payload });
  }

  return state;
}

const store = createStore(reducer);

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Page />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

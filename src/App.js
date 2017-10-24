/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AlertIOS } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import BudgetDisplay from './components/BudgetDisplay';

import reducers from './reducers';


export default class App extends Component {



  render() {
    return (
      <Provider store={createStore(reducers)}>
        <BudgetDisplay/>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  budgetButton: {
    borderWidth: 1,
    padding: 5,
    borderColor: 'lightblue'
  },
  budgetButtonText: {
    color: '#66CCCC'
  }
};

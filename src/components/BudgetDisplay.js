import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

import * as actions from '../actions';

import reducers from '../reducers';


class BudgetDisplay extends Component {

  onBudgetChange() {
    console.log('hi');
  }

  promptForBudget() {
    AlertIOS.prompt(
      'Enter your budget for the Month',
      null,
      (text) => {
        this.onBudgetChange(); 
      }
      //this.props.enterBudget(parseFloat(text))
    );

  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.promptForBudget} style={styles.budgetButton}>
          <Text style={styles.budgetButtonText}>
            Please enter your budget for the month
          </Text>
        </TouchableOpacity>

        <Text style={styles.budget}>
          Here is your budget: {this.props.budget}
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  budgetButton: {
    borderWidth: 1,
    padding: 5,
    borderColor: 'lightblue'
  },
  budgetButtonText: {
    color: '#66CCCC'
  },
  budget: {
    paddingTop: 10
  }
};

const mapStateToProps = (state) => {
  const { budget } = state.userBudget;
  return { budget };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetDisplay);

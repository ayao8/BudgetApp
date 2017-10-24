import { combineReducers } from 'redux';
import UserBudgetReducer from './UserBudgetReducer';

export default combineReducers({
    userBudget: UserBudgetReducer

})

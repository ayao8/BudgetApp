import { ENTER_BUDGET } from '../actions/types';


const INITIAL_STATE = {
  budget: 0
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case ENTER_BUDGET:
      return { ...state, budget: action.payload};
    default:
      return state;
  }

};

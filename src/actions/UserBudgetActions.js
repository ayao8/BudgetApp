import { ENTER_BUDGET } from './types';


export const enterBudget = (amount) => {
  console.log(amount);
  return {
    type: ENTER_BUDGET,
    payload: amount
  };

};

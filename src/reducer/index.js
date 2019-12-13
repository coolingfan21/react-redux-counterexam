import { INCREMENT, DECREMENT, SET_DIFF } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + action.diff
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - action.diff
      });
    case SET_DIFF:
      return Object.assign({}, state, {
        value: state.value + action.diff
      });
    default:
      return state;
  }
};

export default reducer;

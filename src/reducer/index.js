import { INCREMENT, DECREMENT, SET_DIFF } from "../actions";

const initialState = {
  value: 0,
  diff: 0
};
const reducer = (state = initialState, action) => {
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
        diff: action.diff
      });
    default:
      return state;
  }
};

export default reducer;

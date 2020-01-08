import { INCREMENT, DECREMENT, RESET, STEP, MAX } from "../types";

const initial_state = {
  number: 0,
  step: 1,
  max: 1000
};

export default function reducer(state = initial_state, action) {
  console.log(state, action);

  switch (action.type) {
    case INCREMENT:
      if (state.number < state.max) {
        return { ...state, number: state.number + state.step };
      } else {
        alert(`can't exceed more than ${state.max}`);
        return state;
      }

    case DECREMENT:
      if (state.number > 0) {
        return { ...state, number: state.number - state.step };
      } else {
        alert("why u go below 0");
        return state;
      }
    case RESET:
      return {
        ...state,
        number: 0
      };
    case STEP:
      return { ...state, step: action.payload };
    case MAX:
      return { ...state, max: action.payload };
    default:
      return state;
  }
}

import { ADD_MOVIE } from "../actions";

const initialState = {
  user: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_MOVIE:
      return { ...state, user: actions.payload };
    default:
      return state;
  }
};
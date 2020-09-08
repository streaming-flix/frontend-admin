import { EDIT_MOVIE, FIND_UPDATE } from "../actions";

const initialState = {
  user: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case EDIT_MOVIE:
      return { ...state, user: actions.payload };
      case FIND_UPDATE:
        return { ...state, user: actions.payload };
      default:
      return state;
  }
};
import { GET_ALL_MOVIES } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_MOVIES:
            return actions.data;

        default:
            return state;
    }
};

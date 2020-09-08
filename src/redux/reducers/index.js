import {
    combineReducers
} from "redux";

import LoginAdmin from "./LoginAdmin";
import GetAllMovies from "./GetAllMovies";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";

export default combineReducers({
    LoginAdmin,
    GetAllMovies,
    AddMovie,
    EditMovie,
});
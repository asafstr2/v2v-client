import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import bubbles from "./bubbles";
import errors from "./error";
import currentUser from './currentUser'

export default combineReducers({ bubbles, visibilityFilter, errors,currentUser});

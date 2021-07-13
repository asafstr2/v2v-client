import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import bubbles from "./bubbles";

export default combineReducers({ bubbles, visibilityFilter });

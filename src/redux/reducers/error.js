import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

//basic generic error handler
const initialState = { messege: null, severity: "error" };
const error = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        ...state,
        messege: action.errors,
        severity: action.severity || "error",
      };
    case REMOVE_ERROR:
      return { ...state, messege: null };
    default:
      return state;
  }
};
export default error;

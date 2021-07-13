import {
  SET_CURRENT_USER,
  SET_STATS,
  SET_UPCOMING,
  PASSWORD_NEEDED,
} from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false, //will be true when user logged in
  user: {}, //all the user info when logged in
  invitedBy: "",
  passwordHighlight: false, // the user that invited the current user to join, can be empty.
};

// we will run this function for login and logout with user as login and empty obj when logout
const currentUser = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      //check to see if no users logged in by making sure user obj is empty
      return {
        ...state,
        isAuthenticated: !!Object.keys(action.user).length,
        user: { ...state.user, ...action.user }, // if editing user, all values should be saved
      };
    case SET_STATS:
      return {
        ...state,
        user: { ...state.user, stats: action.stats },
      };
    case SET_UPCOMING:
      return {
        ...state,
        user: { ...state.user, upcoming: [...action.upcoming] },
      };
    case PASSWORD_NEEDED:
      return {
        ...state,
        passwordHighlight: action.payload,
      };

    default:
      return state;
  }
};

export default currentUser;

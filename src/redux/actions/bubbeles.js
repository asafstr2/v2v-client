import { apiCall } from "../../services/api";
import {
  LOAD_BUBBELES,
  ADD_BUBBLE,
  EDIT_BUBBELE,
  GET_BY_ID,
} from "../actionTypes";
import { addError } from "./error";

//this is all the function for bubbele manipulation
//this is how a bubble obj looks like
// { public_id: [],
//     tags: [ 'react', 'js' ],
//     reports: [],
//     usersAttending: 
//      [ { _id: '60ed7bbcaf934a3db072d414',
//          username: 'Zell',
//          email: 'testing@gmail.com' } ],
//     mentor:{ _id: '60ed7bbcaf934a3db072d414',
//          username: 'Zell',
//          email: 'testing@gmail.com' },
//     hidePost: false,
//     likedBy: [],
//     _id: '60ed7bbcaf934a3db072d419',
//     category: 'tech',
//     title: 'looking to learn react',
//     desc: 'some desc',
//     createdAt: '2021-07-13T11:40:44.460Z',
//     updatedAt: '2021-07-13T11:40:44.460Z',
//     __v: 0 }

export const loadbubbeles = (bubbeles) => ({ type: LOAD_BUBBELES, payload: bubbeles });
export const add = (newBubbele) => ({ type: ADD_BUBBLE, payload: newBubbele });
export const bubbeleById = (bubbele) => ({ type: GET_BY_ID, payload: bubbele });
export const edit = (id, res) => ({
  type: EDIT_BUBBELE,
  id,
  payload: res,
});

export const postNewbubbeles = (obj) => async (dispatch, getState) => {
  let { currentUser } = getState();
  if (typeof obj !== "object") {
    dispatch(addError("must be an object and is " + typeof obj));
    return;
  }

  const { id } = currentUser.user;
  if (id) {
      dispatch(add(obj));
      return apiCall("post", `/api/users/${id}/bubbele`, obj)
          .then((res) => dispatch(add(res)))
          .catch((err) => {
              console.log("this is where we are failing:", err);
              dispatch(addError(err?.message));
          });
  }
  else return;
};

// Get ALL Bubbles
export function fetchbubbeles() {
  return (dispatch) => {
    return apiCall("get", `/api/bubbeles`)
      .then((res) => dispatch(loadbubbeles(res)))
      .catch((err) => dispatch(addError(err?.message)));
  };
}

export const getAllbubbelesPerUser = () => async (dispatch, getState) => {
  let { currentUser } = getState();
  const { id } = currentUser.user;
  if (id) {
    return apiCall(
      "get",
      `/api/users/${id}/messeges/${11}/getAllbubbelesPerUser`
    )
      .then((res) => {
        dispatch(loadbubbeles(res));
      })
      .catch((err) => {
        console.log("this is where we are failing:", err);
        dispatch(addError(err?.message));
      });
  } else return;
};

export const editBubbele =
  (bubbeleId, bubbleObject) => (dispatch, getState) => {
    let { currentUser } = getState();
    const { id } = currentUser.user;
    if (id)
      return apiCall(
        "put",
        `/api/users/${id}/messeges/${bubbeleId}`,
        bubbleObject
      )
        .then((res) => {
          dispatch(edit(bubbeleId, res));
        })
        .catch((err) => dispatch(addError(err.message)));
    else return;
  };

export const addUserToBubbele =
  (bubbeleId, bubbleObject) => (dispatch, getState) => {
    let { currentUser } = getState();
    const { id } = currentUser.user;
    if (id)
      return apiCall(
        "put",
        `/api/users/${id}/messeges/${bubbeleId}/addUserToBubbele`,
        bubbleObject
      )
        .then((res) => {
          dispatch(edit(bubbeleId, res));
        })
        .catch((err) => dispatch(addError(err.message)));
    else return;
  };

export const addMentorToBubbele =
  (bubbeleId, bubbleObject) => (dispatch, getState) => {
    let { currentUser } = getState();
    const { id } = currentUser.user;
    if (id)
      return apiCall(
        "put",
        `/api/users/${id}/messeges/${bubbeleId}/addMentorToBubbele`,
        bubbleObject
      )
        .then((res) => {
          dispatch(edit(bubbeleId, res));
        })
        .catch((err) => dispatch(addError(err.message)));
    else return;
  };

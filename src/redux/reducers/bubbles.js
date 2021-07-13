import { ADD_BUBBLE } from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {},
    all: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_BUBBLE: {
            if (action.payload._id) {
                let newState = [...state.all];
                newState.pop();
                return {
                    ...state,
                    newState
                };
            }
            return {
                ...state,
                all: [...state.all, action.payload]
            };
        }
        default:
            return state;
    }
}

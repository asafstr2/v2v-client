import { ADD_BUBBLE } from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {},
    all: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_BUBBLE: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                },
                all: state.all.concat({content, completed: false, id})
            };
        }
        default:
            return state;
    }
}

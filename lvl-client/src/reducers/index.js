import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
    isLoading: false,
    friends: [],
    error: null
};



export const lvlReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isLoading: false,
                error: "",
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
            
        default:
            return state
    }
}
export default lvlReducer;
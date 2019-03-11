import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
    isLoggingIn: false,
    friends: [],
    error: null,

};



export const lvlReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                error: "",
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isLoggingIn: false,
                error: "",
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoggingIn: false,
            };
            
        default:
            return state
    }
}
export default lvlReducer;
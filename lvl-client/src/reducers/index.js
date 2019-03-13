import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  //   ADD_DESCRIPTION_SUCCESS,
  //   ADD_ENJOYMENT,
  //   ADD_RESULTS,
  GET_ACTIVITY_START,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_FAILURE
} from "../actions";

const initialState = {
  isLoggingIn: false,
  activities: [],
  error: null,
  isRegistering: false,
  addingActivity: false
};

const lvlReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        activities: action.payload,
        isLoggingIn: false,
        error: ""
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false
      };
    case REGISTER_START:
      return {
        ...state,
        error: "",
        isRegistering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        error: ""
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isRegistering: false
      };

    case GET_ACTIVITY_START:
      return {
        ...state,
        error: null,
        addingActivity: true
      };
    case GET_ACTIVITY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        activities: action.payload,
        addingActivity: false
      };
    case GET_ACTIVITY_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingActivity: false
      };
    // case ADD_RESULTS:
    //   return {
    //     ...state,
    //     activities: action.payload,
    //     addResults: true
    //   };
    default:
      return state;
  }
};
export default lvlReducer;

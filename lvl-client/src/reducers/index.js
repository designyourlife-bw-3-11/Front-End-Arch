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
  GET_ACTIVITY_FAILURE,
  ADD_ACTIVITYLOG_START,
  ADD_ACTIVITYLOG_SUCCESS,
  ADD_ACTIVITYLOG_FAILURE
} from "../actions";

const initialState = {
  isLoggingIn: false,
  activities: [],
  error: null,
  isRegistering: false,
  gettingActivity: false,
  addingActivities: false,
  hasLatestActivities: false
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
        gettingActivity: true
      };
    case GET_ACTIVITY_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        activities: action.payload,
        gettingActivity: false,
        hasLatestActivities: true
      };
    case GET_ACTIVITY_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingActivity: false
      };
    case ADD_ACTIVITYLOG_START:
      return {
        ...state,
        addingActivities: true,
        error: null
      };
    case ADD_ACTIVITYLOG_SUCCESS:
      return {
        ...state,
        addingActivities: false,
        activities: action.payload,
        hasLatestActivities: false,
        error: null
      };
    case ADD_ACTIVITYLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingActivities: false
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

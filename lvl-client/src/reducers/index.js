import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_ACTIVITY_START,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_FAILURE,
  ADD_ACTIVITYLOG_START,
  ADD_ACTIVITYLOG_SUCCESS,
  ADD_ACTIVITYLOG_FAILURE,
  GET_REFLECTION_START,
  GET_REFLECTION_SUCCESS,
  GET_REFLECTION_FAILURE,
  ADD_REFLECTIONLOG_START,
  ADD_REFLECTIONLOG_SUCCESS,
  ADD_REFLECTIONLOG_FAILURE
} from "../actions";

const initialState = {
  isLoggingIn: false,
  activities: [],
  reflections: [],
  error: null,
  isRegistering: false,
  gettingActivity: false,
  addingActivities: false,
  hasLatestActivities: false,
  gettingReflection: false,
  addingReflections: false,
  hasLatestReflections: false
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
    case GET_REFLECTION_START:
      return {
        ...state,
        error: null,
        gettingReflection: true
      };
    case GET_REFLECTION_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        reflections: action.payload,
        gettingReflection: false,
        hasLatestReflections: true
      };
    case GET_REFLECTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingReflection: false
      };
    case ADD_REFLECTIONLOG_START:
      return {
        ...state,
        addingReflections: true,
        error: null
      };
    case ADD_REFLECTIONLOG_SUCCESS:
      return {
        ...state,
        addingReflections: false,
        reflections: action.payload,
        hasLatestReflections: false,
        error: null
      };
    case ADD_REFLECTIONLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingActivities: false
      };
    default:
      return state;
  }
};
export default lvlReducer;

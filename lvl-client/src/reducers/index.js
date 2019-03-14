//----- Import Actions----//

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
  GET_ACTIVITYLOG_START,
  GET_ACTIVITYLOG_SUCCESS,
  GET_ACTIVITYLOG_FAILURE,
  DELETE_ACTIVITYLOG_REQUEST,
  DELETE_ACTIVITYLOG_SUCCESS,
  DELETE_ACTIVITYLOG_FAILURE,
  ADD_ACTIVITYLOG_START,
  ADD_ACTIVITYLOG_SUCCESS,
  ADD_ACTIVITYLOG_FAILURE,
  GET_REFLECTIONLOG_START,
  GET_REFLECTIONLOG_SUCCESS,
  GET_REFLECTIONLOG_FAILURE,
  ADD_REFLECTIONLOG_START,
  ADD_REFLECTIONLOG_SUCCESS,
  ADD_REFLECTIONLOG_FAILURE
} from "../actions";

//----- Initial State -----//
const initialState = {
  isLoggingIn: false,

  activities: [],

  reflections: [],

  activitiesLog: [],

  error: null,

  isRegistering: false,

  gettingActivity: false,

  addingActivities: false,

  deletingActivities: false,

  hasLatestActivities: false,

  gettingReflection: false,

  addingReflections: false,

  hasLatestReflections: false
};

//----- Reducer -----//
const lvlReducer = (state = initialState, action) => {
  switch (action.type) {
    //----- Fetch -----//
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

    //----- Register -----//
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

    //----- Get Activity -----//
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

    //----- Get Activity Log -----//
    case GET_ACTIVITYLOG_START:
      return {
        ...state,
        error: null,
        gettingActivity: true
      };
    case GET_ACTIVITYLOG_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        activitiesLog: action.payload,
        gettingActivity: false,
        hasLatestActivities: true
      };
    case GET_ACTIVITYLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingActivity: false
      };

    //----- Delete Activity -----//
    case DELETE_ACTIVITYLOG_REQUEST:
      return {
        ...state,
        deletingActivities: true,
        error: null
      };
    case DELETE_ACTIVITYLOG_SUCCESS:
      return {
        ...state,
        deletingActivities: false,
        activities: state.activities.filter(
          activityLog => activityLog !== action.payload
        )
      };
    case DELETE_ACTIVITYLOG_FAILURE:
      return {
        ...state,
        deletingActivities: false,
        error: action.payload
      };

    //----- Add Activity Log -----//
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
        activitiesLog: [...state.activitiesLog, action.payload],
        hasLatestActivities: false,
        error: null
      };
    case ADD_ACTIVITYLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingActivities: false
      };

    //----- Get Reflection -----//
    case GET_REFLECTIONLOG_START:
      return {
        ...state,
        error: null,
        gettingReflection: true
      };
    case GET_REFLECTIONLOG_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        reflections: action.payload,
        gettingReflection: false,
        hasLatestReflections: true
      };
    case GET_REFLECTIONLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingReflection: false
      };

    //----- Add Reflection Log -----//
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

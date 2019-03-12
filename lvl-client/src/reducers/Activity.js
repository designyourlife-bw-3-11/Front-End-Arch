// import {
//   ADD_ACTIVITY_SUCCESS, ADD_ACTIVITY_REQUEST, ADD_ACTIVITY_FAILURE,
//    ADD_DESCRIPTION,
//   ADD_ENJOYMENT,
//   ADD_RESULTS
// } from "../actions";

// const activityState = {
//   error: null,
//   addActivity: false,
//   addDescription: false,
//   addEnjoyment: false,
//   addResults: false
// };

// const activityReducer = (state = activityState, action) => {
//   switch (action.type) {
//     case ADD_ACTIVITY:
//       return {
//         ...state,
//         error: null,
//         activities: action.payload,
//         addActivity: true
//       };
//     case ADD_DESCRIPTION:
//       return {
//         ...state,
//         activities: action.payload,
//         addDescription: true
//       };
//     case ADD_ENJOYMENT:
//       return {
//         ...state,
//         activities: action.payload,
//         error: null,
//         addEnjoyment: true
//       };
//     case ADD_RESULTS:
//       return {
//         ...state,
//         activities: action.payload,
//         addResults: true
//       };
//     default:
//       return state;
//   }
// };

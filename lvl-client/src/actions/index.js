import axios from "axios";

//----Login----//
export const LOGIN_START = "LOGIN_START";

//----Fetch----//
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

//----Register----//
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

//----Activity----//
export const GET_ACTIVITY_START = "GET_ACTIVITY_START";
export const GET_ACTIVITY_SUCCESS = "GET_ACTIVITY_SUCCESS";
export const GET_ACTIVITY_FAILURE = "GET_ACTIVITY_FAILURE";

//-----ActivityLog -----//
export const GET_ACTIVITYLOG_START = "GET_ACTIVITYLOG_START";
export const GET_ACTIVITYLOG_SUCCESS = "GET_ACTIVITYLOG_SUCCESS";
export const GET_ACTIVITYLOG_FAILURE = "GET_ACTIVITYLOG_FAILURE";

//----- Activity-----//
// export const ADD_ACTIVITY_START = "ADD_ACTIVITY_START";
// export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
// export const ADD_ACTIVITY_FAILURE = "ADD_ACTIVITY_FAILURE";

//-----Activity Log-----//
export const ADD_ACTIVITYLOG_START = "ADD_ACTIVITYLOG_START";
export const ADD_ACTIVITYLOG_SUCCESS = "ADD_ACTIVITYLOG_SUCCESS";
export const ADD_ACTIVITYLOG_FAILURE = "ADD_ACTIVITYLOG_FAILURE";

//----- Delete Activity-----//
export const DELETE_ACTIVITYLOG_REQUEST = "DELETE_ACTIVITY_REQUEST";
export const DELETE_ACTIVITYLOG_SUCCESS = "DELETE_ACTIVITY_SUCCESS";
export const DELETE_ACTIVITYLOG_FAILURE = "DELETE_ACTIVITY_FAILURE";

//---- Get ReflectionLog -----//
export const GET_REFLECTIONLOG_START = "GET_REFLECTION_START";
export const GET_REFLECTIONLOG_SUCCESS = "GET_REFLECTION_SUCCESS";
export const GET_REFLECTIONLOG_FAILURE = "GET_REFLECTION_FAILURE";

//----- Reflection-----//
export const ADD_REFLECTION_START = "ADD_REFLECTION_START";
export const ADD_REFLECTION_SUCCESS = "ADD_REFLECTION_SUCCESS";
export const ADD_REFLECTION_FAILURE = "ADD_REFLECTION_FAILURE";

//-----Reflection Log-----//
export const ADD_REFLECTIONLOG_START = "ADD_REFLECTIONLOG_START";
export const ADD_REFLECTIONLOG_SUCCESS = "ADD_REFLECTIONLOG_SUCCESS";
export const ADD_REFLECTIONLOG_FAILURE = "ADD_REFLECTIONLOG_FAILURE";

//----- Login Action -----//

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://bw-designyourlife-api.herokuapp.com/api/auth/login", creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("username", creds.username);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.payload });
      getData();
    })
    .catch(err => {
      console.log(err);
    });
};

//----- Get Data Action -----//

export const getData = () => {
  axios
    .get("https://bw-designyourlife-api.herokuapp.com/testDb", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

//----- Register User Action -----//

export const registerUser = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post(
      "https://bw-designyourlife-api.herokuapp.com/api/auth/register",
      creds
    )
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.payload });
      getData();
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

//----- Get Activity Action -----//

export const getActivities = (user, id) => dispatch => {
  dispatch({ type: GET_ACTIVITY_START });
  axios
    .get(
      `https://bw-designyourlife-api.herokuapp.com/api/activities/${user}/${id}`
    )
    .then(res => {
      dispatch({
        type: GET_ACTIVITY_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ACTIVITY_FAILURE,
        payload: err.response
      });
    });
};

//----- Get Activity Log-----//

export const getActivityLog = user => dispatch => {
  dispatch({ type: GET_ACTIVITYLOG_START });
  axios
    .get(
      `https://bw-designyourlife-api.herokuapp.com/api/activity-logs/${user}`
    )
    .then(res => {
      dispatch({
        type: GET_ACTIVITYLOG_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ACTIVITYLOG_FAILURE,
        payload: err.response
      });
    });
};

//----- Add Activity Log-----//

export const addActivityLog = newActivity => dispatch => {
  dispatch({ type: ADD_ACTIVITYLOG_START });
  console.log(newActivity);
  const user = localStorage.getItem("username");
  axios
    .post(
      `https://bw-designyourlife-api.herokuapp.com/api/activity-logs/${user}`,
      newActivity
    )
    .then(res => {
      console.log("addActivityLog", res.data);
      dispatch({
        type: ADD_ACTIVITYLOG_SUCCESS,
        payload: newActivity
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_ACTIVITYLOG_FAILURE,
        error: err.response
      });
    });
};

//----- Delete Activity Action -----//

export const deleteActivityLog = id => dispatch => {
  dispatch({ type: DELETE_ACTIVITYLOG_REQUEST });
  axios
    .delete(
      `https://bw-designyourlife-api.herokuapp.com/api/activity-logs/user/${id}`
    )
    .then(res => {
      dispatch({
        type: DELETE_ACTIVITYLOG_SUCCESS,
        payload: res.data
      }).catch(err => {
        dispatch({
          type: DELETE_ACTIVITYLOG_FAILURE,
          payload: err.response
        });
      });
    });
};

//----- Get Reflections Action ----//

export const getReflectionLog = id => dispatch => {
  dispatch({ type: GET_REFLECTIONLOG_START });
  axios
    .get(
      `https://bw-designyourlife-api.herokuapp.com/api/reflection-logs/user/${id}`
    )
    .then(res => {
      dispatch({
        type: GET_REFLECTIONLOG_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_REFLECTIONLOG_FAILURE,
        payload: err.response
      });
    });
};

//----- Add Reflections Action -----//

export const addReflectionLog = newReflection => dispatch => {
  dispatch({ type: ADD_REFLECTIONLOG_START });
  axios
    .post(
      "https://bw-designyourlife-api.herokuapp.com/api/reflection-logs/user",
      newReflection
    )
    .then(res => {
      dispatch({
        type: ADD_REFLECTIONLOG_SUCCESS,
        payload: newReflection
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_REFLECTIONLOG_FAILURE,
        error: err.response
      });
    });
};

//----------------------- Use For Later---------------//

//----- Add Activity Action-----//

// export const addActivity = newActivity => dispatch => {
//   dispatch({ type: ADD_ACTIVITY_START });
//   axios
//     .post(
//       "https://bw-designyourlife-api.herokuapp.com/api/activity-logs/user/id"
//     )
//     .then(res => {
//       dispatch({
//         type: ADD_ACTIVITY_SUCCESS,
//         payload: newActivity
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: ADD_ACTIVITY_FAILURE,
//         error: err.response
//       });
//     });
// };

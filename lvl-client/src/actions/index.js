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

//----- Activity-----//
export const ADD_ACTIVITY_START = "ADD_ACTIVITY_START";
export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
export const ADD_ACTIVITY_FAILURE = "ADD_ACTIVITY_FAILURE";

//-----Activity Log-----//
export const ADD_ACTIVITYLOG_START = "ADD_ACTIVITYLOG_START";
export const ADD_ACTIVITYLOG_SUCCESS = "ADD_ACTIVITYLOG_SUCCESS";
export const ADD_ACTIVITYLOG_FAILURE = "ADD_ACTIVITYLOG_FAILURE";

//---- Get Reflections -----//
export const GET_REFLECTION_START = "GET_REFLECTION_START";
export const GET_REFLECTION_SUCCESS = "GET_REFLECTION_SUCCESS";
export const GET_REFLECTION_FAILURE = "GET_REFLECTION_FAILURE";
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

export const getActivities = () => dispatch => {
  dispatch({ type: GET_ACTIVITY_START });
  axios
    .get("https://bw-designyourlife-api.herokuapp.com/api/activities/username")
    .then(res => {
      dispatch({
        type: GET_ACTIVITY_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ACTIVITY_FAILURE,
        payload: err.response
      });
    });
};

//----- Add Activity Action-----//

export const addActivity = newActivity => dispatch => {
  dispatch({ type: ADD_ACTIVITY_START });
  axios
    .put(
      "https://bw-designyourlife-api.herokuapp.com/api/activity-logs/user/id"
    )
    .then(res => {
      dispatch({
        type: ADD_ACTIVITY_SUCCESS,
        payload: newActivity
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_ACTIVITY_FAILURE,
        error: err.response
      });
    });
};

//----- Add Activity Log-----//

export const addActivityLog = newActivity => dispatch => {
  dispatch({ type: ADD_ACTIVITYLOG_START });
  console.log(newActivity);
  // axios
  //   .get(
  //     "https://bw-designyourlife-api.herokuapp.com/api/activity-logs/testUser"
  //   )
  //   .then(res => {
  //     dispatch({
  //       type: ADD_ACTIVITYLOG_SUCCESS,
  //       payload: newActivity
  //     });
  //   })
  //   .catch(err => {
  //     dispatch({
  //       type: ADD_ACTIVITYLOG_FAILURE,
  //       error: err.response
  //     });
  //   });
};

//----- Get Reflections Action ----//

export const getReflections = () => dispatch => {
  dispatch({ type: GET_REFLECTION_START });
  axios
    .get(
      "https://bw-designyourlife-api.herokuapp.com/api/reflection-logs/user/id"
    )
    .then(res => {
      dispatch({
        type: GET_REFLECTION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_REFLECTION_FAILURE,
        payload: err.response
      });
    });
};

//----- Add Reflections Action -----//

export const addReflection = newReflection => dispatch => {
  dispatch({ type: ADD_REFLECTION_START });
  axios
    .put(
      "https://bw-designyourlife-api.herokuapp.com/api/reflection-logs/user/id"
    )
    .then(res => {
      dispatch({
        type: ADD_REFLECTION_SUCCESS,
        payload: newReflection
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_REFLECTION_FAILURE,
        error: err.response
      });
    });
};

//----- Add Reflection Log Action -----//
export const addReflectionLog = newReflection => dispatch => {
  dispatch({ type: ADD_REFLECTIONLOG_START });
  console.log(newReflection);
};

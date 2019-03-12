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
export const ADD_ACTIVITY_START = "ADD_ACTIVITY_START";
export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
export const ADD_ACTIVITY_FAILURE = "ADD_ACTIVITY_FAILURE";

//----Description----//
export const ADD_DESCRIPTION_REQUEST = "ADD_DESCRIPTION_REQUEST";
export const ADD_DESCRIPTION_SUCCESS = "ADD_DESCRIPTION_SUCCESS";
export const ADD_DESCRIPTION_FAILURE = "ADD_DESCRIPTION_FAILURE";

//----Enjoyment----//
export const ADD_ENJOYMENT_REQUEST = "ADD_ENJOYMENT_REQUEST";
export const ADD_ENJOYMENT_SUCCESS = "ADD_ENJOYMENT_SUCCESS";
export const ADD_ENJOYMENT_FAILURE = "ADD_ENJOYMENT_FAILURE";

//----Results----//
export const ADD_RESULTS_REQUEST = "ADD_RESULTS_REQUEST";
export const ADD_RESULTS_SUCCESS = "ADD_RESULTS_SUCCESS";
export const ADD_RESULTS_FAILURE = "ADD_RESULTS_Failure";

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

export const getActivities = () => dispatch => {
  dispatch({ type: ADD_ACTIVITY_START });
  axios
    .get("https://bw-designyourlife-api.herokuapp.com/api/activities/username")
    .then(res => {
      dispatch({
        type: ADD_ACTIVITY_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_ACTIVITY_FAILURE,
        payload: err.response
      });
    });
};

export const addActivity = newActivity => {
  return {
    type: ADD_ACTIVITY_START,
    payload: newActivity
  };
};

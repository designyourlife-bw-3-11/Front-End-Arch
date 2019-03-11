import axios from 'axios';

export const LOGIN_START = "LOGIN_START";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START});
    return axios.post('https://bw-designyourlife-api.herokuapp.com/api/auth/login', creds) 
        .then(res => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token);
            dispatch({ type:"LOGIN_SUCCESS", payload: res.data.payload});
            getData();

    })
    .catch(err => {
        console.log(err);
    });

};

export const getData = () => {
    axios
        .get('https://bw-designyourlife-api.herokuapp.com/testDb', {
            headers: { Authorization: localStorage.getItem("token") }
        })
        .then (res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}
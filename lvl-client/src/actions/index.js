import axios from 'axios';

export const LOGIN_START = "LOGIN_START";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START});
    return axios.post('', creds).then(res => {
        localStorage.setItem("token", res.data.payload);
        dispatch({ type:"LOGIN_SUCCESS", payload: res.data.payload});
        getData();

    });
};

export const getData = () => {
    axios
        .get('', {
            headers: { Authorization: localStorage.getItem("token") }
        })
        .then (res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}
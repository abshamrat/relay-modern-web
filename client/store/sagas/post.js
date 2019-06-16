import { put, call } from "redux-saga/effects";
import axios from 'axios';

import {
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAIL
} from '../actions/actionTypes';

const apiUrl = "localhost:3001";

 // https://github.com/jonathanpuc/nba-mania/blob/master/src/store/sagas/player.js
function fetchPostData(postId) {
    let url = apiUrl + "/post/"+postId;
    return axios.get(
        url,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
              },
              proxy: {
                host: '104.236.174.88',
                port: 3128
              }
              }).then(function (response) {
                  console.log('response is : ' + response.data);
              }).catch(function (error) {
                  if (error.response) {
                    console.log(error.response.headers);
                  } 
                  else if (error.request) {
                    console.log(error.request);
                  } 
                  else {
                    console.log(error.message);
                  }
              console.log(error.config);
        }
    )
}

export function* retrivePost(action) {
    const { id } = action.payload;
    try {
        const response = yield call(fetchPostData, id);
        const post = {
            ...response.data
        }
        yield put({type: FETCH_POST_SUCCESS, payload: post}); 
    } catch (error) {
        yield put({type: FETCH_POST_FAIL, payload: error});
    }
}
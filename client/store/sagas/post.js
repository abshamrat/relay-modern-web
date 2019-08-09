import { put, call } from "redux-saga/effects";
import axios from 'axios';

import {
    FETCH_POST_SUCCESS,
    FETCH_POST_FAIL
} from '../actions/actionTypes';

const apiUrl = "http://localhost:3001";


function fetchPostData(postId) {
    let url = apiUrl + "/post/"+postId;

    return axios.get(
        url,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
    )
}

export function* retrivePost(action) {
    console.log(action);
    const { id } = action.payload;

    try {
        const response = yield call(fetchPostData, id);
        console.log(response);
        const post = {
            ...response.data
        }
        yield put({type: FETCH_POST_SUCCESS, payload: post}); 
    } catch (error) {
        yield put({type: FETCH_POST_FAIL, payload: error});
    }
}
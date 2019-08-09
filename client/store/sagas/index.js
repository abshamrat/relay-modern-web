import {all, takeLatest} from 'redux-saga/effects';
import {FETCH_POST} from '../actions/actionTypes';
import {retrivePost} from './post';

export default function* rootSaga() {
    yield all([
        takeLatest(FETCH_POST, retrivePost),
    ])
}


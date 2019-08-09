import {
    FETCH_POST,
    FETCH_POST_FAIL,
    FETCH_POST_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
    post: {},
    _loading: false,
    error: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                _loading: true
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                post: { ...action.payload},
                _loading: false
            };
        case FETCH_POST_FAIL:
            return {
                ...state,
                error: action.payload,
                _loading: false
            };
        default:
            return state;
    }
}
import { FETCH_POST } from './actionTypes';

export function getPost(id) {
    return {
        type: FETCH_POST,
        payload: {id}
    }
}
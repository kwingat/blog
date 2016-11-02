import axios from 'axios';

import {ActionTypes} from './actionTypes';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=kdub123123';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: ActionTypes.FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: ActionTypes.CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: ActionTypes.FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: ActionTypes.DELETE_POST,
    payload: request
  };
}

import React from 'react';
import {ActionTypes} from '../actions/actionTypes';

const INITIAL_STATE = { all:[], post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return Object.assign({}, state, {all: action.payload.data});
      //return {...state, all: action.payload.data };
    case ActionTypes.FETCH_POST:
      return Object.assign({}, state, {post: action.payload.data});
    default:
      return state;
  }
}

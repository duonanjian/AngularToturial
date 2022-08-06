import { Action, createReducer, on } from '@ngrx/store';
import { ActionTypes } from './action';

export const initialState = 0;


export function conterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 10;
    case ActionTypes.Decrement:
      return state - 1;
    case ActionTypes.Reset:
      return 0;
    default:
      return state;
  }
}

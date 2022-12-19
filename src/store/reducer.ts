import { Action, createReducer, on } from '@ngrx/store';
import { count } from 'console';
import * as ActionTypes from './action';
import { StoreType } from './store';
// 定义该数据在Store中的键名
export const StoreKey = 'store'
export const initialState: StoreType = { count: 80 };

export const reducer = createReducer(
  initialState,

  on(ActionTypes.Increment, state => {...state,count + 10}),
  on(ActionTypes.Decrement, (state, action) => state),
  on(ActionTypes.Reset, (state, action) => state),

);



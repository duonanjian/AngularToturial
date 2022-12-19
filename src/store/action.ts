import { createAction } from '@ngrx/store';

// 定义行为类别
export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
}
export const Increment = createAction(ActionTypes.Increment);
export const Decrement = createAction(ActionTypes.Decrement);
export const Reset = createAction(ActionTypes.Reset);




import { Action, createAction, props } from '@ngrx/store';

// 定义行为类别
export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
}
export const Increment = createAction(ActionTypes.Increment);
export const Decrement = createAction('[Counter Component] Decrement');
export const Reset = createAction('[Counter Component] Reset');
export const Login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: number }>()
);

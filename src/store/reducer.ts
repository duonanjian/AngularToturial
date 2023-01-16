import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './action';
export const stateKey = 'State';
export interface State {
    count: number;
    login: any;
    statusList: Array<any>;
}
export const initialState: State = {
    count: 0,
    login: {},
    statusList: []
};

export const reducer = createReducer(
    initialState,
    on(Actions.Increment, state => ({ ...state, count: state.count + 10 })),
    on(Actions.Decrement, state => ({ ...state, count: state.count - 5 })),
    on(Actions.Reset, state => ({ ...state, count: 0 })),
    on(Actions.Login, (state, login) => ({ ...state, login: login })),
    on(Actions.Status, (state, value) => ({ ...state, statusList: state.statusList.concat(value) }))
);

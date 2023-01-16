import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './reducer';

// export interface AppState {
//   State: State;
// }

// export const selectFeature = (state: AppState) => state.State;
export const selectFeature = createFeatureSelector<State>('State');

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: State) => state.count
);

export const selectFeatureStatusList = createSelector(
  selectFeature,
  (state: State) => state.statusList
);

import { createSelector, createFeatureSelector } from '@ngrx/store';
import State from './store'

export const selectFeature = createFeatureSelector<State>('State');

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: State) => state.count
);

export const selectFeatureStatusList = createSelector(
  selectFeature,
  (state: State) => state.statusList
);

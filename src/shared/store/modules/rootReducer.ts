import { combineReducers } from 'redux';
import { coordinatesReducer } from './coordinates/reducer';
import { RootStateType } from '../../types/store';

export const rootReducer = combineReducers<RootStateType>({
  coordinatesUser: coordinatesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

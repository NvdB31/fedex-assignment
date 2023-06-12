import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

// Get the UserState from the store
export const getUserState = createFeatureSelector<UserState>('user');

// Get the user from the UserState
export const getUser = createSelector(
    getUserState,
    (state: UserState) => state.user
);
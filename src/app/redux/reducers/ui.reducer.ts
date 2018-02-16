import { Action } from 'redux';
import * as UiActions from '../actions/ui.actions';
import { createSelector } from 'reselect';

export interface UiState {
    loader: boolean;
    sidebar: boolean;
}

const initialState: UiState = {
    loader: false,
    sidebar: true
}

export const UiReducer = (state: UiState = initialState, action: Action): UiState => {
    switch (action.type) {
        case UiActions.SHOW_LOADER:
            return {
                ...state, loader: true
            };
        case UiActions.HIDE_LOADER:
            return {
                ...state, loader: false
            };
        case UiActions.SHOW_SIDEBAR:
            return {
                ...state, sidebar: true
            };
        case UiActions.HIDE_SIDEBAR:
            return {
                ...state, sidebar: false
            };
        default:
            return state;
    }
}

export const getUiState = (state): UiState => state.ui;

export const getLoader = createSelector(
    getUiState,
    (state: UiState) => state.loader
);

export const getSidebar = createSelector(
    getUiState,
    (state: UiState) => state.sidebar
);


import { Reducer, combineReducers} from 'redux';

import {
    UsersState,
    UsersReducer
} from './reducers/user.reducer';
export * from './reducers/user.reducer';

import {
    UiState,
    UiReducer
} from './reducers/ui.reducer';
export * from './reducers/ui.reducer';

// All states will be define here
export interface AppState {
    users: UsersState,
    ui: UiState
}

// All reducer to be combine
const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    users: UsersReducer,
    ui: UiReducer
});


export default rootReducer;

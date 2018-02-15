import { Reducer, combineReducers} from 'redux';

import {
    UsersState,
    UsersReducer
} from './reducers/user.reducer';
export * from './reducers/user.reducer';

// All states will be define here
export interface AppState {
    users: UsersState
}

// All reducer to be combine
const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    users: UsersReducer
});


export default rootReducer;

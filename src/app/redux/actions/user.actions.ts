import { Action, ActionCreator} from 'redux';
import { User } from '../models/user.model';


// Define states keys
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


// Extended Actions
export interface SetCurrentUserAction extends Action {
    user: User;
}

// Create Actions
export const setCurrentUser: ActionCreator<SetCurrentUserAction>  = 
(user) => ({
    type: SET_CURRENT_USER,
    user: user
})
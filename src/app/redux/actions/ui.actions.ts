import { Action, ActionCreator} from 'redux';

// Define states keys
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';


// Create Actions
export const showLoader: ActionCreator<Action>  = 
(loader) => ({
    type: SHOW_LOADER
})

export const hideLoader: ActionCreator<Action>  = 
(loader) => ({
    type: HIDE_LOADER
})

export const showSidebar: ActionCreator<Action>  = 
(loader) => ({
    type: SHOW_SIDEBAR
})

export const hideSIDEBAR: ActionCreator<Action>  = 
(loader) => ({
    type: HIDE_SIDEBAR
})
import {combineReducers, createStore } from "redux";
import {dialogsReducer} from './reducers/dialogs_reducer';
import {profileReducer} from './reducers/profile_reducer';

const reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

export const store = createStore(reducers);

export type RootStoreType = typeof store
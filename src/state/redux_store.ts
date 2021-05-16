import {combineReducers, createStore } from "redux";
import {dialogsReducer} from './reducers/dialogs_reducer';
import {profileReducer} from './reducers/profile_reducer';

const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

// === ACTION TYPES ===
export type AllActionTypes = AddPostActionType |
    ChangeNewTextActionType |
    AddMessageActionType |
    ChangeNewMessageActionType

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

export type ChangeNewMessageActionType = {
    type: 'CHANGE-NEW-MESSAGE'
    newMessage: string
}
// === / ACTION TYPES ===

export const store = createStore(rootReducer);

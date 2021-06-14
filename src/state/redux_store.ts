import {combineReducers, createStore } from "redux";
import {dialogsReducer} from './reducers/dialogs_reducer';
import {profileReducer} from './reducers/profile_reducer';
import {usersReducer, UserType} from './reducers/users_reducer';

const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

// === ACTION TYPES ===
export type AllActionTypes = AddPostAT
    | ChangeNewTextAT
    | AddMessageAT
    | ChangeNewMessageAT
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleIsFetchingAT

export type AddPostAT = {
    type: 'ADD-POST'
}

export type ChangeNewTextAT = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export type AddMessageAT = {
    type: 'ADD-MESSAGE'
}

export type ChangeNewMessageAT = {
    type: 'CHANGE-NEW-MESSAGE'
    newMessage: string
}

export type FollowAT = {
    type: 'FOLLOW'
    userID: number
}

export type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: number
}

export type SetUsersAT = {
    type: 'SET-USERS'
    users: Array<UserType>
}

export type SetCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export type SetTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS-COUNT'
    count: number
}

export type ToggleIsFetchingAT = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}
// === / ACTION TYPES ===

export const store = createStore(rootReducer);

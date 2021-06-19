import {
    AllActionTypes,
    SetUserDataAT
} from '../redux_store';

export type InitialAuthStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

const InitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialAuthStateType = InitialState, action: AllActionTypes): InitialAuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

// === ACTION CREATORS ===
export const setUserData = (data: InitialAuthStateType): SetUserDataAT => {
    return {
        type: "SET-USER-DATA",
        data
    }
}

// === / ACTION CREATORS ===

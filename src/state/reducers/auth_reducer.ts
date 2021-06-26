import {
    AllActionTypes,
    SetUserDataAT
} from '../redux_store';
import {Dispatch} from 'redux';
import {authMe} from '../../api/api';

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
const setUserData = (data: InitialAuthStateType): SetUserDataAT => {
    return {
        type: "SET-USER-DATA",
        data
    }
}

// === / ACTION CREATORS ===

// === THUNKS ===
export const getAuthUserData = () => (dispatch: Dispatch<AllActionTypes>) => {
    authMe.getMe().then(response => {
        if (response.data.resultCode == 0) {
            dispatch(setUserData(response.data.data))
        }
    })
}

// === / THUNKS ===

import {
    AllActionTypes,
    FollowAT, SetCurrentPageAT, SetTotalUsersCountAT, SetUsersAT,
    UnfollowAT
} from '../redux_store';

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosType
    status: null | string
    followed: boolean
}

type PhotosType = {
    small: null | string
    large: null | string
}

export type InitialUsersStateType = typeof InitialState

const InitialState = {
    users: [] as Array<UserType>,
    pagesSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: InitialUsersStateType = InitialState, action: AllActionTypes): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.count}
        default:
            return state
    }
}

// === ACTION CREATORS ===
export const FollowAC = (userID: number): FollowAT => {
    return {
        type: 'FOLLOW',
        userID: userID
    }
}

export const UnfollowAC = (userID: number): UnfollowAT => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    }
}

export const setUsersAC = (users: Array<UserType>): SetUsersAT => {
    return {
        type: 'SET-USERS',
        users
    }
}

export const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => {
    return {
     type: 'SET-CURRENT-PAGE',
     currentPage
    }
}

export const setTotalUsersCountAC = (count: number): SetTotalUsersCountAT => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        count
    }
}
// === / ACTION CREATORS ===

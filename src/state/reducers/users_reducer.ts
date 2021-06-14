import {
    AllActionTypes,
    FollowAT, SetCurrentPageAT, SetTotalUsersCountAT, SetUsersAT, ToggleIsFetchingAT,
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
    currentPage: 1,
    isFetching: true
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
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

// === ACTION CREATORS ===
export const follow = (userID: number): FollowAT => {
    return {
        type: 'FOLLOW',
        userID: userID
    }
}

export const unfollow = (userID: number): UnfollowAT => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    }
}

export const setUsers = (users: Array<UserType>): SetUsersAT => {
    return {
        type: 'SET-USERS',
        users
    }
}

export const setCurrentPage = (currentPage: number): SetCurrentPageAT => {
    return {
     type: 'SET-CURRENT-PAGE',
     currentPage
    }
}

export const setTotalUsersCount = (count: number): SetTotalUsersCountAT => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        count
    }
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAT => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
}

// === / ACTION CREATORS ===

import {
    AllActionTypes,
    FollowAT, RootStateType,
    SetCurrentPageAT,
    SetTotalUsersCountAT,
    SetUsersAT, ToggleFollowingProgressAT,
    ToggleIsFetchingAT,
    UnfollowAT
} from '../redux_store';
import {usersAPI} from '../../api/api';
import {Dispatch} from 'redux';

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosType
    status: null | string
    followed: boolean
}

export type PhotosType = {
    small: undefined | string
    large: undefined | string
}

export type InitialUsersStateType = typeof InitialState

const InitialState = {
    users: [] as Array<UserType>,
    pagesSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [] as Array<number>
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
        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userID]
                    : state.followingProgress.filter(id => id != action.userID)
            }
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

export const toggleFollowingProgress = (isFetching: boolean, userID: number): ToggleFollowingProgressAT => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS',
        isFetching,
        userID
    }
}

// === / ACTION CREATORS ===

// === THUNKS ===
export const getUsersThunkCreator = (currentPage: number, pagesSize: number) => {
    return (dispatch: Dispatch<AllActionTypes>, getState: () => RootStateType) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pagesSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

// === / THUNKS ===

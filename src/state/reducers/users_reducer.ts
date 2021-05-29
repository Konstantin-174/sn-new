import {
    AllActionTypes,
    FollowAT, SetUsersAT,
    UnfollowAT
} from '../redux_store';

// export type UserType = {
//     image: string
//     id: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: LocationType
// }

// export type LocationType = {
//     city: string
//     country: string
// }

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
    users: [] as Array<UserType>
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
// === / ACTION CREATORS ===
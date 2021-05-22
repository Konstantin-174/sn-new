import {v1} from 'uuid';
import {
    AllActionTypes,
    FollowAT,
    UnfollowAT
} from '../redux_store';

export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type LocationType = {
    city: string
    country: string
}

export type InitialUsersStateType = typeof InitialState

const InitialState = {
    users: [
        {
            id: v1(),
            followed: false,
            status: 'Never give up!',
            fullName: 'Philip J. Fry',
            location: {city: 'Brooklyn', country: 'USA'}
        }
    ] as Array<UserType>
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
        default:
            return state
    }
}

// === ACTION CREATORS ===
export const FollowAC = (): FollowAT => {
    return {
        type: 'FOLLOW',
        userID: v1()
    }
}

export const UnfollowAC = (): UnfollowAT => {
    return {
        type: 'UNFOLLOW',
        userID: v1()
    }
}
// === / ACTION CREATORS ===

import {v1} from 'uuid';
import {
    AllActionTypes,
    FollowAT,
    UnfollowAT
} from '../redux_store';

export type UserType = {
    image: string
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
            image: 'https://static.wikia.nocookie.net/futurama/images/1/10/Leela.jpg/revision/latest/scale-to-width-down/250?cb=20141220211651&path-prefix=ru',
            id: v1(),
            followed: false,
            status: 'Never give up!',
            fullName: 'Turanga Leela',
            location: {city: 'Old New York', country: 'USA'}
        },
        {
            image: 'https://static.wikia.nocookie.net/futurama/images/0/0a/Zoidberg_rev.jpg/revision/latest/scale-to-width-down/250?cb=20130722200511&path-prefix=ru',
            id: v1(),
            followed: false,
            status: 'Whoop! Whoop! Whoop! Whoop! Whoop!',
            fullName: 'John D. Zoidberg',
            location: {city: 'Noname', country: 'Decapod 10'}
        },
        {
            image: 'https://static.wikia.nocookie.net/futurama/images/2/28/Amy_rev.jpg/revision/latest/scale-to-width-down/250?cb=20130722200517&path-prefix=ru',
            id: v1(),
            followed: false,
            status: 'Ok Fry, we\'re done putting on the bra!',
            fullName: 'Amy Wong',
            location: {city: 'New York', country: 'USA'}
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

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
            image: 'https://tridigital.wpengine.com/wp-content/uploads/2014/10/Turanga-Leela-Cartoon-Anime.jpg',
            id: v1(),
            followed: true,
            status: 'Never give up!',
            fullName: 'Turanga Leela',
            location: {city: 'Old New York', country: 'USA'}
        },
        {
            image: 'https://i.pinimg.com/736x/bb/4f/45/bb4f4529f8d7d3d60aa6fb3096b94ee6--futurama-why-not.jpg',
            id: v1(),
            followed: false,
            status: 'Whoop! Whoop! Whoop! Whoop! Whoop!',
            fullName: 'John D. Zoidberg',
            location: {city: 'Noname', country: 'Decapod 10'}
        },
        {
            image: 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/d/d5/AmyWong.jpg',
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
export const FollowAC = (userID: string): FollowAT => {
    return {
        type: 'FOLLOW',
        userID: userID
    }
}

export const UnfollowAC = (userID: string): UnfollowAT => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    }
}

// export const setUsersAC = (users: Array<UserType>) => {
//     return {
//         type: 'SET-USERS'
//         users
//     }
// }
// === / ACTION CREATORS ===

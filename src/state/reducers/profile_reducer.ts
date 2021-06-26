import {v1} from 'uuid';
import {
    AddPostAT,
    AllActionTypes,
    ChangeNewTextAT, SetUserProfileAT
} from '../redux_store';
import {PhotosType} from './users_reducer';
import {Dispatch} from 'redux';
import {usersAPI} from '../../api/api';

export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number | string
    photos: PhotosType
}

type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type PostsType = {
    image: string
    id: string
    name: string
    text: string
    likes: number
}

export type InitialProfileStateType = typeof initialState

const initialState = {
    posts: [
        {
            image: 'https://pbs.twimg.com/profile_images/472509364738072576/dtKZNd1J.jpeg',
            id: v1(),
            name: 'Philip J. Fry',
            text: 'Phew! What a terrible dream I had! I will never sleep again!',
            likes: 12
        },
        {
            image: 'https://i.pinimg.com/736x/bb/4f/45/bb4f4529f8d7d3d60aa6fb3096b94ee6--futurama-why-not.jpg',
            id: v1(),
            name: 'John D. Zoidberg',
            text: 'Whoop! Whoop! Whoop! Whoop! Whoop!',
            likes: 5
        },
        {
            image: 'https://tridigital.wpengine.com/wp-content/uploads/2014/10/Turanga-Leela-Cartoon-Anime.jpg',
            id: v1(),
            name: 'Turanga Leela',
            text: 'Have you run out of idiotic thoughts?',
            likes: 24
        },
    ] as Array<PostsType>,
        newPostText: '',
    profile: {} as UserProfileType
}


export const profileReducer = (state: InitialProfileStateType = initialState, action: AllActionTypes): InitialProfileStateType => {
    switch (action.type){
        case "ADD-POST": {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            const newPost: PostsType = {
                image: 'https://media1.tenor.com/images/9a04b431a9355b4b6295f25cbbcfe547/tenor.gif?itemid=4868772',
                id: v1(),
                name: '%@User_name@%',
                text: state.newPostText,
                likes: 0
            }
            stateCopy.posts.unshift(newPost)
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case "CHANGE-NEW-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

// === ACTION CREATORS ===
export const addPostAC = (): AddPostAT => {
    return {
        type: "ADD-POST"
    }
}

export const changeNewTextAC = (newText: string): ChangeNewTextAT => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    }
}

const setUserProfile = (profile: UserProfileType): SetUserProfileAT => {
    return {
        type: "SET-USER-PROFILE",
        profile
    }
}

// === / ACTION CREATORS ===

// === THUNKS ===
export const getUserProfile = (userID: string) => (dispatch: Dispatch<AllActionTypes>) => {
    usersAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

// === / THUNKS ===
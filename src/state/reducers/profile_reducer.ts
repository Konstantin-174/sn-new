import {v1} from 'uuid';
import {
    AddPostActionType,
    AllActionTypes,
    ChangeNewTextActionType
} from '../redux_store';

export type PostsType = {
    id: string
    name: string
    text: string
    likes: number
}

export type InitialProfileStateType = typeof initialState

const initialState = {
    posts: [
        {
            id: v1(),
            name: 'Philip J. Fry',
            text: 'Phew! What a terrible dream I had! I will never sleep again!',
            likes: 12
        },
        {
            id: v1(),
            name: 'John D. Zoidberg',
            text: 'What\'s up?',
            likes: 5
        },
        {
            id: v1(),
            name: 'Turanga Leela',
            text: 'Have you run out of idiotic thoughts?',
            likes: 24
        },
    ] as Array<PostsType>,
        newPostText: ''
}


export const profileReducer = (state: InitialProfileStateType = initialState, action: AllActionTypes): InitialProfileStateType => {
    switch (action.type){
        case "ADD-POST":
            state.newPostText = "";
            const newPost: PostsType = {
                id: v1(),
                name: '%@User_name@%',
                text: action.postMessage,
                likes: 0
            }
            state.posts.push(newPost)
            return state;
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

// === ACTION CREATORS ===
export const addPostAC = (postText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        postMessage: postText
    }
}

export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    }
}

// === / ACTION CREATORS ===
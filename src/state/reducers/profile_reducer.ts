import {v1} from 'uuid';
import {
    AddPostActionType,
    AllActionTypes,
    ChangeNewTextActionType
} from '../redux_store';

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
            image: 'https://static.wikia.nocookie.net/futurama/images/3/33/Fry_rev.jpg/revision/latest/scale-to-width-down/250?cb=20141220211720&path-prefix=ru',
            id: v1(),
            name: 'Philip J. Fry',
            text: 'Phew! What a terrible dream I had! I will never sleep again!',
            likes: 12
        },
        {
            image: 'https://static.wikia.nocookie.net/futurama/images/0/0a/Zoidberg_rev.jpg/revision/latest/scale-to-width-down/250?cb=20130722200511&path-prefix=ru',
            id: v1(),
            name: 'John D. Zoidberg',
            text: 'What\'s up?',
            likes: 5
        },
        {
            image: 'https://static.wikia.nocookie.net/futurama/images/1/10/Leela.jpg/revision/latest/scale-to-width-down/250?cb=20141220211651&path-prefix=ru',
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
        case "ADD-POST": {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            const newPost: PostsType = {
                image: 'https://static.wikia.nocookie.net/futurama/images/8/86/%D0%93%D0%B8%D0%BF%D0%BD%D0%BE%D0%B6%D0%B0%D0%B1%D0%B0_001.jpg/revision/latest/scale-to-width-down/604?cb=20200426124453&path-prefix=ru',
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
        default:
            return state;
    }
}

// === ACTION CREATORS ===
export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    }
}

export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    }
}

// === / ACTION CREATORS ===
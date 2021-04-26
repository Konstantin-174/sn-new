import {rerenderTree} from './rerenderTree';

export type PostsType = {
    id: number
    name: string
    text: string
    likes: number
}

export type DialogsType = {
    id: number
    name: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogs: Array<DialogsType>
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, name: 'Philip J. Fry', text: 'Phew! What a terrible dream I had! I will never sleep again!', likes: 12},
            {id: 2, name: 'John D. Zoidberg', text: 'What\'s up?', likes: 5},
            {id: 3, name: 'Turanga Leela', text: 'Have you run out of idiotic thoughts?', likes: 24},
        ],
        newPostText: ""
    },

    dialogs: [
        {id: 1, name: "Amy Wong"},
        {id: 2, name: "Zapp Brannigan"},
        {id: 3, name: "John D. Zoidberg"},
        {id: 4, name: "Turanga Leela"},
        {id: 5, name: "Hubert J. Farnsworth"},
    ]
}

export const addPost = (postMessage: string) => {
    const newPost: PostsType = {
        id: 4,
        name: "%@User_name@%",
        text: postMessage,
        likes: 0
    }

    state.profilePage.posts.push(newPost)
    rerenderTree(state);
}

export const changeNewText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderTree(state);
}
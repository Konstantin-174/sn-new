import {rerenderTree} from './rerenderTree';
import {v1} from 'uuid';

export type PostsType = {
    id: string
    name: string
    text: string
    likes: number
}

export type DialogsType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    text: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
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
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {
                id: v1(),
                name: 'Amy Wong'
            },
            {
                id: v1(),
                name: 'Zapp Brannigan'
            },
            {
                id: v1(),
                name: 'John D. Zoidberg'
            },
            {
                id: v1(),
                name: 'Turanga Leela'
            },
            {
                id: v1(),
                name: 'Hubert J. Farnsworth'
            },
        ],
        messages: [
            {
                id: v1(),
                text: 'Hi! How are you?'
            },
            {
                id: v1(),
                text: "Hi! I'm fine, thanks!"
            }
        ],
        newMessageText: ''
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostsType = {
        id: v1(),
        name: '%@User_name@%',
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

export const addMessage = (message: string) => {
    const newMessage: MessageType = {
        id: v1(),
        text: message
    }
    state.dialogsPage.messages.push(newMessage);
    rerenderTree(state);
}

export const changeNewMessage = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderTree(state);
}
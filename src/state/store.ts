import {v1} from 'uuid';
import {rerenderTree} from '../index';

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

export type StoreType = {
    _state: RootStateType
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
    addMessage: (message: string) => void
    changeNewMessage: (newMessage: string) => void
    _render: () => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
}

export const store: StoreType = {
    _state: {
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
    },
    _render() {
        rerenderTree();
    },

    getState() {
        return this._state;
    },
    subscribe(callback) {
        this._render = callback;
    },

    addPost(postMessage: string) {
        const newPost: PostsType = {
            id: v1(),
            name: '%@User_name@%',
            text: postMessage,
            likes: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._render();
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._render();
    },
    addMessage(message: string) {
        const newMessage: MessageType = {
            id: v1(),
            text: message
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._render();
    },
    changeNewMessage(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._render();
    },
}

import {v1} from 'uuid';
import {rerenderTree} from '../index';
import {profileReducer} from './reducers/profile_reducer';
import {dialogsReducer} from './reducers/dialogs_reducer';

// === STATE TYPES ===
type PostsType = {
    id: string
    name: string
    text: string
    likes: number
}

type DialogsType = {
    id: string
    name: string
}

type MessageType = {
    id: string
    text: string
}

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

type StoreType = {
    _state: RootStateType
    _render: () => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: any) => void
}
// === / STATE TYPES ===



const store: StoreType = {
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
                    text: 'Hi! I\'m fine, thanks!'
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._render();
    }
}
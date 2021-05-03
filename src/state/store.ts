import {v1} from 'uuid';
import {rerenderTree} from '../index';

// === STATE TYPES ===
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
    _render: () => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: AddPostActionType | ChangeNewTextActionType |
        AddMessageActionType | ChangeNewMessageActionType) => void
}
// === / STATE TYPES ===

// === ACTION TYPES ===
export type AddPostActionType = {
    type: "ADD-POST"
    postMessage: string
}

export type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
    message: string
}

export type ChangeNewMessageActionType = {
    type: "CHANGE-NEW-MESSAGE"
    newMessage: string
}
// === / ACTION TYPES ===

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

    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: v1(),
                name: '%@User_name@%',
                text: action.postMessage,
                likes: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._render();
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._render();
        } else if (action.type === "ADD-MESSAGE") {
            const newMessage: MessageType = {
                id: v1(),
                text: action.message
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._render();
        } else if (action.type === "CHANGE-NEW-MESSAGE") {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._render();
        }
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

export const addMessageAC = (message: string): AddMessageActionType => {
    return {
        type: "ADD-MESSAGE",
        message: message
    }
}

export const changeNewMessageAC = (newMessage: string): ChangeNewMessageActionType => {
    return {
        type: "CHANGE-NEW-MESSAGE",
        newMessage: newMessage
    }
}

// === / ACTION CREATORS ===
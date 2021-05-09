import {v1} from 'uuid';
import {
    AddMessageActionType,
    AddPostActionType,
    ChangeNewMessageActionType, ChangeNewTextActionType,
    DialogsPageType,
    MessageType
} from '../store';

const initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: AddPostActionType | ChangeNewTextActionType | AddMessageActionType | ChangeNewMessageActionType) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            state.newMessageText = "";
            const newMessage: MessageType = {
                id: v1(),
                text: action.message
            }
            state.messages.push(newMessage);
            return state;
        case "CHANGE-NEW-MESSAGE":
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

// === ACTION CREATORS ===
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
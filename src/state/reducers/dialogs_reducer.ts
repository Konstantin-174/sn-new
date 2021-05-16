import {v1} from 'uuid';
import {
    AddMessageActionType,
    AllActionTypes,
    ChangeNewMessageActionType
} from '../redux_store';

export type DialogsType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    text: string
}

export type InitialDialogsStateType = typeof initialState

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
    ] as Array<DialogsType>,
    messages: [
        {
            id: v1(),
            text: 'Hi! How are you?'
        },
        {
            id: v1(),
            text: 'Hi! I\'m fine, thanks!'
        }
    ] as Array<MessageType>,
    newMessageText: ''
}

export const dialogsReducer = (state: InitialDialogsStateType = initialState, action: AllActionTypes): InitialDialogsStateType => {

    switch (action.type) {
        case "ADD-MESSAGE": {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            const newMessage: MessageType = {
                id: v1(),
                text: state.newMessageText
            }
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        case "CHANGE-NEW-MESSAGE": {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }
        default:
            return state;
    }
}

// === ACTION CREATORS ===
export const addMessageAC = (): AddMessageActionType => {
    return {
        type: "ADD-MESSAGE"
    }
}

export const changeNewMessageAC = (newMessage: string): ChangeNewMessageActionType => {
    return {
        type: "CHANGE-NEW-MESSAGE",
        newMessage: newMessage
    }
}

// === / ACTION CREATORS ===
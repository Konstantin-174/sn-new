import {ChangeEvent} from 'react';
import {
    addMessageAC,
    changeNewMessageAC,
    DialogsType,
    MessageType
} from '../../state/reducers/dialogs_reducer';
import Messages from './Messages';
import {connect} from 'react-redux';
import {RootStateType} from '../../state/redux_store';
import { Dispatch } from 'redux';

type MapStatePropsType = {
    newMessage: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

type MapDispatchPropsType = {
    onAddMessage: () => void
    onNewMessageChangeHandler: (el: ChangeEvent<HTMLInputElement>) => void
}

export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        newMessage: state.dialogsReducer.newMessageText,
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onAddMessage: () => {
            dispatch(addMessageAC())
        },
        onNewMessageChangeHandler: (el: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewMessageAC(el.currentTarget.value))
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

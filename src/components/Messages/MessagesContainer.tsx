import {ChangeEvent} from 'react';
import {
    addMessage,
    changeNewMessage,
    DialogsType,
    MessageType
} from '../../state/reducers/dialogs_reducer';
import Messages from './Messages';
import {connect} from 'react-redux';
import {RootStateType} from '../../state/redux_store';
import {Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

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
            dispatch(addMessage())
        },
        onNewMessageChangeHandler: (el: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewMessage(el.currentTarget.value))
        }
    }
}

export const MessagesContainer = withAuthRedirect(connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(Messages));


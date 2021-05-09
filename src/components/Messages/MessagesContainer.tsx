import React, {ChangeEvent} from 'react';
import {
    AddMessageActionType,
    ChangeNewMessageActionType, DialogsPageType,
} from '../../state/store';
import {addMessageAC, changeNewMessageAC} from '../../state/reducers/dialogs_reducer';
import Messages from './Messages';

type MessagesPropsType = {
    dialogs: DialogsPageType
    dispatch: (action: AddMessageActionType | ChangeNewMessageActionType) => void
}

const MessagesContainer = (props: MessagesPropsType) => {
    const onAddMessage = () => {
        props.dispatch(addMessageAC(props.dialogs.newMessageText)) //props.newMessage
    }

    const onNewMessageChangeHandler = (el: ChangeEvent<HTMLInputElement>) => props.dispatch(changeNewMessageAC(el.currentTarget.value))

    return <Messages newMessage={props.dialogs.newMessageText}
                  dialogs={props.dialogs}
                  addMessage={onAddMessage}
                  newMessageChangeHandler={onNewMessageChangeHandler}
        />
}

export default MessagesContainer;
import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStateType} from '../../state/redux_store';
import {UserType} from '../../state/reducers/users_reducer';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    users: Array<UserType>
}

type MapDispatchPropsType = {

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return  ({users: state.usersReducer.users})
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
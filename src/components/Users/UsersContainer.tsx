import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStateType} from '../../state/redux_store';
import {FollowAC, setUsersAC, UnfollowAC, UserType} from '../../state/reducers/users_reducer';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    users: Array<UserType>
}

type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return  ({users: state.usersReducer.users})
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID) => {
            dispatch(FollowAC(userID))
        },
        unfollow: (userID) => {
            dispatch(UnfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
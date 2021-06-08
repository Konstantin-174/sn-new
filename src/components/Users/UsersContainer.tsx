import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {RootStateType} from '../../state/redux_store';
import {
    FollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UnfollowAC,
    UserType
} from '../../state/reducers/users_reducer';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return  ({
        users: state.usersReducer.users,
        pagesSize: state.usersReducer.pagesSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    })
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
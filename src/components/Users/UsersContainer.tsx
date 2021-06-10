import React from 'react';
import {connect} from 'react-redux';
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
import axios from 'axios';
import {UsersFC} from './UsersFC';

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

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render () {
        return (
            <UsersFC users={this.props.users}
                     pagesSize={this.props.pagesSize}
                     totalUsersCount={this.props.totalUsersCount}
                     currentPage={this.props.currentPage}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
                     onPageChanged={this.onPageChanged}/>
        )
    }
}

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
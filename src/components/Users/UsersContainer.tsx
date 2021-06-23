import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../state/redux_store';
import {
    follow,
    getUsers,
    unfollow,
    UserType
} from '../../state/reducers/users_reducer';
import {UsersFC} from './UsersFC';
import {PreloaderSVG} from '../../common/Preloader/PreloaderSVG';

type MapStatePropsType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getUsers: (currentPage: number, pagesSize: number) => void
}

type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pagesSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <PreloaderSVG/> : null}
                <UsersFC users={this.props.users}
                         pagesSize={this.props.pagesSize}
                         totalUsersCount={this.props.totalUsersCount}
                         currentPage={this.props.currentPage}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         onPageChanged={this.onPageChanged}
                         followingProgress={this.props.followingProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return ({
        users: state.usersReducer.users,
        pagesSize: state.usersReducer.pagesSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingProgress: state.usersReducer.followingProgress
    })
}

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {
    follow,
    unfollow,
    getUsers
})(Users)
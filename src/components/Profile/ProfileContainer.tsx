import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, UserProfileType} from '../../state/reducers/profile_reducer';
import {RootStateType} from '../../state/redux_store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type MapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
}

type PathParamsType = {
    userID: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '2'
        }
        this.props.getUserProfile(userID)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return ({
        profile: state.profileReducer.profile,
        isAuth: state.auth.isAuth
    })
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {getUserProfile})(WithUrlDataProfileContainer)
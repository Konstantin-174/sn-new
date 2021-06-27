import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, UserProfileType} from '../../state/reducers/profile_reducer';
import {RootStateType} from '../../state/redux_store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStateToPropsType = {
    profile: UserProfileType
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
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return ({
        profile: state.profileReducer.profile
    })
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {getUserProfile})(WithUrlDataProfileContainer))
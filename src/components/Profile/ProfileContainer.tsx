import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile, UserProfileType} from '../../state/reducers/profile_reducer';
import {RootStateType} from '../../state/redux_store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type MapStateToPropsType = {
    profile: UserProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
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

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)
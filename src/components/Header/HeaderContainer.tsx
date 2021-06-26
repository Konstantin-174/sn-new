import React from 'react';
import HeaderFC from './HeaderFC';
import {connect} from 'react-redux';
import {RootStateType} from '../../state/redux_store';
import {getAuthUserData} from '../../state/reducers/auth_reducer';

type MapStatePropsType = {
    isAuth: boolean,
    login: null | string
}

type MapDispatchPropsType = {
    getUserData: () => void
}

type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class Header extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return (
            <HeaderFC isAuth={this.props.isAuth}
                      login={this.props.login}
            />
        )
    }
}

const MapStateToProps = (state: RootStateType): MapStatePropsType => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
}

export const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(MapStateToProps, {getUserData: getAuthUserData})(Header);
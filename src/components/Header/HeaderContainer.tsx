import React from 'react';
import HeaderFC from './HeaderFC';
import {connect} from 'react-redux';
import axios from 'axios';
import {RootStateType} from '../../state/redux_store';
import {InitialAuthStateType, setUserData} from '../../state/reducers/auth_reducer';

type MapStatePropsType = {
    isAuth: boolean,
    login: null | string
}

type MapDispatchPropsType = {
    setUserData: (data: InitialAuthStateType) => void
}

type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class Header extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data)
                }
            })
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

export const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(MapStateToProps, {setUserData})(Header);
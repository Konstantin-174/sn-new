import {RootStateType} from '../state/redux_store';
import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootStateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T> (Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsForRedirectType) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}
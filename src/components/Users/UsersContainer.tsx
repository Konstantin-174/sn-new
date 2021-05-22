import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';

let mapStateToProps = () => {
    return {

    }
}

let mapDispatchToProps = () => {
    return {

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)
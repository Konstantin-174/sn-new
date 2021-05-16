import React, {ChangeEvent} from 'react';
import {addPostAC, changeNewTextAC, InitialProfileStateType, PostsType} from '../../../state/reducers/profile_reducer';
import MyPosts from './MyPosts';
import {RootStateType} from '../../../state/redux_store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    posts: Array<PostsType>
    newPost: string
}

type MapDispatchPropsType = {
    onAddPost: (props: InitialProfileStateType) => void
    onNewTextChangeHandler: (el: ChangeEvent<HTMLInputElement>) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        posts: state.profileReducer.posts,
        newPost: state.profileReducer.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onAddPost: (props: InitialProfileStateType) => {
            dispatch(addPostAC(props.newPostText))
        },
        onNewTextChangeHandler: (el: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewTextAC(el.currentTarget.value))
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
import React, {ChangeEvent} from 'react';
import {
    AddPostActionType,
    ChangeNewTextActionType,
    PostsType
} from '../../../state/store';
import {addPostAC, changeNewTextAC} from '../../../state/reducers/profile_reducer';
import MyPosts from './MyPosts';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPost: string
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    const onAddPost = () => {
        props.dispatch(addPostAC(props.newPost)) //props.newPost
    }

    const onNewTextChangeHandler = (text: ChangeEvent<HTMLInputElement>) => props.dispatch(changeNewTextAC(text.currentTarget.value))

    return <MyPosts posts={props.posts}
                 addPost={onAddPost}
                 newPost={props.newPost}
                 newTextChangeHandler={onNewTextChangeHandler}
        />
}
import React, {ChangeEvent} from 'react';
import local from './MyPosts.module.scss'
import {BsBoxArrowInDown} from 'react-icons/bs';
import Post from './post/Post';
import {
    AddPostActionType,
    ChangeNewTextActionType,
    PostsType
} from '../../../state/store';
import {addPostAC, changeNewTextAC} from '../../../state/reducers/profile_reducer';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPost: string
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsEl = props.posts.map((post) => <Post key={post.id}
                                                  name={post.name}
                                                  text={post.text}
                                                  likes={post.likes}/>)

    const addPost = () => {
        props.dispatch(addPostAC(props.newPost)) //props.newPost
    }

    const newTextChangeHandler = (el: ChangeEvent<HTMLInputElement>) => props.dispatch(changeNewTextAC(el.currentTarget.value))

    return (
        <section className={local.postsWrap}>
            <div className={local.inputPost}>
                <div className={local.inputArea}>
                    <input type="text"
                           value={props.newPost}
                           onChange={newTextChangeHandler}
                           placeholder="Enter your message"
                    />
                </div>
                <BsBoxArrowInDown onClick={addPost}
                                  className={local.inputBtn} size="2em"
                />
            </div>
            {postsEl}
        </section>
    )
}

export default MyPosts;

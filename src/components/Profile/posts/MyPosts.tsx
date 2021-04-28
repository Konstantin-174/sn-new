import React, {ChangeEvent} from 'react';
import local from './MyPosts.module.scss'
import {BsBoxArrowInDown} from 'react-icons/bs';
import Post from './post/Post';
import {PostsType} from '../../../state/state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPost: string
    addPostCallBack: (postMessage: string) => void
    addNewPostTextCallBack: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsEl = props.posts.map((post) => <Post key={post.id}
                                                  name={post.name}
                                                  text={post.text}
                                                  likes={post.likes}/>)

    const addPost = () => {
        props.addPostCallBack(props.newPost)
        props.addNewPostTextCallBack('')
    }

    const newTextChangeHandler = (el: ChangeEvent<HTMLInputElement>) => props.addNewPostTextCallBack(el.currentTarget.value)

    return (
        <section className={local.postsWrap}>
            <div className={local.inputPost}>
                <div className={local.inputArea}>
                    <input type="text"
                           value={props.newPost}
                           onChange={newTextChangeHandler}
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

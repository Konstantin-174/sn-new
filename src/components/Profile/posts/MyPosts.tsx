import React, {ChangeEvent} from 'react';
import local from './MyPosts.module.scss'
import {BsBoxArrowInDown} from 'react-icons/bs';
import Post from './post/Post';
import { MyPostsPropsType } from './MyPostsContainer';

const MyPosts = (props: MyPostsPropsType) => {

    let postsEl = props.posts.map((post) => <Post key={post.id}
                                                  name={post.name}
                                                  text={post.text}
                                                  likes={post.likes}/>)

    const onPostChange = (text: ChangeEvent<HTMLInputElement>) => {
        props.onNewTextChangeHandler(text)
    }

    return (
        <section className={local.postsWrap}>
            <div className={local.inputPost}>
                <div className={local.inputArea}>
                    <input type="text"
                           value={props.newPost}
                           onChange={onPostChange}
                           placeholder="Enter your message"
                    />
                </div>
                <BsBoxArrowInDown onClick={props.onAddPost}
                                  className={local.inputBtn}
                                  size="2em"
                />
            </div>
            {postsEl}
        </section>
    )
}

export default MyPosts;

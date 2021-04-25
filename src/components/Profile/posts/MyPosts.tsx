import React from 'react';
import local from './MyPosts.module.scss'
import {BsBoxArrowInDown} from 'react-icons/bs';
import Post from './post/Post';
import {PostsType} from '../../../state/state';

type MyPostsPropsType = {
    posts: Array<PostsType>
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsEl = props.posts.map((post) => <Post name={post.name}
                                            text={post.text}
                                            likes={post.likes}/>)

    return (
        <section className={local.postsWrap}>
            <div className={local.inputPost}>
                <div className={local.inputArea}>
                    <input type="text"/>
                </div>
                <BsBoxArrowInDown className={local.inputBtn} size="2em"/>
            </div>
            {postsEl}
        </section>
    )
}

export default MyPosts;

import React from 'react';
import local from './Post.module.scss';
import img from './img/ghML0mY_.jpg';
import { AiFillLike } from "react-icons/ai";

type PostType = {
    name: string
    likes: number
    text: string
}

const Post = (props: PostType) => {
    return (
        <section className={local.postWrap}>
            <div className={local.postAutor}>
                {props.name}
            </div>
            <div className={local.postContent}>
                <div className={local.ava}>
                    <img src={img} alt="Avatar"/>
                </div>
                <div className={local.postText}>
                    &#8220;{props.text}&#8221;
                </div>
            </div>
            <div className={local.postLikes}>
                <AiFillLike className={local.likeIcon}/>
                <div className={local.likesCount}>
                    {props.likes}
                </div>
            </div>
        </section>
    )
}

export default Post;
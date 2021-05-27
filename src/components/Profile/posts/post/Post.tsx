import React from 'react';
import styles from './Post.module.scss';
import img from './img/ghML0mY_.jpg';
import { AiFillLike } from "react-icons/ai";

type PostType = {
    name: string
    text: string
    likes: number
    image: string
}

const Post: React.FC<PostType> = ({name,
                                      text,
                                      likes,
                                      image}) => {
    return (
        <section className={styles.postWrap}>
            <div className={styles.postAutor}>
                {name}
            </div>
            <div className={styles.postContent}>
                <div className={styles.ava}>
                    <img src={image} alt="Avatar"/>
                </div>
                <div className={styles.postText}>
                    &#8220;{text}&#8221;
                </div>
            </div>
            <div className={styles.postLikes}>
                <AiFillLike className={styles.likeIcon}/>
                <div className={styles.likesCount}>
                    {likes}
                </div>
            </div>
        </section>
    )
}

export default Post;
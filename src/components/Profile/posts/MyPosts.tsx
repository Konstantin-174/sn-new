import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.scss'
import {BsBoxArrowInDown} from 'react-icons/bs';
import Post from './post/Post';
import {MyPostsPropsType} from './MyPostsContainer';

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                                 newPost,
                                                 onAddPost,
                                                 onNewTextChangeHandler
                                             }) => {

    let postsEl = posts.map((post) => <Post key={post.id}
                                            name={post.name}
                                            text={post.text}
                                            likes={post.likes}
                                            image={post.image}/>)

    const onPostChange = (text: ChangeEvent<HTMLInputElement>) => {
        onNewTextChangeHandler(text)
    }

    return (
        <section className={styles.postsWrap}>
            <div className={styles.inputPost}>
                <div className={styles.inputArea}>
                    <input type="text"
                           value={newPost}
                           onChange={onPostChange}
                           placeholder="Enter your message"
                    />
                </div>
                <BsBoxArrowInDown onClick={onAddPost}
                                  className={styles.inputBtn}
                                  size="2em"
                />
            </div>
            {postsEl}
        </section>
    )
}

export default MyPosts;

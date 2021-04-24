import React from 'react';
import local from './MyPosts.module.scss'
import {BsBoxArrowInDown} from 'react-icons/bs';
import Post from './post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, name: 'Philip J. Fry', text: 'Phew! What a terrible dream I had! I will never sleep again!', likes: 12},
        {id: 2, name: 'John D. Zoidberg', text: 'What\'s up?', likes: 5},
        {id: 3, name: 'Turanga Leela', text: 'Have you run out of idiotic thoughts?', likes: 24},
    ]

    let postsEl = posts.map((post) => <Post name={post.name}
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

import React from 'react';
import local from './Profile.module.scss'
import Avatar from './avatar/Avatar';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPosts from './posts/MyPosts';
import {PostsType} from '../../state/state';

type ProfilePropsType = {
    posts: Array<PostsType>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <section className={local.profileWrap}>
          <div className={local.avaDiscript}>
              <Avatar/>
              <ProfileInfo/>
          </div>
            <MyPosts posts={props.posts}/>
        </section>
    )
}

export default Profile;
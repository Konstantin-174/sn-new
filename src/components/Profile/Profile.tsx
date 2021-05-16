import React from 'react';
import local from './Profile.module.scss'
import Avatar from './avatar/Avatar';
import ProfileInfo from './profileInfo/ProfileInfo';
import {MyPostsContainer} from './posts/MyPostsContainer';

const Profile = () => {
    return (
        <section className={local.profileWrap}>
          <div className={local.avaDiscript}>
              <Avatar/>
              <ProfileInfo />
          </div>
            <MyPostsContainer />
        </section>
    )
}

export default Profile;
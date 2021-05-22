import React from 'react';
import styles from './Profile.module.scss'
import Avatar from './avatar/Avatar';
import ProfileInfo from './profileInfo/ProfileInfo';
import {MyPostsContainer} from './posts/MyPostsContainer';

const Profile: React.FC = () => {
    return (
        <section className={styles.profileWrap}>
          <div className={styles.avaDiscript}>
              <Avatar/>
              <ProfileInfo />
          </div>
            <MyPostsContainer />
        </section>
    )
}

export default Profile;
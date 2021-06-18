import React from 'react';
import styles from './Profile.module.scss'
import Avatar from './avatar/Avatar';
import ProfileInfo from './profileInfo/ProfileInfo';
import {MyPostsContainer} from './posts/MyPostsContainer';
import {UserProfileType} from '../../state/reducers/profile_reducer';
import {PreloaderSVG} from '../../common/Preloader/PreloaderSVG';

type ProfilePropsType = {
    profile: UserProfileType
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {

    if (!profile.photos) {
        return <PreloaderSVG/>
    }

    return (
        <section className={styles.profileWrap}>
          <div className={styles.avaDiscript}>
              <Avatar photos={profile.photos}/>
              <ProfileInfo profile={profile}/>
          </div>
            <MyPostsContainer />
        </section>
    )
}

export default Profile;
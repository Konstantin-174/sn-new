import React from 'react';
import local from './Profile.module.scss'
import Avatar from './avatar/Avatar';
import ProfileInfo from './profileInfo/ProfileInfo';
import {AddPostActionType, ChangeNewTextActionType, ProfilePageType} from '../../state/store';
import {MyPostsContainer} from './posts/MyPostsContainer';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <section className={local.profileWrap}>
          <div className={local.avaDiscript}>
              <Avatar/>
              <ProfileInfo/>
          </div>
            <MyPostsContainer posts={props.profilePage.posts}
                     newPost={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </section>
    )
}

export default Profile;
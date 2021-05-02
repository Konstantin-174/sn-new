import React from 'react';
import local from './Profile.module.scss'
import Avatar from './avatar/Avatar';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPosts from './posts/MyPosts';
import {AddPostActionType, ChangeNewTextActionType, ProfilePageType} from '../../state/store';

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
            <MyPosts posts={props.profilePage.posts}
                     newPost={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </section>
    )
}

export default Profile;
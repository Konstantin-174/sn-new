import React from 'react';
import local from './Profile.module.scss'
import Avatar from './avatar/Avatar';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPosts from './posts/MyPosts';
import {ProfilePageType} from '../../state/store';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
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
                     addPostCallBack={props.addPost}
                     addNewPostTextCallBack={props.changeNewText}
            />
        </section>
    )
}

export default Profile;
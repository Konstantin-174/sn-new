import React from 'react';
import local from './Profile.module.scss'
import Avatar from './avatar/Avatar';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPosts from './posts/MyPosts';
import {addPost, changeNewText, ProfilePageType} from '../../state/state';

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
                     addPostCallBack={addPost}
                     addNewPostTextCallBack={changeNewText}
            />
        </section>
    )
}

export default Profile;
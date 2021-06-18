import React from 'react';
import styles from './ProfileInfo.module.scss';
import {UserProfileType} from '../../../state/reducers/profile_reducer';
import {BsFillExclamationCircleFill} from "react-icons/bs";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {
    return (
        <section className={styles.infoWrap}>
            <div className={styles.infoItem}>
                <div className={styles.itemTitle}>
                    Name
                </div>
                <div className={styles.itemDescription}>
                    {profile.fullName}
                </div>
            </div>
            <div className={styles.infoItem}>
                <div className={styles.itemTitle}>
                    About me
                </div>
                <div className={styles.itemDescription}>
                    "{profile.aboutMe}"
                </div>
            </div>
            <div className={styles.infoItem}>
                <div className={styles.itemTitle}>
                    Looking for a job
                </div>
                <div className={styles.itemDescription}>
                    {profile.lookingForAJob ? <BsFillExclamationCircleFill/> : ""}
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo;
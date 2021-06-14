import React from 'react';
import styles from './Avatar.module.scss';
import img from '../../Users/images/nonameUser.jpg';
import {PhotosType} from '../../../state/reducers/users_reducer';

type AvatarPropsType = {
    photos: PhotosType
}

const Avatar: React.FC<AvatarPropsType> = ({photos}) => {
    return (
        <section className={styles.avaWrap}>
            <div className={styles.avaImg}>
                <img className={styles.ava} src={photos.large === null ? img : photos.large} alt="Avatar"/>
            </div>
            <div className={styles.avaSettings}>
                <button className={styles.avaBtn}>
                    Edit
                </button>
            </div>
        </section>
    )
}

export default Avatar;
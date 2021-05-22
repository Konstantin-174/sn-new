import React from 'react';
import styles from './Avatar.module.scss';
import img from './img/IRh4RWeX.jpg';

const Avatar: React.FC = () => {
    return (
        <section className={styles.avaWrap}>
            <div className={styles.avaImg}>
                <img className={styles.ava} src={img} alt="Avatar"/>
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
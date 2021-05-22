import React from 'react';
import styles from './ProfileInfo.module.scss';

const ProfileInfo: React.FC = () => {
    return (
        <section className={styles.infoWrap}>
            <div className={styles.infoItem}>
                <div className={styles.itemTitle}>
                    Name
                </div>
                <div className={styles.itemDescription}>
                    Bender Rodriguez
                </div>
            </div>
            <div className={styles.infoItem}>
                <div className={styles.itemTitle}>
                    Birth
                </div>
                <div className={styles.itemDescription}>
                    10/11/1989
                </div>
            </div>
            <div className={styles.infoItem}>
                <div className={styles.itemTitle}>
                    Education
                </div>
                <div className={styles.itemDescription}>
                    University degree
                </div>
            </div>
            <div className={styles.infoItem}>
                <div className={styles.itemTitle}>
                    Quotes
                </div>
                <div className={styles.itemDescription}>
                    <div className={styles.descriptionText}>
                        "I'm going to build my own theme park! With blackjack! And hookers!"
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo;
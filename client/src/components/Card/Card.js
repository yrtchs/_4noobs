import React from 'react';
import styles from "./Card.module.css"

const Card = () => {
    return (
        <article className={styles.card}>
            <div className={styles.cardHead}>
                <h2 className={styles.cardHeadTitle}>
                    <a href="#">Lorem ipsum dolor sit amet.</a>
                </h2>
            </div>
            <div className={styles.cardBody}>
                <p className={styles.cardHeadDescr}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque?
                </p>
            </div>
            <div className={styles.cardFoot}>

            </div>
        </article>
    );
};

export default Card;
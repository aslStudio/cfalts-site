import React from "react";

import styles from './Particles.module.scss'

export const Particles = React.memo<React.PropsWithChildren>(({
    children
}) => {
    return <div className={styles.root}>
        {children}
        <div className={styles.particles}>
            {Array(100)
                .fill(0)
                .map((_, key) => (
                    <div key={key} className={styles['circle-container']}>
                        <div className={styles['circle']}/>
                    </div>
                ))}
        </div>
    </div>
})
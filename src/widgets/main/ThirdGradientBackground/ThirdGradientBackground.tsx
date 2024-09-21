import React from "react";
import {images} from "@/shared/assets/images";

import styles from './TheGradientBackground.module.scss'

export const ThirdGradientBackground = React.memo<
    React.PropsWithChildren
>(({
    children
}) => {
    return (
        <div className={styles.root}>
            <img
                className={styles.desktop}
                src={images.Main.Gradient3.desktop}
                alt={'desktop-decoration'}
			    loading="lazy"
            />
            <img
                className={styles.mobile}
                src={images.Main.Gradient3.mobile}
                alt={'desktop-decoration'}
			    loading="lazy"
            />
            {children}
        </div>
    )
})
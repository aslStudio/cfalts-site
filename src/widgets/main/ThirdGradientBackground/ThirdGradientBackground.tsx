import React from "react";

import {images} from "@/shared/assets/images";
import { OpacityImage } from "@/shared/ui/OpacityImage";

import styles from './TheGradientBackground.module.scss'

export const ThirdGradientBackground = React.memo<
    React.PropsWithChildren
>(({
    children
}) => {
    return (
        <div className={styles.root}>
            <OpacityImage
                className={styles.desktop}
                src={images.Main.Gradient3.desktop}
                alt={'desktop-decoration'}
            />
            <OpacityImage
                className={styles.mobile}
                src={images.Main.Gradient3.mobile}
                alt={'desktop-decoration'}
            />
            {children}
        </div>
    )
})
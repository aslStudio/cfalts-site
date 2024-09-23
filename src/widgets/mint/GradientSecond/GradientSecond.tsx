import React from "react";

import {OpacityImage} from "@/shared/ui/OpacityImage";
import {images} from "@/shared/lib/images";

import styles from './GradientSecond.module.scss'

export const GradientSecond = React.memo<React.PropsWithChildren>(({
    children
}) => {
    return (
        <div className={styles.root}>
            <OpacityImage
                className={styles.large}
                src={images.mint.gradient2.large}
                alt={'decoration'}
            />
            <OpacityImage
                className={styles.small}
                src={images.mint.gradient2.small}
                alt={'decoration'}
            />
            {children}
        </div>
    )
})
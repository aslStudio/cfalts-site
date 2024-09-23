import React from "react";
import {images} from "@/shared/lib/images";
import {OpacityImage} from "@/shared/ui/OpacityImage";

import styles from './GradientFirst.module.scss'

export const GradientFirst = React.memo<React.PropsWithChildren>(({
    children
}) => {
    return (
        <div className={styles.root}>
            <OpacityImage
                className={styles.large}
                src={images.mint.gradient1.large}
                alt={'decoration'}
            />
            <OpacityImage
                className={styles.small}
                src={images.mint.gradient1.mobile}
                alt={'decoration'}
            />
            {children}
        </div>
    )
})

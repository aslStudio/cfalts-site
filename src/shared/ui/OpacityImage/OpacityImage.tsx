import React, { useMemo, useState } from "react"

import styles from './OpacityImage.module.scss'

export type OpacityImageProps = {
    className?: string
    src: string
    alt: string
}

export const OpacityImage = React.memo<OpacityImageProps>(({
    className,
    src,
    alt,
}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const classes = useMemo(() => [
        styles.root,
        isLoaded ? styles['is-loaded'] : '',
        className ? className : ''
    ].join(' '), [isLoaded])

    return (
        <img
            className={classes}
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
        />
    )
})
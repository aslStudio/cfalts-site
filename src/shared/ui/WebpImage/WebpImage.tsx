import React from "react";

import styles from './WebpImage.module.scss'

export type WebpImageProps = {
    src: string
    exc?: string
    className?: string
    alt: string
    onLoad?: () => void
}

export const WebpImage = React.memo<WebpImageProps>(({ 
    src, 
    exc = 'png', 
    alt, 
    className,
    onLoad,
}) => (
    <picture className={`${styles.root} ${className ? className : ''}`} onLoad={onLoad}>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <source srcSet={`${src}.png`} type="image/png" />
        <img src={`${src}.png`} alt={alt} />
    </picture>
))
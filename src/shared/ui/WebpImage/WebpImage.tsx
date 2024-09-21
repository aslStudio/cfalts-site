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
        <source type={"image/webp"} width={"100px"} height={"100px"} srcSet={`${src}.webp`}/>
        <source type={`image/${exc}`} width={"100px"} height={"100px"} srcSet={`${src}.${exc}`}/>
        <img srcSet={`${src}.${exc}`} alt={alt} loading={"lazy"}/>
    </picture>
))
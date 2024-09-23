import React, { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"

import styles from './Modal.module.scss'

export type ModalProps = React.PropsWithChildren<{
    isOpen: boolean
    isUpperHeader?: boolean
    cardStyles: string
    RootChildren?: React.ReactNode
    onClose: () => void
}>

let timeout: NodeJS.Timeout

export const Modal = React.memo<ModalProps>(({
    isOpen,
    isUpperHeader = false,
    onClose,
    cardStyles,
    RootChildren,
    children
}) => {
    const [isInDOM, setIsInDOM] = useState(false)
    const [isShowed, setIsShowed] = useState(false)

    const classes = useMemo(() => [
        styles.root,
        isShowed ? styles['is-open'] : '',
        isUpperHeader ? styles['is-upper-header'] : ''
    ].join(' '), [isShowed, isUpperHeader])



    useEffect(() => {
        if (isOpen) {
            setIsInDOM(true)
            timeout = setTimeout(() => {
                setIsShowed(true)
                clearTimeout(timeout)
            }, 50)
        } else {
            setIsShowed(false)
            // timeout = setTimeout(() => {
            //     setIsInDOM(false)
            //     clearTimeout(timeout)
            // }, 1000)
        }
    }, [isOpen])

    return createPortal(
        <div className={classes}>
            <div className={styles.overlay} onClick={onClose} />
            {RootChildren}
            <article className={`${styles.card} ${cardStyles}`}>
                {children}
            </article>
        </div>,
        document.querySelector('#root')!
    )

    // return null
})
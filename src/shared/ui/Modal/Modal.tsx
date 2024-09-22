import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"

import styles from './Modal.module.scss'

export type ModalProps = React.PropsWithChildren<{
    isOpen: boolean
    cardStyles: string
    onClose: () => void
}>

let timeout: NodeJS.Timeout

export const Modal = React.memo<ModalProps>(({
    isOpen,
    onClose,
    cardStyles,
    children
}) => {
    const [isInDOM, setIsInDOM] = useState(false)
    const [isShowed, setIsShowed] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsInDOM(true)
            timeout = setTimeout(() => {
                setIsShowed(true)
                clearTimeout(timeout)
            }, 50)
        } else {
            setIsShowed(false)
            timeout = setTimeout(() => {
                setIsInDOM(false)
                clearTimeout(timeout)
            }, 350)
        }
    }, [isOpen])

    if (isInDOM) {
        return createPortal(
            <div className={`${styles.root} ${isShowed ? styles['is-open'] : ''}`}>
                <div className={styles.overlay} onClick={onClose} />
                <article className={`${styles.card} ${cardStyles}`}>
                    {children}
                </article>
            </div>,
            document.querySelector('#root')!
        )
    }

    return null
})
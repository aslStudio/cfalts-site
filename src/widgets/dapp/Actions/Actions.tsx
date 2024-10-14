import React, { useMemo } from "react"

import { images } from "@/shared/lib/images"
import { WebpImage } from "@/shared/ui/WebpImage"
import { IconBase } from "@/shared/ui/IconBase"
import { useDeviceSize } from "@/shared/lib/hooks/useDeviceSize"

import styles from './Actions.module.scss'

export const Actions = () => {
    const { mobile, tablet, desktop } = useDeviceSize()

    const data = useMemo(() => {
        if (window.innerWidth < 769) {
            return [
                <FilterButton onClick={() => {}} />,
                <ActionButton onClick={() => {}}>BUY LAND</ActionButton>,
                <ActionButton onClick={() => {}}>STATISTICS</ActionButton>,
                <ActionButton onClick={() => {}}>BUY TOKEN</ActionButton>,
                <ActionButton onClick={() => {}}>HIDE STAKED</ActionButton>,
                <ActionButton onClick={() => {}}>BUY NFT</ActionButton>,
                <AttachButton onClick={() => {}} />,
                <ActionButton onClick={() => {}}>SUPPORT</ActionButton>,
            ]
        }

        if (window.innerWidth >= 769 && window.innerWidth < 1920) {
            return [
                <AttachButton onClick={() => {}} />,
                <ActionButton onClick={() => {}}>STATISTICS</ActionButton>,
                <ActionButton onClick={() => {}}>HIDE STAKED</ActionButton>,
                <ActionButton onClick={() => {}}>BUY LAND</ActionButton>,
                <FilterButton onClick={() => {}} />,
                <ActionButton onClick={() => {}}>BUY TOKEN</ActionButton>,
                <ActionButton onClick={() => {}}>BUY NFT</ActionButton>,
                <ActionButton onClick={() => {}}>SUPPORT</ActionButton>,
            ]
        }

        return [
            <FilterButton onClick={() => {}} />,
            <ActionButton onClick={() => {}}>STATISTICS</ActionButton>,
            <ActionButton onClick={() => {}}>HIDE STAKED</ActionButton>,
            <ActionButton onClick={() => {}}>BUY LAND</ActionButton>,
            <ActionButton onClick={() => {}}>BUY TOKEN</ActionButton>,
            <ActionButton onClick={() => {}}>BUY NFT</ActionButton>,
            <ActionButton onClick={() => {}}>SUPPORT</ActionButton>,
        ]
    }, [mobile, tablet, desktop])

    return (
        <div className={styles.root}>
            {data.map(item => item)}
        </div>
    )
}

const AttachButton: React.FC<{
    className?: string
    onClick: () => void
}> = ({
    className,
    onClick
}) => {
    return (
        <button 
            className={`${styles.attach} ${className ? className : ''}`}
            onClick={onClick}
        >
            <WebpImage 
                className={styles['attach-bg']}
                src={images.dapp['attach-bg']} 
                alt="attach-bg"
            />
            <p>ATTACK GAME</p>
        </button>
    )
}

const FilterButton: React.FC<{
    className?: string
    onClick: () => void
}> = ({
    className,
    onClick
}) => {
    return (
        <button 
            className={`${styles.button} ${className ? className : ''}`}
            onClick={onClick}
        >
            <p>FILTER</p>
            <IconBase 
                className={styles['button-icon']}
                type={'icon-filter'}
            />
        </button>
    )
}

const ActionButton: React.FC<React.PropsWithChildren<{
    className?: string
    onClick: () => void
}>> = ({
    className,
    children,
    onClick
}) => (
    <button 
        className={`${styles.button} ${className ? className : ''}`}
        onClick={onClick}
    >
        {children}
    </button>
)
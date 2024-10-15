import React, { useMemo } from 'react'

import { IconBase } from '@/shared/ui/IconBase'

import { NFT, Rarity } from '../../model'
import { getRarityText } from '../../lib'

import styles from './NFTCard.module.scss'
import { Button } from '@/shared/ui/Button'
import { images } from '@/shared/lib/images'

export type NFTCardProps = {
    id: number | string
    img: string
    rarity?: Rarity
    className?: string
    gen: number
    isSelected: boolean
    onClick: () => void
}

export const NFTCard = React.memo<NFTCardProps>(({
    id,
    rarity,
    img,
    gen,
    className,
    isSelected,
    onClick,
}) => {
    const classes = useMemo(() => [
        styles.root,
        styles[`is-${getRarityText(rarity).replace('/', '').toLowerCase()}`],
        className ? className : '',
        isSelected && styles['is-selected'],
        typeof id === 'number' ? styles['is-active'] : ''
    ].join(' '), [id, className, rarity, isSelected])

    const rarityText = useMemo(() => {
        if (window.innerWidth < 769) {
            return getRarityText(rarity)
        }

        return `Rarity: ${getRarityText(rarity)}`
    }, [rarity])

    return (
        <div 
            className={classes}
            onClick={onClick}
        >
            <div className={styles.avatar}>
                <img 
                    src={img}
                    alt='image'
                />
            </div>
            <div className={`${styles.row} ${styles['first-row']}`}>
                <p className={styles.id}>ID: {id}</p>
                <p className={styles.gen}>GEN#{gen}</p>
            </div>
            <div className={`${styles.row} ${styles['second-row']}`}>
                <p className={styles.rarity}>{rarityText}</p>
                {rarity !== undefined && (
                    <IconBase 
                        className={styles.icon}
                        type={'icon-etherscan'}
                    />
                )}
                {/*{typeof id === 'number' && (*/}
                {/*    <button */}
                {/*        className={styles.button}*/}
                {/*    >*/}
                {/*        <img*/}
                {/*            src={`${images.dapp['card-bg']}.png`}*/}
                {/*            alt='bg'*/}
                {/*        />*/}
                {/*        <p>{isSelected ? 'SELECT NFT TO UNSTAKE' : 'SELECT NFT TO STAKE'}</p>*/}
                {/*    </button>*/}
                {/*)}*/}
            </div>
        </div>
    )
})
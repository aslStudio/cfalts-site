import React, { useMemo } from "react"

import { images } from "@/shared/lib/images"

import { NFT } from "../../model"
import { NFTCard } from "../NFTCard"

import styles from './NFTList.module.scss'

export type NFTListProps = {
    list: NFT[]
    selectedList: NFT[]
    isLoading?: boolean
    gen: number
    onSelect: (v: NFT) => void
}

export const NFTList = React.memo<NFTListProps>(({
    list,
    selectedList,
    isLoading,
    gen,
    onSelect
}) => {
    const data = useMemo(() => {
        if (window.innerWidth < 769) {
            if (list.length % 2 !== 0) {
                return [
                    ...list,
                    ...Array(2 - list.length % 2).fill(1).map(item => ({
                        id: 'N/A',
                        img: `${images.dapp.placeholder}.png`,
                        rarity: undefined,
                        gen,
                    }))
                ]
            }

            return list
        }

        if (window.innerWidth < 1200) {
            if (list.length % 3 !== 0) {
                return [
                    ...list,
                    ...Array(3 - list.length % 3).fill(1).map(item => ({
                        id: 'N/A',
                        img: `${images.dapp.placeholder}.png`,
                        rarity: undefined,
                        gen,
                    }))
                ]
            }

            return list
        }

        if (window.innerWidth < 1920) {
            if (list.length % 4 !== 0) {
                return [
                    ...list,
                    ...Array(4 - list.length % 4).fill(1).map(item => ({
                        id: 'N/A',
                        img: `${images.dapp.placeholder}.png`,
                        rarity: undefined,
                        gen,
                    }))
                ]
            }

            return list
        }

        if (list.length % 5 !== 0) {
            return [
                ...list,
                ...Array(5 - list.length % 5).fill(1).map(item => ({
                    id: 'N/A',
                    img: `${images.dapp.placeholder}.png`,
                    rarity: undefined,
                    gen,
                }))
            ]
        }

        return list
    }, [list])

    const skeletonList = useMemo(() => {
        if (window.innerWidth < 769) {
            return 6
        }

        if (window.innerWidth < 1200) {
            return 6
        }

        if (window.innerWidth < 1920) {
            return 8
        }

        return 10
    }, [])

    return (
        <div className={`${styles.root} ${isLoading ? styles['is-loading'] : styles['is-content']}`}>
            <div className={`${styles.list} ${styles.loader}`}>
                {Array(skeletonList).fill(1).map(item => (
                    <NFTCard 
                        id={'N/A'}
                        isSelected={false}
                        className={styles.item}
                        img={`${images.dapp.placeholder}.png`}
                        gen={gen}
                        onClick={() => {}}
                    />
                ))}
            </div>
            <div className={`${styles.list} ${styles.content}`}>
                {data.map(item => (
                    <NFTCard 
                        {...item}
                        className={styles.item}
                        isSelected={selectedList.findIndex(s => s.id === item.id) !== -1}
                        gen={gen}
                        onClick={() => {
                            if (typeof item.id !== 'string') {
                                onSelect(item as NFT)
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    )
})
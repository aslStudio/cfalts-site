import React, {useEffect, useMemo, useRef, useState} from "react"

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
    const rootRef = useRef<HTMLDivElement | null>(null)
    const [length, setLength] = useState(2)
    const [width, setWidth] = useState('calc(50% - 10px)')

    const data = useMemo(() => {
        if (list.length % length !== 0 && list.length > length) {
            return [
                ...list,
                ...Array(length - list.length % length).fill(1).map(() => ({
                    id: 'N/A',
                    img: `${images.dapp.placeholder}.png`,
                    rarity: undefined,
                    gen,
                }))
            ]
        }

        if (list.length < length * 2) {
            return [
                ...list,
                ...Array(length * 2 - list.length).fill(1).map(() => ({
                    id: 'N/A',
                    img: `${images.dapp.placeholder}.png`,
                    rarity: undefined,
                    gen,
                }))
            ]
        }

        return list
    }, [list, length, gen])

    function resizeHandler() {
        function getCardWidth() {
            if (window.innerWidth < 769) {
                return 170
            }

            if (window.innerWidth <= 1200) {
                return 210
            }

            return 260
        }

        function getSpaceSize() {
            if (window.innerWidth < 769) {
                return 10
            }

            if (window.innerWidth >= 769 && window.innerWidth < 1920) {
                return 30
            }

            return 40
        }

        if (rootRef.current) {
            const parentWidth = rootRef.current!.getBoundingClientRect().width
            const cardWidth = getCardWidth()
            const spaceSize = getSpaceSize()

            const firstCount = Math.floor(parentWidth / cardWidth)
            const firstSpacesWidth = parentWidth - firstCount * cardWidth

            if (Math.floor(firstSpacesWidth / spaceSize) >= firstCount - 1) {
                setLength(firstCount)
                setWidth(`calc(${100 / firstCount}% - ${spaceSize}px)`)
            } else {
                setLength(firstCount - 1)
                setWidth(`calc(${100 / (firstCount - 1)}% - ${spaceSize}px)`)
            }
        }
    }

    useEffect(() => {
        resizeHandler()
        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, []);

    return (
        <div
            ref={rootRef}
            className={`${styles.root} ${isLoading ? styles['is-loading'] : styles['is-content']}`}
        >
            <div className={`${styles.list} ${styles.loader}`}>
                {Array(length).fill(1).map(item => (
                    <div
                        className={styles.item}
                        style={{
                            width,
                        }}
                    >
                        <NFTCard
                            id={'N/A'}
                            isSelected={false}
                            img={`${images.dapp.placeholder}.png`}
                            gen={gen}
                            onClick={() => {}}
                        />
                    </div>
                ))}
            </div>
            <div className={`${styles.list} ${styles.content}`}>
                {data.map(item => (
                    <div
                        className={styles.item}
                        style={{
                            width,
                        }}
                    >
                        <NFTCard
                            {...item}
                            isSelected={selectedList.findIndex(s => s.id === item.id) !== -1}
                            gen={gen}
                            onClick={() => {
                                if (typeof item.id !== 'string') {
                                    onSelect(item as NFT)
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
})
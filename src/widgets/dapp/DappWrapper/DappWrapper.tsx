import React from "react"

import { IconBase } from "@/shared/ui/IconBase"

import { Aside } from '../Aside'
import { Gens } from '../Gens'
import { Actions } from "../Actions"

import styles from './DappWrapper.module.scss'

export const DappWrapper: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    return (
        <div className={styles.root}>
            <Aside />
            <div className={styles.wrapper}>
                <Gens />
                <Actions />
                <div className={styles.balance}>
                    <IconBase 
                        type={'icon-coin'}
                    />
                    <p>182,928,037</p>
                </div>
                {children}
            </div>
        </div>
    )
}
import React, {useMemo} from "react";

import styles from './ModalConnectWallet.module.scss'
import {IconBase, IconBaseProps} from "@/shared/ui/IconBase";
import { images } from "@/shared/lib/images";
import { WebpImage } from "@/shared/ui/WebpImage";
import { Modal } from "@/shared/ui/Modal";

export type ModalConnectWalletProps = {
    isOpen: boolean
    onClose: (v: boolean) => void
}

export const ModalConnectWallet = React.memo<ModalConnectWalletProps>(({
    isOpen,
    onClose
}) => {
    return (
        <Modal 
            isOpen={isOpen} 
            cardStyles={styles.card}
            onClose={() => onClose(false)}
        >
            <WebpImage
                className={styles.background}
                src={images.connectWallet.background}
                alt={'background'}
            />
            {isOpen && (
                <div className={styles.particles}>
                    {Array(50)
                        .fill(0)
                        .map((_, key) => (
                            <div key={key} className={styles['circle-container']}>
                                <div className={styles['circle']}/>
                            </div>
                        ))}
                </div>
            )}
            <button className={styles.close} onClick={() => onClose(false)}>
                <IconBase type={'icon-close'}/>
            </button>
            <div className={styles.wrapper}>
                <WebpImage
                    className={styles.logo}
                    src={images.connectWallet.logo}
                    alt={'logo'}
                />
                <h4 className={styles.title}>Connect to Cryptoflats</h4>
                <Cell type={'metamask'} badge={'Popular'} onClick={() => onClose(false)}/>
                <Cell type={'coinbase'} onClick={() => onClose(false)}/>
                <Cell type={'wallet'} onClick={() => onClose(false)}/>
            </div>
            <img
                className={styles.boy}
                src={`${images.connectWallet.boy}.png`}
                alt={'boy'}
                loading={'lazy'}
            />
        </Modal>
    )
})

export type CellProps = {
    type: 'metamask' | 'wallet' | 'coinbase'
    badge?: string
    onClick: (v: CellProps['type']) => void
}

const Cell = React.memo<CellProps>(({
    type,
    badge,
    onClick,
}) => {
    const icon = useMemo<IconBaseProps['type']>(() => {
        switch (type) {
            case "wallet": return 'icon-connect-wallet'
            case "coinbase": return 'icon-coinbase'
            case "metamask": return 'icon-metamask'
        }
    }, [type])

    const title = useMemo(() => {
        switch (type) {
            case "wallet": return 'Wallet connect'
            case "coinbase": return 'Coinbase wallet'
            case "metamask": return 'Metamask'
        }
    }, [type])

    return <button className={styles.cell} onClick={() => onClick(type)}>
        <IconBase className={styles.icon} type={icon} />
        <p className={styles.title}>{title}</p>
        {badge && (
            <span className={styles.badge}>{badge}</span>
        )}
    </button>
})
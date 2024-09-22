import React, { useEffect, useMemo, useState } from "react"

import { Modal } from "@/shared/ui/Modal"
import { WebpImage } from "@/shared/ui/WebpImage"
import { images } from "@/shared/lib/images"

import styles from './TokenSaleModal.module.scss'
import { Button } from "@/shared/ui/Button"

export type TokenSaleModalProps = {
    isOpen: boolean
    onClose: () => void
}

export const TokenSaleModal = React.memo<TokenSaleModalProps>(({
    isOpen,
    onClose
}) => {
    const [pay, setPay] = useState(0)
    const [receive, setReceive] = useState(0)

    const isWallet = true

    const buttonText = useMemo(() => {
        if (isWallet) {
            return 'BUY $CFLAT TOKENS'
        }

        return 'CONNECT WALLET'
    }, [isWallet])

    useEffect(() => {
        setReceive(pay / 10)
    }, [pay])

    return (
        <Modal 
            isOpen={isOpen} 
            cardStyles={styles.card}
            onClose={onClose}
        >
            <WebpImage 
                className={styles.boy}
                src={images.connectWallet.boy}
                alt={'boy'}
            />
            <Header isWallet={isWallet} />
            <SaleSection 
                type="pay"
                balance={0}
                value={pay}
                max={1000}

                onInput={setPay}
                onMax={() => setPay(1000)}
            />
            <SaleSection 
                type="receive"
                balance={0}
                value={receive}
            />
            <Button 
                className={styles.button}
                size="l" 
                view="pink" 
                onClick={onClose}
            >
                {buttonText}
            </Button>
        </Modal>
    )
})

type HeaderProps = {
    isWallet: boolean
}

const Header = React.memo<HeaderProps>(({ isWallet }) => {
    const icon = useMemo(() => {
        if (isWallet) {
            return images.common.buyer
        }

        return images.common.wallet
    }, [isWallet])
    
    const title = useMemo(() => {
        if (isWallet) {
            return '0x19Fn5... 1dB7'
        }

        return 'Token sale buyer'
    }, [isWallet])

    const course = useMemo(() => {
        if (window.innerWidth >= 769) {
            return '1 $CFLAT = 0.00007$'
        }

        return '0.00007$'
    }, [])

    return <div className={styles.header}>
        <div className={styles.row}>
            <WebpImage src={icon} alt="icon" />
            <p>{title}</p>
        </div>
        <p>{course}</p>
    </div>
})

type SaleSectionProps = {
    value: number
    type: 'pay' | 'receive'
    balance: number
    max?: number

    onInput?: (v: number) => void
    onMax?: () => void
}

const SaleSection = React.memo<SaleSectionProps>(({
    type,
    balance,
    value,
    max,
    onMax,
    onInput,
}) => {
    const [selectValue, setSelectValue] = useState(1)

    const title = useMemo(() => {
        if (type === 'pay') {
            return 'You pay'
        }

        return 'You receive'
    }, [type])

    const data = useMemo(() => {
        if (type === 'pay') {
            return [
                {
                    id: 1,
                    text: 'ETH',
                    icon: images.common.eth,
                },
                {
                    id: 2,
                    text: 'CFLAT',
                    icon: images.common.cflat,
                },
            ]
        }

        return [
            {
                id: 1,
                text: 'CFLAT',
                icon: images.common.cflat,
            }
        ]
    }, [type])

    return (
        <div className={styles['sale-section']}>
            <p className={styles.text}>{title}</p>
            <div className={styles.row}>
                <input 
                    className={styles.input}
                    value={`${value}`}
                    disabled={type === 'receive'}
                    type={'number'}
                    max={max}
                    onChange={e => onInput?.(Number(e.target.value))}
                />
                <Select 
                    value={selectValue}
                    data={data}
                    isDisabled={type === 'receive'}
                    onChange={setSelectValue}
                />
            </div>
            <div className={styles.row}>
                <p className={styles.text}>Balance: {balance}</p>
                {type === 'pay' && (
                    <button onClick={onMax}>max</button>
                )}
            </div>
        </div>
    )
})

type SelectProps = {
    value: number
    data: {
        id: number
        icon: string,
        text: string
    }[]
    isDisabled?: boolean
    onChange: (id: number) => void
}

const Select = React.memo<SelectProps>(({
    value,
    data,
    isDisabled = false,
    onChange
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const activeItem = useMemo(() => {
        return data.find(item => item.id === value)!
    }, [value])

    return (
        <>
            <div 
                className={`${styles.select} ${isOpen ? styles['is-active'] : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={styles['select-wrapper']}>
                    <WebpImage 
                        className={styles['select-icon']}
                        src={activeItem.icon} 
                        alt="icon" 
                    />
                    <p 
                        className={styles['select-title']}
                    >
                        {activeItem.text}
                    </p>
                </div>
                {!isDisabled && (
                    <WebpImage 
                        className={styles.chevron}
                        src={images.common.chevronBottom}
                        alt="chevron"
                    />
                )}
                {!isDisabled && (
                    <div 
                        className={`${styles.dropdown}`}
                    >
                        {data.map(item => (
                            <div 
                                className={styles['dropdown-item']}
                                onClick={() => onChange(item.id)}
                            >
                                <WebpImage 
                                    src={item.icon} 
                                    alt="icon" 
                                />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
})
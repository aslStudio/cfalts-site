import React, { useEffect, useMemo, useState } from "react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"

import styles from './Slider.module.scss'
import { WebpImage } from "@/shared/ui/WebpImage"
import { images } from "@/shared/lib/images"

enum Gen {
    First,
    Second,
    Third,
    Fours,
    Fives,
    Six,
}

const GenArray = [
    Gen.First,
    Gen.Second,
    Gen.Third,
    Gen.Fours,
    Gen.Fives,
    Gen.Six
]

export const Slider = () => {
    const [ activeId, setActiveId ] = useState(Gen.First)

    useEffect(() => {
        console.log(activeId)
    }, [activeId])

    return (
        <section>
            <Tabs activeId={activeId} onSelect={setActiveId} />
            <Cards activeId={activeId} onSelect={setActiveId} />
        </section>
    )
}

type TabsProps = {
    activeId: Gen,
    onSelect: (v: Gen) => void
}

const Tabs = React.memo<TabsProps>(({
    activeId,
    onSelect
}) => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)

    const slidesPerView = useMemo(() => {
        if (window.innerWidth >= 769) {
            return 6
        }

        return 3
    }, [])

    useEffect(() => {
        if (
            swiper?.realIndex !== activeId && 
            window.innerWidth < 769
        ) {
            swiper?.slideToLoop(activeId)
        }
    }, [activeId, swiper])

    return (
        <Swiper
            className={styles.tabs}
            slidesPerView={slidesPerView}
            loop={window.innerWidth < 769}
            onSwiper={setSwiper}
            onSlideChange={(e: SwiperClass) => onSelect(e.realIndex)}
        >
            {GenArray.map(item => (
                <SwiperSlide className={styles['tab-slide']}>
                    <Tab 
                        id={item}
                        isActive={item === activeId}
                        onPress={onSelect}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
})

type TabProps = {
    id: number
    isActive: boolean
    onPress: (id: number) => void
}

const Tab = React.memo<TabProps>(({
    id,
    isActive,
    onPress
}) => {
    return (
        <button 
            className={`${styles.tab} ${isActive ? styles['is-active'] : ''}`}
            onClick={() => onPress(id)}
        >
            {`GEN#${id}`}
        </button>
    )
})

type CardsProps = {
    activeId: Gen,
    onSelect: (v: Gen) => void
}

const cardsData: Omit<CardProps, 'isActive'>[] = [
    {
        id: Gen.First,
        price: '0.03 ETH',
        title: 'GEN#0 NFT PASS',
        alert: '-30% off with $CFLAT',
        nfts: [
            images.mint.slider.gen0['0'],
            images.mint.slider.gen0['1'],
            images.mint.slider.gen0['2'],
        ],
        description: 'GEN#0 is a NFT passes, which gives excellent benefits in the project and provides the best conditions for participation for the first nft holders!',
    },
    {
        id: Gen.Second,
        date: '5/11/24',
        title: 'GEN#1 LIVING ROOMS',
        alert: '',
        nfts: [
            images.mint.slider.gen1['0'],
            images.mint.slider.gen1['1'],
            images.mint.slider.gen1['2'],
        ],
        description: 'GEN#1 is an isometric living rooms consisting of 5555 NFT tokens. By minting GEN#1, you will get random NFT of random rarity at one price.',
    },
    {
        id: Gen.Third,
        title: 'GEN#2 BEDROOMS',
        alert: '',
        nfts: [
            images.mint.slider.placeholder,
            images.mint.slider.placeholder,
            images.mint.slider.placeholder,
        ],
        description: 'GEN#2 is an isometric bedrooms consisting of 4444 NFT tokens. By minting GEN#2, you will get random NFT of random rarity at one price.',
    },
    {
        id: Gen.Fours,
        title: 'GEN#3 DINING ROOMS',
        alert: '',
        nfts: [
            images.mint.slider.placeholder,
            images.mint.slider.placeholder,
            images.mint.slider.placeholder,
        ],
        description: 'GEN#3 is an isometric dining rooms consisting of 3333 NFT tokens. By minting GEN#3, you will get random NFT of random rarity at one price.',
    },
    {
        id: Gen.Fives,
        title: 'GEN#4 PLAY ROOMS',
        alert: '',
        nfts: [
            images.mint.slider.placeholder,
            images.mint.slider.placeholder,
            images.mint.slider.placeholder,
        ],
        description: 'GEN#4 is an isometric living rooms consisting of 2222 NFT tokens. By minting GEN#4, you will get random NFT of random rarity at one price.',
    },
    {
        id: Gen.Six,
        title: 'GEN#5 SECRET ROOMS',
        alert: '',
        nfts: [
            images.mint.slider.placeholder,
            images.mint.slider.placeholder,
            images.mint.slider.placeholder,
        ],
        description: 'GEN#5 is an isometric living rooms consisting of 1111 NFT tokens. By minting GEN#5, you will get random NFT of random rarity at one price.',
    }
]

const Cards = React.memo<CardsProps>(({
    activeId,
    onSelect
}) => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)

    const slidesPerView = useMemo(() => {
        if (window.innerWidth >= 1200) {
            return 'auto'
        }

        return 1
    }, [])

    useEffect(() => {
        if (
            swiper?.realIndex !== activeId
        ) {
            swiper?.slideToLoop(activeId)
        }
    }, [activeId, swiper])

    return (
        <Swiper
            loop={true}
            slidesPerView={slidesPerView}
            spaceBetween={10}
            centeredSlides={true}
            onSwiper={setSwiper}
            onSlideChange={(e: SwiperClass) => onSelect(e.realIndex)}
        >
            {cardsData.map(item => (
                <SwiperSlide className={styles['card-slider']}>
                    <Card {...item} isActive={item.id === activeId} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
})

type CardProps = {
    id: Gen
    title: string
    alert: string
    nfts: string[]
    description: string
    price?: string
    date?: string

    isActive: boolean
}

const Card = React.memo<CardProps>(({
    id,
    title,
    alert,
    nfts,
    description,
    price,
    date,
    isActive
}) => {
    const classes = useMemo(() => [
        styles.card,
        styles[`view-${id}`],
        isActive ? styles['is-active'] : ''
    ].join(' '), [isActive, id])

    const label = useMemo(() => {
        if (price) {
            return `Public price: ${price}`
        }
        if (date) {
            return `MINT DATE - ${date}`
        }

        return `MINT DATE - TDA`
    }, [])

    return (
        <div className={classes}>
            <p className={styles['card-title']}>{label}</p>
            <article className={styles['card-article']}>
                <p className={styles['card-article-title']}>{title}</p>
                <p className={styles['card-article-alert']}>{alert}</p>
                <WebpImage
                    className={styles['card-article-boy']}
                    src={images.connectWallet.boy}
                    alt="boy"
                />
                <div className={styles['card-article-nfts']}>
                    {nfts.map(item => (
                        <WebpImage 
                            src={item}
                            alt="gen"
                        />
                    ))}
                    <WebpImage
                        className={styles['card-radial']}
                        src={images.mint.slider.radials[`${id}`]}
                        alt="decoration"
                    />
                </div>
                {window.innerWidth >= 769 && (
                    <p className={styles['card-article-description']}>{description}</p>
                )}
                <div className={styles.quantity}>
                    <p>Set quantity</p>
                    <input type="number" value={1} />
                </div>
                <div>
                    <p>Set currency</p>
                    <CurrencyTabs />
                </div>
            </article>
            {window.innerWidth < 769 && (
                <p 
                    className={`${styles['card-article-description']} container`}
                >
                    {description}
                </p>
            )}
        </div>
    )
})

const CurrencyTabs = React.memo(() => {
    const [active, setIsActive] = useState(0)

    return (
        <div className={styles['currency-tabs']}>
            <button className={`${active === 0 ? styles['is-active'] : ''}`}>ETH</button>
            <button className={`${active === 1 ? styles['is-active'] : ''}`}>USDT</button>
            <button className={`${active === 2 ? styles['is-active'] : ''}`}>CFLAT</button>
        </div>
    )
})
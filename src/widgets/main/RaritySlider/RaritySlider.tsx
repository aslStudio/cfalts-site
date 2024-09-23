import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

import 'swiper/css';

import styles from './RaritySlider.module.scss'
import React, { useCallback, useMemo, useState } from 'react';
import { WebpImage } from '@/shared/ui/WebpImage';
import { images } from '@/shared/lib/images';

type SlideTypes =
	| 'goldPass'
	| 'diamondPass'
	| 'standardFlats'
	| 'silverFlats'
	| 'goldFlats'
	| 'diamondFlats'

export const RaritySlider = () => {
	const [swiper, setSwiper] = useState<SwiperClass | null>(null)
	const [activeIndex, setActiveIndex] = useState(0)

	const classes = useMemo(() => [
		styles.pagination,
		window.innerWidth > 1200 ? '' : 'container'
	], [])

	const getTabClasses = useCallback((index: number) => {
		const list = [
			styles.tab
		]

		if (index === activeIndex) {
			list.push(styles['is-active'])
		}

		return list.join(' ')
	}, [activeIndex])

	return (
		<div className={styles.parent}>
			<div className={classes.join(' ')}>
				<div className={styles.row}>
					<button
						className={getTabClasses(0)}
						onClick={() => swiper?.slideTo(0)}
					>
						GOLD PASS
					</button>
					<button
						className={getTabClasses(1)}
						onClick={() => swiper?.slideTo(1)}
					>
						DIAMOND PASS
					</button>
					<button
						className={getTabClasses(2)}
						onClick={() => swiper?.slideTo(2)}
					>
						STANDARD FLATS
					</button>
				</div>
				<div className={styles.row}>
					<button
						className={getTabClasses(3)}
						onClick={() => swiper?.slideTo(3)}
					>
						SILVER FLATS
					</button>
					<button
						className={getTabClasses(4)}
						onClick={() => swiper?.slideTo(4)}
					>
						GOLD FLATS
					</button>
					<button
						className={getTabClasses(5)}
						onClick={() => swiper?.slideTo(5)}
					>
						DIAMOND FLATS
					</button>
				</div>
			</div>
			<div className={styles['content-wrapper']}>
				<Background activeIndex={activeIndex} />
				<Swiper
					className={styles.root}
					speed={1000}
					slidesPerView={1}
					onSwiper={setSwiper}
					onSlideChange={(e: SwiperClass) => setActiveIndex(e.activeIndex)}
				>
					<SwiperSlide className={styles.slide}>
						<Slide type={'goldPass'} isActive={activeIndex === 0} />
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Slide type={'diamondPass'} isActive={activeIndex === 1} />
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Slide type={'standardFlats'} isActive={activeIndex === 2} />
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Slide type={'silverFlats'} isActive={activeIndex === 3} />
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Slide type={'goldFlats'} isActive={activeIndex === 4} />
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Slide type={'diamondFlats'} isActive={activeIndex === 5} />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

type BackgroundProps = {
	activeIndex: number
}

const Background = React.memo<BackgroundProps>(({
	activeIndex
}) => {

	return (
		<div className={styles['bg-wrapper']}>
			<WebpImage
				className={activeIndex === 0 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.gold}
				alt={'background'}
			/>
			<WebpImage
				className={activeIndex === 1 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.diamond}
				alt={'background'}
			/>
			<WebpImage
				className={activeIndex === 2 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.standart}
				alt={'background'}
			/>
			<WebpImage
				className={activeIndex === 3 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.silver}
				alt={'background'}
			/>
			<WebpImage
				className={activeIndex === 4 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.gold}
				alt={'background'}
			/>
			<WebpImage
				className={activeIndex === 5 ? styles['is-active'] : ''}
				src={images.main.slider.backgrounds.diamond}
				alt={'background'}
			/>
			<div className={styles.overlay}/>
		</div>
	)
})

type SliderProps = {
	type: SlideTypes
	isActive: boolean
}

const Slide = React.memo<SliderProps>(({
   type,
   isActive
}) => {
	const content = useMemo(() => {
		const data: Record<SlideTypes, string[]> = {
			goldPass: [
				'Adds +10% income of all staked NFTs',
				'50% discount on land for purchase GEN#2 - GEN#4',
				'30% discount on land for purchase GEN#5',
				'Private chat and airdrop conditions',
				'Golden tick on our discord channel',
			],
			diamondPass: [
				'Adds +20% income of all staked NFTs',
				'Free purchase of land for acquisition GEN#2, GEN#3',
				'70% discount on land for purchase GEN#4, GEN#5',
				'Private chat and airdrop conditions',
				'Diamond tick on our discord channel',
			],
			standardFlats: [
				'Approximate Quantity - 3490 pcs',
				'Income per day (Staking) - 3,000 $CFLAT',
				'Staking days - 180',
				'Claim to unstake - after 5 days',
				'Token claim - 100% to wallet',
			],
			silverFlats: [
				'Approximate Quantity - 835 pcs',
				'Net Income per day (Staking) - 4,000 $CFLAT',
				'Staking days - 180',
				'Claim to unstake - after 5 days',
				'Token claim - 100% to wallet',
			],
			goldFlats: [
				'Approximate Quantity - 555 pcs',
				'Net Income per day (Staking) - 5,000 $CFLAT',
				'Staking days - 180',
				'Claim to unstake - after 5 days',
				'Token claim - 100% to wallet',
			],
			diamondFlats: [
				'Approximate Quantity - 225 pcs',
				'Net Income per day (Staking) - 6,000 $CFLAT',
				'Staking days - 180',
				'Claim to unstake - after 5 days',
				'Token claim - 100% to wallet',
			],
		}

		return data[type]
	}, [type])

	const roomClasses = useMemo(() => [
		isActive ? styles['is-active'] : '',
		styles.room
	].join(' '), [isActive])

	const cardClasses = useMemo(() => [
		isActive ? styles['is-active'] : '',
		styles.card,
	].join(' '), [isActive])

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<WebpImage
					className={roomClasses}
					src={images.main.slider.elements[type]}
					alt={'room'}
				/>
				<div className={cardClasses}>
					{content.map((item, key) => (
						<p key={`slider-${key}`}>{item}</p>
					))}
				</div>
			</div>
		</div>
	)
})
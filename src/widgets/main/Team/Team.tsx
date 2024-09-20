import styles from './Team.module.scss'
import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '@/shared/assets/images';
import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
import {InfoSection} from "@/shared/ui/InfoSection";

export const Team = () => {
	const { ref, classes } = useScrollAnimation()

	const isMobile = useMemo(() => {
		return window.innerWidth < 769
	}, [])

	return (
		<div className={styles.root}>
			<InfoSection
				sectionRef={ref}
				className={`container ${classes}`}
				title={'TEAM'}
				description={'Cryptoflats was conceived by two passionate architects with a deep appreciation for blockchain and NFT technologies. Their creative vision, unbounded by technical constraints, enabled the development of a vibrant and stylish interior collection that seamlessly weaves elements of surrealism and comfort into a captivating fusion of art and design.'}
				view={'red'}
			/>
			{isMobile ? <Slider /> : <Rows />}
		</div>
	)
}

const Rows = () => {
	const row1 = [
		{
			src: images.Main.Team['1'],
			name: 'Andrew Archie',
			description: 'Architect and designer \n Dreamer, riding orka',
			index: 1,
		},
		{
			src: images.Main.Team['2'],
			name: 'Nice Arti',
			description: 'Blockchain Developer \n Give me Lamborghini',
			index: 2,
		},
	]
	const row2 = [
		{
			src: images.Main.Team['3'],
			name: 'Max Frei (MO)',
			description: 'Architect and designer \n NFT world traveler',
			index: 3,
		},
		{
			src: images.Main.Team['4'],
			name: 'Three Five Seven',
			description: 'WEB3 Marketing \n Runs from runs',
			index: 4,
		},
	]

	return (
		<div className={styles['main-row']}>
			<div className={styles.row}>
				{row1.map(item => (
					<UserCell key={item.index} {...item} />
				))}
			</div>
			<div className={styles.row}>
				{row2.map(item => (
					<UserCell key={item.index} {...item} />
				))}
			</div>
		</div>
	)
}

const Slider = () => {
	const data = [
		{
			src: images.Main.Team['1'],
			name: 'Andrew Archie',
			description: 'Architect and designer \n Dreamer, riding orka',
			index: 1,
		},
		{
			src: images.Main.Team['2'],
			name: 'Nice Arti',
			description: 'Blockchain Developer \n Give me Lamborghini',
			index: 2,
		},
		{
			src: images.Main.Team['3'],
			name: 'Max Frei (MO)',
			description: 'Architect and designer \n NFT world traveler',
			index: 3,
		},
		{
			src: images.Main.Team['4'],
			name: 'Three Five Seven',
			description: 'WEB3 Marketing \n Runs from runs',
			index: 4,
		},
	]

	return (
		<Swiper
			className={styles.slider}
			slidesPerView={1}
		>
			{data.map(item => (
				<SwiperSlide key={item.index} className={styles.slide}>
					<UserCell {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

const UserCell = React.memo<{
	src: string
	name: string
	description: string
	index: number
}>(({
	src,
	name,
	description,
	index
}) => {
	return (
		<article className={styles.cell}>
			<img className={styles[`avatar-${index}`]} src={src} alt={'avatar'} />
			<p className={styles.title}>{name}</p>
			<p className={styles.description}>{description}</p>
		</article>
	)
})
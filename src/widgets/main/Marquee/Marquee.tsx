import Marquee from 'react-fast-marquee';

import { images } from '@/shared/assets/images';

import styles from './Marquee.module.scss'

export const MarqueeSection = () => {
	return (
		<div>
			<Marquee speed={50} className={styles.row} autoFill={true}>
				{Object.values(images.Main.Marquee.first).map((item, key) => (
					<img
						className={styles.image}
						key={key}
						src={item}
						alt={`img-${key}`}
					/>
				))}
			</Marquee>
			<Marquee speed={100} className={styles.row} direction={'right'} autoFill={true}>
				{Object.values(images.Main.Marquee.second).map((item, key) => (
					<img
						className={styles.image}
						key={key}
						src={item}
						alt={`img-${key}`}
					/>
				))}
			</Marquee>
			<Marquee speed={150} className={styles.row} autoFill={true}>
				{Object.values(images.Main.Marquee.third).map((item, key) => (
					<img
						className={styles.image}
						key={key}
						src={item}
						alt={`img-${key}`}
					/>
				))}
			</Marquee>
		</div>
	)
}
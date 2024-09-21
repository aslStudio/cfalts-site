import Marquee from 'react-fast-marquee';

import styles from './Marquee.module.scss'
import { WebpImage } from '@/shared/ui/WebpImage';
import { images } from '@/shared/lib/images';

export const MarqueeSection = () => {
	return (
		<div>
			<Marquee speed={50} className={styles.row} autoFill={true}>
				{Object.values(images.main.marquee.first).map((item, key) => (
					<WebpImage
						className={styles.image}
						key={key}
						src={item}
						alt={`img-${key}`}
					/>
				))}
			</Marquee>
			<Marquee speed={75} className={styles.row} direction={'right'} autoFill={true}>
				{Object.values(images.main.marquee.second).map((item, key) => (
					<WebpImage
						className={styles.image}
						key={key}
						src={item}
						alt={`img-${key}`}
					/>
				))}
			</Marquee>
			<Marquee speed={100} className={styles.row} autoFill={true}>
				{Object.values(images.main.marquee.third).map((item, key) => (
					<WebpImage
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
import { IconBase } from '@/shared/ui/IconBase';
import { useMemo } from 'react';
import { Button } from '@/shared/ui/Button';
import { images } from '@/shared/lib/images';
import { WebpImage } from '@/shared/ui/WebpImage';

import styles from './Info.module.scss'

export const Info = () => {
	const containerClasses = useMemo(() => [
		styles.wrapper,
		window.innerWidth >= 769 ? 'container' : ''
	].join(' '), [])

	return <section className={styles.root}>
		<div className={containerClasses}>
			<PromoCard />
			<MintCard />
		</div>
	</section>
}

const PromoCard = () => (
	<article className={styles['promo-card']}>
		<video
			className={`${styles.video} lazy`}
			autoPlay={true}
			loop={true}
			muted={true}
			poster={images.main.info.game.preview}
			preload='none'
		>
			<source src={'/videos/promo.mp4'} type={'video/mp4'} />
		</video>
		<div className={styles['card-container']}>
			<p className={styles.title}>CFLATS GAME </p>
			<p className={styles.description}>
				is released
				<IconBase type={'icon-rocket'} />
			</p>
			<Button className={styles.button} onClick={() => {
			}}>JOIN WAITLIST</Button>
		</div>
	</article>
)

const MintCard = () => {
	return (
		<article className={styles['mint-card']}>
			{Array(6).fill(1).map((_, key) => (
				<div key={key} className={styles[`image-${key + 1}`]}>
					<WebpImage
						src={images.main.info.mint[`${key + 1}` as keyof typeof images.main.info.mint]}
						alt={`image-${key + 1}`}
					/>
				</div>
			))}
			<div className={styles['card-container']}>
				<p className={styles.title}>
					DISCOVER
					<br />
					OUR NFT
				</p>
				<Button className={styles.button} onClick={() => {}}>MINT PAGE</Button>
			</div>
		</article>
	)
}
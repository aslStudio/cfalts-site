import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
import { images } from '@/shared/lib/images';
import { WebpImage } from '@/shared/ui/WebpImage';

import styles from './Game.module.scss'

export const Game = () => {
	const { ref, classes, isShowed } = useScrollAnimation()

	return (
		<section className={`${styles.root} container`}>
			<div ref={ref} className={`${styles.wrapper} ${classes}`}>
				<h3 className={styles.title}>CFLATS GAME</h3>
				<p className={styles.description}>
					Our project is about design, entertainment and interaction. We want to unite everyone who liked our project into one big and friendly community.
					<br />
					<br />
					The first round, which marks the beginning of entertainment content of Cryptoflats is a CFLATS GAME - a telegram clicker app that provides you to accumulate inner game coins $CFL and then swapping it to $CFLAT token.
					<br />
					<br />
					Construct your own Cryptoflat and join to free whitelist after reaching of 2,000,000 $CFL coins.
				</p>
			</div>
			<div className={styles.image}>
				<WebpImage
					className={`${styles['image-left']} ${isShowed ? styles['is-active'] : ''}`}
					src={images.main.game.phoneLeft}
					alt={'phone-left'}
				/>
				<WebpImage
					className={`${styles['image-right']} ${isShowed ? styles['is-active'] : ''}`}
					src={images.main.game.phoneRight}
					alt={'phone-left'}
				/>
			</div>
		</section>
	)
}
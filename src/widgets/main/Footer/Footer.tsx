import { images } from '@/shared/assets/images';

import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={`${styles.root} container`}>
			<a
				className={styles.litepaper}
				href={'https://docs.cryptoflats.io/'}
				target={'_blank'}
				rel={'noreferrer noopener'}
			>
				LITEPAPER
			</a>
			<p className={styles.copyracy}>
				<span>© 2024 Cryptoflats · </span>
				All Rights Reserved
			</p>
			<div className={styles.socials}>
				<a className={styles.social} href={'https://t.me/cflats'} target={'_blank'} rel={'noreferrer noopener'}>
					<img src={images.Main.Header.Telegram} alt={'telegram'} />
				</a>
				<a className={styles.social} href={'https://x.com/cflatsproject'} target={'_blank'} rel={'noreferrer noopener'}>
					<img src={images.Main.Header.X} alt={'x'} />
				</a>
				<a className={styles.social} href={'https://discord.gg/cflats'} target={'_blank'} rel={'noreferrer noopener'}>
					<img src={images.Main.Header.Discord} alt={'discord'} />
				</a>
			</div>
			<img
				className={styles.shape}
				src={images.Main.Footer.Shape}
				alt={'shape'}
			/>
		</footer>
	)
}
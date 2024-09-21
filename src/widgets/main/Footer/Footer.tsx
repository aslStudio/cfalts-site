import { WebpImage } from '@/shared/ui/WebpImage'
import { images } from '@/shared/lib/images'

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
					<WebpImage src={images.main.header.telegram} alt={'telegram'} />
				</a>
				<a className={styles.social} href={'https://x.com/cflatsproject'} target={'_blank'} rel={'noreferrer noopener'}>
					<WebpImage src={images.main.header.x} alt={'x'} />
				</a>
				<a className={styles.social} href={'https://discord.gg/cflats'} target={'_blank'} rel={'noreferrer noopener'}>
					<WebpImage src={images.main.header.discord} alt={'discord'} />
				</a>
			</div>
			<WebpImage
				className={styles.shape}
				src={images.main.footer.shape}
				alt={'shape'}
			/>
		</footer>
	)
}
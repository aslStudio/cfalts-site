import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';

import styles from './Concept.module.scss'
import { WebpImage } from '@/shared/ui/WebpImage';
import { images } from '@/shared/lib/images';

export const Concept = () => {
	const { ref, classes } = useScrollAnimation()

	return (
		<section ref={ref} className={`${styles.root} container ${classes}`}>
			<div className={styles.info}>
				<h3 className={styles.title}>CONCEPT</h3>
				<p className={styles.description}>
					The main source of inspiration was the idea of a virtual development and meta-verse, where each resident will have their own designer apartments with interactive and financial mechanics.
					<br />
					<br />
					For now we found the perfect combination of visual style, interior and spirit of NFT technology - isometric crypto rooms, which later turn into a full-fledged crypto apartment.
				</p>
			</div>
			<AnimatedRoom />
		</section>
	)
}

const AnimatedRoom = () => (
	<div className={styles.room}>
		<WebpImage 
			src={images.main.concept['1']} 
			alt={'concept-1'} 
		/>
		<WebpImage
			src={images.main.concept['2']} 
			alt={'concept-2'} 
		/>
		<WebpImage 
			src={images.main.concept['3']} 
			alt={'concept-3'} 
		/>
		<WebpImage
			src={images.main.concept['4']} 
			alt={'concept-4'} 
		/>
		<WebpImage
			src={images.main.concept['5']} 
			alt={'concept-5'} 
		/>
		<WebpImage
			src={images.main.concept['6']} 
			alt={'concept-6'} 
		/>
		<WebpImage
			src={images.main.concept['7']} 
			alt={'concept-7'} 
		/>
		<WebpImage
			src={images.main.concept['8']} 
			alt={'concept-8'} 
		/>
	</div>
)
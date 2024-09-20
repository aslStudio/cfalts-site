import { images } from '@/shared/assets/images';

import styles from './Concept.module.scss'
import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';

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
		<img src={images.Main.Concept['1']} alt={'concept-1'} />
		<img src={images.Main.Concept['2']} alt={'concept-2'} />
		<img src={images.Main.Concept['3']} alt={'concept-3'} />
		<img src={images.Main.Concept['4']} alt={'concept-4'} />
		<img src={images.Main.Concept['5']} alt={'concept-5'} />
		<img src={images.Main.Concept['6']} alt={'concept-6'} />
		<img src={images.Main.Concept['7']} alt={'concept-7'} />
		<img src={images.Main.Concept['8']} alt={'concept-8'} />
	</div>
)
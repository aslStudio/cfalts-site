import styles from './RarityProperties.module.scss'
import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
import {InfoSection} from "@/shared/ui/InfoSection";

export const RarityProperties = () => {
	const { ref, classes } = useScrollAnimation()

	return (
		<InfoSection
			sectionRef={ref}
			className={`${styles.root} container ${classes}`}
			title={'RARITY PROPERTIES'}
			description={'Within our NFT collection, each class has a distinct probability of being minted. GEN#1 through GEN#4 will consist of a range of tokens, with quantities decreasing from 5555 to 2222. These tokens will offer standard, silver, gold, and diamond rarities.'}
			view={'blue'}
		/>
	)
}
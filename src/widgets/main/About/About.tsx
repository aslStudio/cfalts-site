import styles from './About.module.scss'
import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
import {InfoSection} from "@/shared/ui/InfoSection";

export const About = () => {
	const { ref, classes } = useScrollAnimation()

	return (
		<InfoSection
			sectionRef={ref}
			className={`${styles.root} container ${classes}`}
			title={'ABOUT'}
			description={'Cryptoflats - is a collection of generated NFT tokens on the Ethereum blockchain. These tokens are isometric rooms with bright design and many detailes. By collecting all of them, you will be able to construct your own Сryptoflat, consisting of 5 types of rooms. First stage is 5555 nft living rooms. The next stages will be 1000 pieces less each.'}
			view={'lightBlue'}
		/>
	)
}
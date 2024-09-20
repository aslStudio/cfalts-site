import styles from './Goal.module.scss'
import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
import {InfoSection} from "@/shared/ui/InfoSection";

export const Goal = () => {
	const { ref, classes } = useScrollAnimation()

	return (
		<InfoSection
			sectionRef={ref}
			className={`${styles.root} container ${classes}`}
			title={'OUR GOAL'}
			description={'Our goal is to become the best project in the crypto sphere, which helps to earn income and have a great time in a game manner. We have tools that will allow you to do this in a short time. Buckle up and get acquainted with our goodies!'}
			view={'blue'}
		/>
	)
}
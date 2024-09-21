import React from 'react';
import { images } from '@/shared/assets/images';

import styles from './SecondGradientBackground.module.scss'

export const SecondGradientBackground = React.memo<React.PropsWithChildren>(({
	children
}) => {
	return (
		<div className={styles.root}>
			<img 
				className={styles['background-1']} 
				src={images.Main.Gradient2.Background} 
				alt={'background'} 
				loading="lazy"
			/>
			<img 
				className={styles['background-2']} 
				src={images.Main.Gradient2.Background} 
				alt={'background'} 
				loading="lazy"
			/>
			{children}
		</div>
	)
})
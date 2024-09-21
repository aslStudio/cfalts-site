import React from 'react';

import { images } from '@/shared/assets/images';
import { OpacityImage } from '@/shared/ui/OpacityImage';

import styles from './SecondGradientBackground.module.scss'

export const SecondGradientBackground = React.memo<React.PropsWithChildren>(({
	children
}) => {
	return (
		<div className={styles.root}>
			<OpacityImage 
				className={styles['background-1']} 
				src={images.Main.Gradient2.Background} 
				alt={'background'}
			/>
			<OpacityImage
				className={styles['background-2']} 
				src={images.Main.Gradient2.Background} 
				alt={'background'}
			/>
			{children}
		</div>
	)
})
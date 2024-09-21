import React from 'react';

import { OpacityImage } from '@/shared/ui/OpacityImage';

import styles from './SecondGradientBackground.module.scss'
import { images } from '@/shared/lib/images';

export const SecondGradientBackground = React.memo<React.PropsWithChildren>(({
	children
}) => {
	return (
		<div className={styles.root}>
			<OpacityImage 
				className={styles['background-1']} 
				src={images.main.gradient2.default} 
				alt={'background'}
			/>
			<OpacityImage
				className={styles['background-2']} 
				src={images.main.gradient2.default} 
				alt={'background'}
			/>
			{children}
		</div>
	)
})
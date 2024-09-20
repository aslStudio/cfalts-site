import React from 'react';

import { images } from '@/shared/assets/images';

import styles from './FirstGradientBackground.module.scss'

export const FirstGradientBackground = React.memo<React.PropsWithChildren>(({
	children
}) => {
	return <div className={styles.root}>
		<img
			className={styles.desktop}
			src={images.Main.Gradient1.desktop}
			alt={'desktop-decoration'}
		/>
		<img
			className={styles.mobile}
			src={images.Main.Gradient1.mobile}
			alt={'mobile-decoration'}
		/>
		{children}
	</div>
})
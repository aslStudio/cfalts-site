import React from 'react';

import { images } from '@/shared/assets/images';
import { OpacityImage } from '@/shared/ui/OpacityImage';

import styles from './FirstGradientBackground.module.scss'

export const FirstGradientBackground = React.memo<React.PropsWithChildren>(({
	children
}) => {
	return <div className={styles.root}>
		<OpacityImage
			className={styles.desktop}
			src={images.Main.Gradient1.desktop}
			alt={'desktop-decoration'}
		/>
		<OpacityImage
			className={styles.mobile}
			src={images.Main.Gradient1.mobile}
			alt={'mobile-decoration'}
		/>
		{children}
	</div>
})
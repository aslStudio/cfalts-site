import React from 'react';

import { OpacityImage } from '@/shared/ui/OpacityImage';

import styles from './FirstGradientBackground.module.scss'
import { images } from '@/shared/lib/images';

export const FirstGradientBackground = React.memo<React.PropsWithChildren>(({
	children
}) => {
	return <div className={styles.root}>
		<OpacityImage
			className={styles.desktop}
			src={images.main.gradient1.desktop}
			alt={'desktop-decoration'}
		/>
		<OpacityImage
			className={styles.mobile}
			src={images.main.gradient1.mobile}
			alt={'mobile-decoration'}
		/>
		{children}
	</div>
})